'use strict';
app.service('managerService', ['$q', '$resource', function ($q, $resource) {

    function defer() {
        return $q.defer();
    }

    function execQuery(method, data, resource){
        var d = defer();

        resource[method](
            data,
            function(response){
                d.resolve(response);
            },
            function (response){
                d.reject(response);
            }
        );

        return d.promise;
    }

    function createResource(url, params){
        return $resource(url, params || idParams, updParams);
    }

    function BaseManager(url, params, type){
        this.sources = {
            main: createResource(url, params)
        };
        this.type = type;
    }

    BaseManager.prototype.getById = function(id){
        return execQuery('get', {id: id}, this.sources.main);
    };

    BaseManager.prototype.getAllByParams = function(params){
        return execQuery('query', params, this.sources.main);
    };

    BaseManager.prototype.remove = function(id){
        return execQuery('remove', {id: id}, this.sources.main);
    };

    BaseManager.prototype.save = function(item){
        var method = item.hasOwnProperty('id') ? 'update' : 'save';
        var type = this.type;

        return execQuery(method, item, this.sources.main).then(function(response) {
            $rootScope.$broadcast(type + ':updated');
        }, function(response) {

        });
    };

    BaseManager.prototype.getType = function() {
        return this.type;
    };


    function Companies(){
        BaseManager.apply(this, ['/api/companies/:id/'], 'companies');
    }
    Companies.prototype = Object.create(BaseManager.prototype);
    Companies.prototype.constructor = Companies;

    function Products(){
        BaseManager.apply(this, ['/api/products/:id/'], 'products');
    }
    Products.prototype = Object.create(BaseManager.prototype);
    Products.prototype.constructor = Products;

    return {
        Companies: new Companies(),
        Products: new Products()
    };
}]);
app.controller('productsEditController', [
    '$scope',
    '$routeParams',
    '$rootScope',
    'managerService',
    function ($scope, $routeParams, $rootScope, managerService){
        $rootScope.$on(managerService.Products.getType() + ':updated', function() {
            alert('changed');
        });

        var productsId = $routeParams.id;

        $scope.loaging = true;
        managerService.Products.getById(productsId).then(
            function (response){
                $scope.loading = false;
                $scope.products_item = response;
            },
            function (response){
                $scope.loading = false;
                $scope.errors = response.data;
            }
        );

        $scope.save = function(){
            $scope.saving = true;
            managerService.Products.save($scope.products_item).then(
                function (response){
                    $scope.saving = false;
                    $scope.products_item = response;
                },
                function (response){
                    $scope.saving = false;
                    $scope.errors = response.data;
                }
            );
        };
    }]);

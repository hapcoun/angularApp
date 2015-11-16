"use strict";
app.controller('productsListController', ['$scope', '$rootScope', 'managerService', function ($scope, $rootScope, managerService) {

    function init(){
        $scope.products = [];
        $scope.params = {};

        loadProducts($scope.params);
    }

    $rootScope.$on(managerService.Products.getType() + ':updated', function() {
        alert('changed');
    });

    $scope.loadProducts = function(params) {
        loadProducts(params);
    };

    function loadProducts(params) {
        $scope.loading = true;
        managerService.Products.getAllByParams(params).then(
            function (rows) {
                $scope.products = rows;
                $scope.loading = false;
            },
            function (response) {
                $scope.errors = response.data;
            }
        );
    }

    init()

}]);




"use strict";
app.controller('productsCreateController', ['$scope', '$rootScope','managerService', function ($scope, $rootScope, managerService){
    $rootScope.$on(managerService.Products.getType() + ':updated', function() {
            alert('changed');
    });

    $scope.save = function(){
        managerService.Products.save($scope.products_data).then(
            function (response){
                $scope.products_data = response;
            },
            function (response){
                $scope.errors = response.data;
            }
        );
    };
}]);

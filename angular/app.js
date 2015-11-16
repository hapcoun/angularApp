'use strict';
var app = angular.module('testApp', ['ngResource', "ngRoute", "ngCookies"]),
    idParams = {id: '@id'},
    updParams = {
        update: {
            method: 'PUT'
        }
    },
    i;

app.config(['$resourceProvider', "$routeProvider", function ($resourceProvider, $routeProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $routeProvider.when("/", {
        templateUrl: "index.php",
        controller: "mainController"
    })
}]);

app.run(['$http', '$cookies', function ($http, $cookies) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
}]);



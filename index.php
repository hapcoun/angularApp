<!doctype html>
<html ng-app="testApp">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>angularApp</title>
    <script src="plugins/angular.js"></script>
    <script src="plugins/angular-resource.min.js"></script>
    <script src="plugins/angular-route.min.js"></script>
    <script src="plugins/angular-cookies.min.js"></script>
    <script src="angular/app.js"></script>
    <script src="angular/services/managerService.js"></script>
    <script src="angular/controllers/mainController.js"></script>
    <script src="angular/controllers/productsCreateController.js"></script>
    <script src="angular/controllers/productsListController.js"></script>
    <script src="angular/controllers/productsEditController.js"></script>
</head>
<body ng-controller="mainController">
<div>
    <label>Имя:</label>
    <input type="text" ng-model="bro">
    <hr>
    <h1>Привет, {{bro}}!</h1>
</div>
</body>
</html>
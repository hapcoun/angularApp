<!doctype html>
<html ng-app="TestApp">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>OK</title>
    <script src="Assets/plugins/angular.js"></script>
    <script src="Assets/plugins/angular-resource.min.js"></script>
    <script src="Assets/plugins/angular-route.min.js"></script>
    <script src="Assets/plugins/angular-cookies.min.js"></script>
    <script src="Assets/angular/app.js"></script>
    <script src="Assets/angular/services/managerService.js"></script>
    <script src="Assets/angular/controllers/mainController.js"></script>
    <script src="Assets/angular/controllers/productsCreateController.js"></script>
    <script src="Assets/angular/controllers/productsListController.js"></script>
    <script src="Assets/angular/controllers/productsEditController.js"></script>
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
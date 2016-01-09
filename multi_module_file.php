<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body ng-app="rootApp">
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script>
    var rootApp = angular.module('rootApp', ['myapp','vanhungapp']);
</script>
<script src="app.js"></script>
<script src="myapp.js"></script>
<div ng-app="myapp" ng-controller="mycontroller">
    <ul>
        <li ng-repeat="x in tasks">{{x.name}}</li>
    </ul>


</div>

<div ng-app="vanhungapp" ng-controller="vanhungcontroller">

    <ul>
        <li ng-repeat="x in datas">{{x.name}}</li>
    </ul>
</div>

</body>
</html>

<!--to do config multi module in file with angular js you need do the following at line 10-->
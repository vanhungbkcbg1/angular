/**
 * Created by vanhung on 1/10/2016.
 */
var app = angular.module('myapp', []);
app.controller('mycontroller', function($scope,$http) {
    getTask();
    function getTask() {
        $http.get("http://localhost/angular/demoangular.php").success(function (data) {
            $scope.tasks = data;
            console.log(data);
        });
    }
});

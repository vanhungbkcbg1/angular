/**
 * Created by vanhung on 1/10/2016.
 */
var app = angular.module('vanhungapp', []);
app.controller('vanhungcontroller', function($scope,$http) {
    getTask();
    function getTask() {
        $http.get("http://localhost/angular/myaction.php").success(function (data) {
            $scope.datas = data;
            console.log(data);
        });
    }
});

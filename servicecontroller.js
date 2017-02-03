/**
 * Created by hungnv on 2/3/2017.
 */

service_app.controller('service_controller', function ($scope,service) {

    $scope.name=service.name;
    $scope.doSomething= function () {
      return service.doSomething();
    };

});

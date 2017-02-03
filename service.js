/**
 * Created by hungnv on 2/3/2017.
 */

service_app.service('service', function () {

    this.name="vanhung";
    this.doSomething=function(){
        return this.name;
    }
});

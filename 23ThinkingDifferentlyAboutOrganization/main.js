var myApp = angular.module('phoneApp', []);

var phoneAppStuff = {}

phoneAppStuff.controllers = {}
phoneAppStuff.controllers.AppCtrl = function ($scope){
    $scope.sayHi = function () {
        alert("hi");
    }
    return $scope.AppCtrl = this;
}

phoneAppStuff.directives = {}
phoneAppStuff.directives.panel = function (){
    return {
        restrict : "E"
    }
}

myApp.directive(phoneAppStuff.directives);
myApp.controller(phoneAppStuff.controllers);

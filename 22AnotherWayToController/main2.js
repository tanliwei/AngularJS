var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {
    this.sayHi = function () {
        alert("hi");
    }
    return $scope.AppCtrl = this;
})

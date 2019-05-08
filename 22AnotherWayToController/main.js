var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {
    $scope.sayHi = function () {
        alert("hi");
    }
})

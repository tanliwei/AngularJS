var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {
    $scope.callHome = function(message){
        alert(message);
    }
})

myApp.directive("phone", function () {
    return {
        scope:{
            dial: "&"
        },
        template: '<input type="text" ng-model="value"/>'
            +'<div class="button" ng-click="dial({message:value})">Calling</div>'
    }
})
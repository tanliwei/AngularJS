var myApp = angular.module('choreApp', []);

myApp.directive("kid", function () {
    return {
        restrict: "E",
        // scope:{},
        template: '<input type="text" ng-model="chore">{{chore}}'
    }
});
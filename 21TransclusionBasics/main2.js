var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {

})

myApp.directive('panel',function () {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="title-bar" ng-transclude>This is a panel component</div>'
    }
})

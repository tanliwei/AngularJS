var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {

})

myApp.directive('panel',function () {
    return {
        restrict: "E",
        template: '<div class="tabs">This is a panel component</div>'
    }
})

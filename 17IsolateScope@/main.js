var myApp = angular.module('drinkApp', []);

myApp.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor = "blackBerry";
});

myApp.directive("drink", function () {
    return {
        scope:{
            flavor:"@"
        },
        template: '<div>{{flavor}}</div>'
    }
})
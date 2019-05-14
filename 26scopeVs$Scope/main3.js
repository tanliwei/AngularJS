var app = angular.module('app', []);

//the name of parameter(provider) matters
app.controller("MyCtrl", function ($http, $scope, $parse) {
    console.log($http);
});
app.directive("myDirective", function () {
    return {
        // the order of parameter matters
        link: function (element, $scope, atts) {
            console.log($scope)
        }
    }
});

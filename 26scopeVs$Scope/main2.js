var app = angular.module('app', []);

app.controller("MyCtrl", function ($scope) {
    console.log($scope);
});
app.directive("myDirective", function () {
    return {
        scope:{},
        link: function (scope) {
            console.log(scope)
        }
    }
});

var app = angular.module('app', ['ngRoute']);

// The following line causes error:Error: [$injector:unpr] Unknown provider: $route
// app.config(function ($routeProvider) {
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "app.html",
                controller: "AppCtrl"
            }
        )
        .when("/pizza",
            {
                template: "Yum!!"
            })
        .otherwise({
            template: "This doesn't exists!"
        })
})

app.controller("AppCtrl", function ($scope, $route) {
    $scope.model = {
        message: "This is my app!!!!!!"
    }
})

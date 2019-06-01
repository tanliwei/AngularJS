var app = angular.module('app', ['ngRoute']);

// The following line causes error:Error: [$injector:unpr] Unknown provider: $route
// app.config(function ($routeProvider) {
app.config(function ($routeProvider) {
    $routeProvider
        .when('/map/:country/:state/:city',
            {
                templateUrl: "app.html",
                controller: "AppCtrl"
            }
        )
})

app.controller("AppCtrl", function ($scope, $routeParams) {
    $scope.model = {
        message: "Address:" +
            $routeParams.country + "," +
            $routeParams.state + "," +
            $routeParams.city
    }
})

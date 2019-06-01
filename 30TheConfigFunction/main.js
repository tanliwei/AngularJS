var app = angular.module('app', ['ngRoute']);

// The following line causes error:Error: [$injector:unpr] Unknown provider: $route
// app.config(function ($routeProvider) {
app.config(function ($routeProvider) {
    // $routeProvider.when('/',
    //     {
    //         templateUrl: "app.html",
    //         controller: "AppCtrl"
    //     }
    // )
})

// The following line causes error:Unknown provider: $routeProviderProvider <- $routeProvider
// app.controller("AppCtrl", function ($scope, $routeProvider) {
// in other words, variable in app.controller will be appended by "Provider"
// wrap a service into provider
// Config should be first before anything like injection
app.controller("AppCtrl", function ($scope, $route) {
    $route.routes["/"] = {
        templateUrl: "app.html",
        controller: "AppCtrl"
    }
    $scope.model = {
        message: "This is my app!!!!!!"
    }
})

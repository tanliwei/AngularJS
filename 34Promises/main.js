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
})

app.controller("AppCtrl", function ($scope, $q) {
    var defer = $q.defer();
    defer.promise
        .then(function (weapon) {
            alert("You can have my " + weapon);
            return "bow";
        })
        .then(function (weapon) {
            alert("And my " +weapon);
            return "axe";
        })
        .then(function (weapon) {
            alert("And my " + weapon);
        });
    defer.resolve("sword");
    $scope.model = {
        message: "This is my app!!!!!!"
    }
})

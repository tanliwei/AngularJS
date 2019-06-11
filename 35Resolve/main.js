var app = angular.module('app', ['ngRoute']);

// The following line causes error:Error: [$injector:unpr] Unknown provider: $route
// app.config(function ($routeProvider) {
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "app.html",
                controller: "AppCtrl",
                //something happens in resolve before controller loading and  template fill up.
                resolve:{
                    app: function ($q, $timeout) {
                        var defer = $q.defer();
                        $timeout(function () {
                            defer.resolve();
                        }, 2000);
                        return defer.promise;
                    }
                }
            }
        )
})

app.controller("AppCtrl", function ($scope, $q) {

    $scope.model = {
        message: "This is my app!!!!!!"
    }
})

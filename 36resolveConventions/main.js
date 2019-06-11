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
                    loadData: appCtrl.loadData,
                    prepData: appCtrl.prepData
                }
            }
        )
})

var appCtrl = app.controller("AppCtrl", function ($scope, $route) {
    console.log($route)
    $scope.model = {
        message: "This is my app!!!!!!"
    }
});

appCtrl.loadData = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        defer.resolve("loadData");
        // console.log("loadData")
    }, 2000);
    return defer.promise;
}


appCtrl.prepData = function ($q, $timeout) {
    var defer = $q.defer();
    //Two consolo.log output at the same time!
    $timeout(function () {
        defer.resolve("prepData");
        // console.log("prepData");
    }, 2000);
    return defer.promise;
}




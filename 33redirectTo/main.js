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
        //e.g. http://localhost:63342/AngularJS/33redirectTo/#/pizza/deep/pepper?name=daniel
        .when("/pizza/:crust/:toppings",
            {
                redirectTo: function (routeParams, path, search) {
                    console.log(routeParams);
                    console.log(path);
                    console.log(search);
                    return "/" + routeParams.crust;
                }
            })
        .when('/deep', {
                template: "Deep fish"
            }
        )
        .otherwise({
            redirectTo: "/"
        })
})

app.controller("AppCtrl", function ($scope, $route) {
    $scope.model = {
        message: "This is my app!!!!!!"
    }
})

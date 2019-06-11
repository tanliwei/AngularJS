var app = angular.module('app', ['ngRoute']);

app.factory("game", function () {
    return {
        title: "StartCraft"
    }
})
angular.injector(["app"]).invoke(
    function (game) {
        alert(game.title + "1");
    })

app.controller("AppCtrl", function ($scope, $injector) {
    //injectors allow providers to come to all the parties
    $injector.invoke(function (game) {
        $scope.title = game.title;
        alert(game.title);
    })

})



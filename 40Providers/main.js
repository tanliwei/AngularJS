var app = angular.module('app', ['ngRoute']);

app.provider("game", function () {
    var type;
    return {
        setType: function (value) {
            type = value
        },
        $get: function () {
            return {
                title: type + "Craft"
            }
        }
    }
})
//factory is a simply way of provider
app.factory("player", function () {
    return {
        name: 'daniel'
    }
})

app.config(function (gameProvider) {
    gameProvider.setType("Puzzle");
})
app.controller("AppCtrl", function ($scope, game, player) {
    $scope.title = game.title + ' ' + player.name;
})



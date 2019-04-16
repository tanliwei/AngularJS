var app = angular.module('twitterApp', []);

app.controller("myController", function ($scope) {
    $scope.loadMoreTweets = function () {
        alert("Loading tweets!");
    }
})
app.directive("enter", function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            scope.loadMoreTweets();
        })
    }
})

app.directive("leave", function () {
    return function (scope, element) {
        element.bind("mouseleave", function () {
            console.log("I'm leaving on a jet plane!");
        })
    }
})
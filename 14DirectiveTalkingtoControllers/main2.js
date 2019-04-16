var app = angular.module('twitterApp', []);

app.controller("myController", function ($scope) {
    $scope.loadMoreTweets = function () {
        alert("Loading tweets!");
    }
    $scope.deleteTweets = function () {
        alert("Deleting tweets!");
    }
})
app.directive("enter", function () {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            // scope.$apply("loadMoreTweets()");
            scope.$apply(attrs.enter);
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
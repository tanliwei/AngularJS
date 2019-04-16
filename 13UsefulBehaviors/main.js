var myApp = angular.module('myApp', []);

myApp.directive("enter", function () {
    return function (scope, element) {
        element.bind("mouseenter", function () {
            element.addClass("h1");
        })
    }
})

myApp.directive("leave", function () {
    return function (scope, element) {
        element.bind("mouseleave", function () {
            element.removeClass("h1");
        })
    }
})
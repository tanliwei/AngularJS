var myApp = angular.module('superhero', []);

myApp.directive("superman", function () {
    return {
        restrict: "A",
        link: function(){
            alert("I'm working");
        }
    }
})
myApp.directive("supermanmark", function () {
    return {
        restrict: "M",
        link: function(){
            alert("I'm working in mark");
        }
    }
})
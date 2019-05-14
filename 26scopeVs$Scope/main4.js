var app = angular.module('app', []);

//the name of parameter(provider) matters
// app.controller("MyCtrl",['$scope', function ($scope) {
//     console.log($scope);
// }] );
app.controller("MyCtrl",['$scope','$http', function (b,a) {
    console.log(a);
}] );
app.directive("myDirective", function ($http,$parse) {
    return {
        // the order of parameter matters
        link: function (element, $scope, atts) {
            console.log($scope)
        }
    }
});

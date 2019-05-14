var app = angular.module('app', []);

app.directive("dumbPassword", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div>\n    <input type=\'text\' ng-model=\'model.input\'>\n    <div>{{model.input}}</div>\n</div>",
        link: function (scope,element) {
            scope.$watch("model.input", function (value) {
                if(value === "password"){
                    element.children(1).toggleClass("button");
                }
            })
        }
    }
})

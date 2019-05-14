var app = angular.module('app', []);

app.directive("dumbPassword", function () {
    var validElement = angular.element("<div>{{model.input}}</div>");
    this.link = function (scope) {
        scope.$watch("model.input", function (value) {
            if (value === "password") {
                validElement.toggleClass("button")
            }
        })
    }

    return {
        restrict: "E",
        replace: true,
        template: "<div>\n    <input type=\'text\' ng-model=\'model.input\'>\n</div>",
        compile: function (tElem) {
            tElem.append(validElement);
            return link;
        }
    }

});

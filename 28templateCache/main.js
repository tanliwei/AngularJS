var app = angular.module('app', []);

app.directive("zippy", function ($templateCache) {
    return {
        restrict: "E",
        transclude:true,
        scope:{
            title:"@"
        },
        template: $templateCache.get("zippy.html"),

        link: function (scope) {
            scope.isContentVisible = false;
            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            }
        }
    }
})

var myApp = angular.module('phoneApp', []);

myApp.controller("AppCtrl", function ($scope) {
    $scope.leaveVoicemail = function(number, message){
        alert("Number:"+ number + " said:" + message);
    }
})

myApp.directive("phone", function () {
    return {
        restrict: "E",
        scope:{
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template: '<div >Number: {{number}}: Network:<select ng-model="network" ng-init="network = networks[0]" ng-options=" x for x in networks"></select></div> '+
            '<input type="text" ng-model="value">' +
            '<div class="button" ng-click="makeCall({number: number, message:value})">Calling</div>',
        link: function (scope) {
            scope.networks = ["移动", "联通", "电信"];
            scope.network = scope.networks[0];
        }
    }
})
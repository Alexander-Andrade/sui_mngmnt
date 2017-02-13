directives = angular.module('directives');

directives.directive('mngmtProgress', function() {
    return {
        templateUrl: '_mngmt_progress.html',
        scope: {
            icon: '@',
            title: '@',
            data: '=',
            barColor1: '@',
            barColor2: '@'
        }
    }
});
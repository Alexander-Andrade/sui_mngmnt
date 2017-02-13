directives = angular.module('directives');

directives.directive('mngmtCard', function() {
    return {
        templateUrl: '_mngmt_card.html',
        scope: {
            node: '=',
            nextUrl: '&'
        }
    };
});

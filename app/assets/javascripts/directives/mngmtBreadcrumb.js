directives = angular.module('directives');

directives.directive('mngmtBreadcrumb', function() {
    return {
        templateUrl: '_mngmt_breadcrumb.html',
        scope: {
            list: '='
        }
    }
});
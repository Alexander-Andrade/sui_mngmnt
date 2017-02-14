directives = angular.module('directives');

directives.directive('mngmntBreadcrumb', function() {
    return {
        templateUrl: '_mngmt_breadcrumb.html',
        scope: {
            list: '='
        }
    }
});
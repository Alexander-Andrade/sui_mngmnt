controllers = angular.module('controllers');

controllers.controller('accountCtrl', accountCtrl);
accountCtrl.$inject = ['$scope', '$location','rootNode', 'nodesHelper', 'urlHelper'];
function accountCtrl($scope, $location,rootNode, nodesHelper, urlHelper) {
    nodesHelper.setParentRelations(rootNode);
    $scope.data = nodesHelper.findDataByPath(rootNode);
    $scope.types = nodesHelper.getTypes($scope.data);
    $scope.breadcrumbList = urlHelper.breadcrumbList($scope.data[0].parent);
    $scope.hasElemsWithType = nodesHelper.hasElemsWithType;

    $scope.nextUrl = function (node) {
        var path = $location.absUrl();

        if(urlHelper.isAccountPath(path)){
            return urlHelper.locationsPath();
        }
        if(urlHelper.isLocationsPath(path)){
            return ( typeof node.children != 'undefined' && node.children instanceof Array ) ? path+'/'+node.id : path;
        }
        if(urlHelper.isLocationPath(path) || urlHelper.isTenantPath(path)){
            if(typeof node.children != 'undefined' && node.children instanceof Array) {
                switch (node.type.toLowerCase()) {
                    case "tenant":
                        return path + '/tenants/' + node.id;
                    case "miqgroup":
                        return path + '/miqgroups/' + node.id + '/users';
                    case "project":
                        return path + '/projects/' + node.id + '/services';
                }
            }
            else{ return path;}
        }
        if(urlHelper.isUsersPath(path)){
            return ( typeof node.children != 'undefined' && node.children instanceof Array ) ? path+'/'+node.id+'/services' : path;
        }
        if(urlHelper.isServicesPath(path)){
            return path;
        }
    };
}


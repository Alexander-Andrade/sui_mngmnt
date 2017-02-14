controllers = angular.module('controllers');

controllers.controller('accountCtrl', accountCtrl);
accountCtrl.$inject = ['$scope', '$location','rootNode', 'nodesHelper', 'urlHelper'];
function accountCtrl($scope, $location,rootNode, nodesHelper, urlHelper) {
    nodesHelper.setParentRelations(rootNode);
    $scope.data = nodesHelper.findDataByPath(rootNode);
    $scope.types = nodesHelper.getTypes($scope.data);
    $scope.breadcrumbList = urlHelper.breadcrumbList($scope.data[0].parent);
    $scope.elementsOfType = nodesHelper.elementsOfType;

    $scope.nextUrl = function (node) {
      return urlHelper.nextUrl(node);
    };
}


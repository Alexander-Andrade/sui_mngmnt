services = angular.module('services');

services.service('nodesHelper', nodesHelper);
nodesHelper.$inject = ['$stateParams'];
function nodesHelper ($stateParams) {

    this.findDataByPath = function(rootNode){
        var paramArgs = $stateParams.path.split('/').slice(1);

        var node = rootNode;
        var children = [rootNode];

        var len = paramArgs.length;
        for(var i=0; i<len; i++){
            //if number
            if(!isNaN(paramArgs[i])){
                node = children.find(function(elem, ind, arr) {
                    return elem.id==(+paramArgs[i]);
                });
                children = node.children;
            }
            else{
                children = node.children.filter(function (child) {
                    return paramArgs[i].startsWith(child.type.toLowerCase());
                });
            }
        }
        return children;
    };
        
    this.setParentRelations = function (node) {
        if(typeof node.children != 'undefined' && node.children instanceof Array){
            var len = node.children.length;
            for(var i=0;i<len;i++){
                node.children[i].parent = node;
                this.setParentRelations(node.children[i]);
            }
        }
    };
    
    this.getTypes = function(data){
        var types = data.map(function (el) {
            return el.type;
        });
        return Array.from(new Set(types));
    };

    this.hasElemsWithType = function (arr, type) {
        if(typeof arr === 'undefined' && arr.length === 0){
            return false;
        }
        if(type !== undefined) {
            if (arr.find(function (el) {
                    return el.type === type;
                })) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }
}
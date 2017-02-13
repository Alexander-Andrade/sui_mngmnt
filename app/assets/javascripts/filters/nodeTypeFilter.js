filters = angular.module('filters');

filters.filter('nodeTypeFilter', function() {
    return function(input, type) {
        var elems = [];

        for (var i = 0; i < input.length; i++) {
            if (input[i].type == type) {
                elems.push(input[i]);
            }
        }
        return elems;
    };
});

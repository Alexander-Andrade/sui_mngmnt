var app = angular.module('app',
    ['ui.router',
     'ngResource',
     'patternfly.charts',
     'patternfly.card',
     'templates',
     'controllers',
     'services',
     'directives',
     'filters'
    ]);

app.config(['$stateProvider','$urlRouterProvider','$qProvider', function ($stateProvider, $urlRouterProvider, $qProvider) {
    // $qProvider.errorOnUnhandledRejections(false);
    $stateProvider
        .state('error', {
            url:'/error',
            templateUrl:'404.html'
        })
        .state('account',{
            url:'/myaccount{path:.*}',
            templateUrl:'_mngmt_view.html',
            controller: 'accountCtrl',
            resolve:{
                rootNode:['nodesServ' ,function (nodesServ) {
                    return nodesServ.getPromise();
                }]
            },
            onEnter: ['$state','urlHelper','$location', function($state, urlHelper, $location){
                var url = $location.absUrl();

                if(!(urlHelper.isCorrectPath(url))){
                    $state.go('error');
                }
            }]
        });
    // $urlRouterProvider.otherwise('account');
}]);

controllers = angular.module('controllers',[]);
services = angular.module('services',[]);
directives = angular.module('directives',[]);
filters = angular.module('filters',[]);


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

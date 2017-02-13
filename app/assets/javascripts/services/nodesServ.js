services = angular.module('services');

services.service('nodesServ', nodesServ);
nodesServ.$inject = ['$http'];
function nodesServ($http) {
    //singleton (get json only one time)
    this.promise = null;

    function makeRequest() {
        // $http returns a promise, which has a then function, which also returns a promise
        return $http.get('sui_account_mgmt_example.json').then(function (response) {
            return response.data;
        });
    }
    this.getPromise = function (update) {
        if(update || !this.promise){
            console.log("request !!!");
            this.promise = makeRequest();
        }
        return this.promise;
    }
}

var defaultListApp = angular.module('defaultListApp', ['builder', 'builder_editors']);
defaultListApp.controller('defaultListCtrl', ['$scope','Restangular', function($scope, Restangular){
    $scope.items = ['item1','item2','item3','item4'];
    Restangular.setBaseUrl('https://pickupstore.cfapps.us10.hana.ondemand.com');
    Restangular.one('/pickstores').getList().then(function(items){
        $scope.items = items;
    },function(error){
        //handle error
    });

}]);

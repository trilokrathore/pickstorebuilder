var registerModule = angular.module('registerModule', ['builder', 'builder_editors']);


 registerModule.controller('registerstorecontroller', function ($scope, $http,Restangular, currentAccountId, currentProjectId, notificationManager, linkManager) {
      
     
     $scope.submit = function() {
         $scope.pickServiceUrl = Builder.currentWidget.settings.pickServiceUrl;
         Restangular.setBaseUrl($scope.pickServiceUrl);
         console.info($scope.title);
         var pickupstore= {
             id:$scope.pickupstoreid,
             title:$scope.title
         };
         var res=Restangular.all("pickupstores").post(pickupstore);
         console.info(res)
 }
     
 } );
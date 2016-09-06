var pickupstoreModule = angular.module('pickupstoreModule', ['builder', 'builder_editors']);


 pickupstoreModule.controller('pickstorecontroller', function ($scope, Restangular, currentAccountId, currentProjectId, notificationManager, linkManager) {

     $scope.pickServiceUrl = Builder.currentWidget.settings.pickServiceUrl;
     Restangular.setBaseUrl($scope.pickServiceUrl);

     Restangular.all("pickupstores").getList().then(function (response) {
         $scope.pickstores = Restangular.stripRestangular(response)
     });
 } );
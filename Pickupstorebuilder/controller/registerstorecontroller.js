var registerModule = angular.module('registerModule', ['builder', 'builder_editors']);


 registerModule.controller('registerstorecontroller', function ($scope, $http,Restangular, currentAccountId, currentProjectId, notificationManager, linkManager) {
      
     //notificationManager.showSuccess("Thank You!");
         $scope.submit = function() {
         $scope.pickServiceUrl = Builder.currentWidget.settings.pickServiceUrl;
         Restangular.setBaseUrl($scope.pickServiceUrl);
         
         var pickupstore= {
             id:$scope.id,
             name:$scope.name,
             latitude:$scope.latitude,
             longitude:$scope.longitude,
             contactdetials:$scope.contactdetials,
             emailId:$scope.emailId,
             openingschedule:$scope.openingschedule,
             closingschedule:$scope.closingschedule,
             pincode:$scope.pincode
             
         };
         var res=Restangular.all("pickupstores").post(pickupstore).then(function (response) {
             notificationManager.showSuccess("Thank You! " + "<b>"+$scope.id+"</b>");
             $scope.clearOldValue();
         });
        
    $scope.clearOldValue=function(){
        $scope.id='';
        $scope.name='';
        $scope.latitude='';
        $scope.longitude='';
        $scope.contactdetials='';
        $scope.emailId='';
        $scope.openingschedule='';
        $scope.closingschedule='';
        $scope.pincode='';
    }
              
 }
     
 } );
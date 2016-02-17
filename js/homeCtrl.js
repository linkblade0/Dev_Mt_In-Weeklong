var app = angular.module('devMtIn')
app.controller('homeCtrl', function($scope, profileService) {

$scope.editing = false;


// $scope.enabled = function(){
//   if($scope.editing === false){
//     $scope.editing = true;
//     $scope.enabled = 'Enabled';
//   } else {
//     $scope.editing = false;
//     $scope.enabled = 'Disabled';
//   }
//   return $scope.enabled;
// }



$scope.saveProfile = function(profile) {
  profileService.saveProfile(profile);
  $scope.editing = false;
}

$scope.deleteProfile = function(){
  profileService.deleteProfile();
  $scope.myProfile = profileService.checkForProfile();
}

//my friends list
  $scope.myProfile = profileService.checkForProfile();

//array for ng-options
  $scope.sortOptions = [{
    display: 'Ascending',
    value: false
  },
  {
    display: 'Descending',
    value: true
  }];

});

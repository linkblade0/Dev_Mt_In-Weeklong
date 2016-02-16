var app = angular.module('devMtIn')
app.controller('homeCtrl', function($scope, profileService) {

$scope.editing = false;

$scope.saveProfile = function(profile) {
  profileService.saveProfile(profile);
  $scope.editing = false;
}

$scope.deleteProfile = function(){
  profileService.deleteProfile();
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

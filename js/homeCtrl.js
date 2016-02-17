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
}

$scope.deleteProfile = function(){
  profileService.deleteProfile()
  .then(function(deletedProfile) {
    localStorage.removeItem('profileID');
    $scope.myProfile = {};
  })
  .catch(function(err) {
    console.error(err);
  });
}

//my friends list
  $scope.checkForProfile = function() {
    var profileId = JSON.parse(localStorage.getItem('profileId'));

    if (profileId) {
      profileService.checkForProfile(profileId.profileId)
      .then(function(profile) {
        $scope.myProfile = profile.data;
      })
      .catch(function(err) {
        console.error(err)
      });
     }
  }

  $scope.checkForProfile();

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

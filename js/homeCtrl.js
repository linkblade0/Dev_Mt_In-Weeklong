var app = angular.module('devMtIn')
app.controller('homeCtrl', function($scope, profileService, friendService) {

$scope.editing = false;

//Profile functions attached to profileService.js
$scope.saveProfile = function(profile) {
  profileService.saveProfile(profile);
  $scope.editing = false;
}

$scope.deleteProfile = function(){
  profileService.deleteProfile()
    .then(function(deletedProfile) {
      localStorage.removeItem('profileId');
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
        friendService.findFriendsFriends(profile.data);
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
  //---------------

  //Friend list functions pulling from friendService.js


  $scope.findFriends = function(query) {
    friendService.findFriends($scope.myProfile._id, query)
    .then(function(potentialFriends) {
      $scope.potentialFriends = potentialFriends;
    });
  }

  $scope.addFriend = function(friendId) {
    friendService.addFriend($scope.myProfile._id, friendId)
    .then(function(profile){
      $scope.checkForProfile();
    })
    .catch(function(err) {
      return console.error(err);
    });
  }

  $scope.removeFriend = function(friendId) {
    friendService.removeFriend($scope.myProfile._id, friendId)
    .then(function(profile) {
      $scope.checkForProfile();
    })
    .catch(function(err) {
      return console.error(err);
    });
  }

});

angular.module('devMtIn')
.service('profileService', function() {

  var baseUrl = 'http://connections.devmounta.in/'

this.saveProfile = function(profile) {
  return $http({
    method: 'Post', //Request method
    url: baseUrl + 'api/profiles/', //URL we are making the request to.
    data: profile //The data we are requesting be posted
  })
  .then(function(profileResponse) {
    localStorage.setItem('profileId', JSON.stringify({profileId: profileResponse.data._id}));  //Save our unique _id to local storage
    console.log(profileResponse);
  })
  .catch(function(err) {
    console.log(err);
  });
}

this.checkForProfile = function(profileID) {
  return $http({
    method: 'GET',
    url: baseUrl + 'api/profile/' + profileId
  });
}

this.deleteProfile = function(){
  var profileID = JSON.parse(localStorage.getItem('profileId')).profileId;

  return $http({
    method: 'DELETE',
    url: baseUrl + 'api/profiles/' + profileID
  });
}

});

// Save files to local storage
//  localStorage.setItem('profile', JSON.stringify(profile));

//Retrieves files from local storage
//  if (localStorage.getItem('profile')) {
//    return JSON.parse(localStorage.getItem('profile'));
//  }

// Removes files from local storage
// localStorage.removeItem('profile');

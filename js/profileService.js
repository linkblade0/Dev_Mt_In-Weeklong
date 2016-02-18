var app = angular.module('devMtIn');
app.service('profileService', function($http) {

  var baseUrl = 'http://connections.devmounta.in/'

this.saveProfile = function(profile) {
  return $http({
    method: 'POST', //Request method
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

this.checkForProfile = function(profileId) {
  return $http({
    method: 'GET',
    url: 'http://connections.devmounta.in/api/profiles/' + profileId
  }).then(function(response){
    return response;
  })
}

this.deleteProfile = function(){
  var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;

  return $http({
    method: 'DELETE',
    url: baseUrl + 'api/profiles/' + profileId
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

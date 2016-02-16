angular.module('devMtIn')
.service('profileService', function() {

this.saveProfile = function(profile) {
  localStorage.setItem('profile', JSON.stringify(profile));
}

this.checkForProfile = function() {
  if (localStorage.getItem('profile')) {
    return JSON.parse(localStorage.getItem('profile'));
  }
  return {
    friends: [
      {name: 'Mike'},
      {name: 'Jesse'},
      {name: 'Ashley'},
      {name: 'Quindle'},
      {name: 'Snow'}
    ]
  }
}

this.deleteProfile = function(){
  localStorage.removeItem('profile')
}

});

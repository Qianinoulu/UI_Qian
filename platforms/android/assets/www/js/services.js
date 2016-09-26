angular.module('starter.services', [])

.factory('Browses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var browse = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
     
    id: 4,
    name: 'lucy',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {

    id: 5,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return Browses;
    },
    remove: function(browse) {
      browses.splice(Browses.indexOf(browse), 1);
    },
    get: function(browseId) {
      for (var i = 0; i < Browses.length; i++) {
        if (Browses[i].id === parseInt(browseId)) {
          return Browses[i];
        }
      }
      return null;
    }
  };
});

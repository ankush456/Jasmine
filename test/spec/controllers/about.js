'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('gitHubApp'));

  var mockService = {
    notes: ['note1', 'note2'], //just two elements initially
    get: function() {
      return this.notes;
    },
    put: function(content) {
      this.notes.push(content);
    }
  };

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should return notes array with two elements initially and then add one',
    inject(function($rootScope, $controller) { //injects the dependencies
      var scope = $rootScope.$new();
 
      // while creating the controller we have to inject the dependencies too.
      var ctrl = $controller('AboutCtrl', {$scope: scope, notesFactory:mockService});
 
      // the initial count should be two
      expect(scope.notes.length).toBe(2);
 
      // enter a new note (Just like typing something into text box)
      scope.note = 'test3';
 
      // now run the function that adds a new note (the result of hitting the button in HTML)
      scope.createNote();
 
      // expect the count of notes to have been increased by one!
      expect(scope.notes.length).toBe(3);
    })
  );
});

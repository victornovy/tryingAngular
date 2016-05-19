var notesApp = angular.module('notesApp', []);

notesApp.controller('MainCtrl', ['$http', function($http) {
    var self = this;

    self.items = [];
    $http.get('/api/notes').then(function(response) {
        self.items = response.data;
    }, function(errResponse) {
        console.error('Error while fetching notes.',errResponse);
    });
}]);
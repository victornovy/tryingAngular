var notesApp = angular.module('notesApp', []);

notesApp.controller('MainCtrl', ['$http', function($http) {
    var self = this;

    self.items = [],
        newTodo = {};

    var fetchData = function() {
        $http.get('/api/notes').then(function(response) {
            self.items = response.data;
        }, function(errResponse) {
            console.error('Error while fetching notes.',errResponse);
        });
    };

    fetchData();

    self.add = function() {
        $http.post('/api/note', self.newTodo).then(function(fetching) {
            self.items = fetching.data;
        });
    };
}]);
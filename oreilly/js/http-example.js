var notesApp = angular.module('notesApp', []);

notesApp.controller('MainCtrl', ['NotesService', function(notesService) {
    var self = this;

    self.items = [],
        newTodo = {};

    var setNotes = function(allNotes) {
        self.items = allNotes.data;
    };

    notesService.query().then(setNotes);

    self.add = function() {
        notesService.add(self.newTodo).then(setNotes);
    };
}]);

notesApp.factory('NotesService', ['$http', function($http) {

    var query = function() {
        return $http.get('/api/notes');
    };

    var add = function(newNote) {
        return $http.post('/api/note', newNote);
    };

    var finishNote = function(noteDetail) {
        var noteId = noteDetail.id;
        return $http.post('/api/note/' + noteId, noteId);
    };

    return {
        "query": query,
        "add": add,
        "finishNote": finishNote
    }
}]);
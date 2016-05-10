var basicApp = angular.module('basicApp', []);

basicApp.controller('MainCtrl', [function() {
    var self = this;
    self.hello = 'Hello ' + (self.hello || 'User');

    self.message = 'This is a message.';
    self.changeMessage = function() {
        self.message = 'Ops! Changed message!!';
    };
}]);

basicApp.controller('RepeatCtrl', [function() {
    var self = this;
    self.notes = {
        "James": {
            "id": 1,
            "label": "First Note",
            "done": false
        },
        "Misko": {
            "id": 2,
            "label": "Second Note",
            "done": false,
            "assignee": "Shyam"
        },
        "Dao": {
            "id": 3,
            "label": "Done Note",
            "done": true
        },
        "Brad": {
            "id": 4,
            "label": "Last Note",
            "done": false,
            "assignee": "Brad"
        }
    };

    self.getNoteClass = function(status) {
        return {
            "done": status,
            "pending": !status
        };
    };
}]);

basicApp.controller('BasicFormCtrl', [function() {
    var self = this;
    self.submit = function() {
        console.log('User clicked submit with', self.user);
    };

    self.formHasError = function(hasError) {
        return {
            "form-error": hasError,
            "form-success": !hasError
        };
    };
}]);
var basicApp = angular.module('basicApp', []);

basicApp.controller('MainCtrl', [function() {
    self = this;
    self.hello = 'Hello ' + (self.hello || 'User');

    self.message = 'This is a message.';
    self.changeMessage = function() {
        self.message = 'Ops! Changed message!!';
    };
}]);
var app = angular.module('basicApp', []);

app.controller('LogService', ['$log', function($log) {
    var self = this;

    self.logStuff = function() {
        $log.log('The button was pressed')
    };
}]);
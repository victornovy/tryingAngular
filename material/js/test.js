var test = angular.module('test', ['ngMaterial']);

test.controller('MainCtrl', [function () {
    var self = this;

    self.message = 'Hello';
    self.author = 'Victor';
    self.noCache = 'Disable caching of queries?';
    console.log('lol');
}]);
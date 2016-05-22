var filterApp = angular.module('filterApp', []);

filterApp.controller('FilterCtrl', [function() {
    var self = this;

    self.amount = 1024.22;
    self.totalCost = 4906;
    self.name = 'Shayn Seshadri';
    self.startTime = new Date().getTime('d/m/Y');
    self.obj = {test: 'value', num: 123};

    self.notes = [
        {label: 'FC Todo', type: 'chore', done: false},
        {label: 'FT Todo', type: 'task', done: false},
        {label: 'FF Todo', type: 'fun', done: true},
        {label: 'SC Todo', type: 'chore', done: false},
        {label: 'ST Todo', type: 'task', done: true},
        {label: 'SF Todo', type: 'fun', done: true},
        {label: 'TC Todo', type: 'chore', done: false},
        {label: 'TT Todo', type: 'tasxk', done: false},
        {label: 'TF Tzodo', type: 'fun', done: false}
    ];
    self.sortOrder = ['+type', '-label'];
    self.filterOptions = {
        string: '',
        object: {done: false, label: 'C'},
        function: function(note) {
            return note.type === 'task' && note.done === false;
        }
    };
    self.currentFilter = 'string';
    self.limit = 5;
}]);
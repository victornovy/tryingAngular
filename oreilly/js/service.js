var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/js', express.static(__dirname + '/../js'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use('/styles', express.static(__dirname + '/../styles'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../http-get-example.html'));
});

var router = express.Router(),
    notes = [
        {id: 1, label: 'First', author: 'Shyam'},
        {id: 2, label: 'Second', author: 'Bread'},
        {id: 3, label: 'Third', author: 'Louve'},
        {id: 4, label: 'Fourth', author: 'Steam'},
        {id: 5, label: 'Fifth', author: 'Sho'}
    ],
    lastId = 5;

router.get('/notes', function(req, res) {
    res.send(notes);
});

router.post('/note', function(req, res) {
    var note = req.body;
    note.id = ++lastId;
    notes.push(note);
    res.send(notes);
});

router.post('/note/:id/', function(req, res) {
    var note = notes.filter(function(note) {
        return note.id = req.params.id;
    });
    note.label = 'Done - ' + note.label;
    res.send(notes);
});

router.get('/note/:id', function(req, res) {
    var code = 200,
        note = notes.filter(function(note) {
            return note.id = req.params.id;
        });

    if (!note.length) {
        code = 404;
        note = {msg: 'Note not found.'};
    }

    res.send(note, code);
});

router.post('/note/:id', function(req, res) {
    var code = 200,
        note = notes.filter(function(note) {
            return note.id = req.params.id;
        });

    if (!!note.length) {
        note.label = req.body.label;
        note.author = req.body.author;
    } else {
        code = 404;
        note = {msg: 'Note not found.'};
    }

   res.send(note, code);
});

app.use('/api', router);

app.listen(8000);
console.log('Open http://localhost:8000 to access the files now');
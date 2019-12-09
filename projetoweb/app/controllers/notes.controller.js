const Note = require('../models/notes.model.js');
 
// salva 1 nota - mongo
exports.save = (req, res) => {
	console.log('Post a Note: ' + JSON.stringify(req.body));
	
    // cria uma nota
    const note = new Note({
        id: req.body.id,
		content: req.body.content
    });
 
    // salva no mongo
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// mostra todos
exports.findAll = (req, res) =>  {
    Note.find()
    .then(note => {
        res.send(note);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

var ObjectID = require('mongodb').ObjectID;

    module.exports = function(app, db) {
       
    app.get('/tasks', (req, res) => {
        db.collection('tasks').find({}).toArray(function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
              } else {
                res.send(result);
              }
          });
      });
    app.get('/tasks/:id', (req, res) => {
        const id = req.params.id;
        console.log(id);
        const details = { '_id': new ObjectID(id) };
        db.collection('tasks').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
      });
    app.post('/tasks', (req, res) => {
      const note = { text: req.body.body, title: req.body.title };
      db.collection('tasks').insert(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
    app.put ('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('tasks').update(details, note, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(note);
          } 
        });
      });
    app.delete('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('tasks').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Task ' + id + ' deleted!');
          } 
        });
      });
  };
var ObjectID = require('mongodb').ObjectID;


    module.exports = function(app, db) {
       
    app.get('/tasks', (req, res) => {
        let cursor = db.collection('tasks').find({});
        cursor.toArray(function(err, result){
          if (err) {
             res.status(500).send({'error':'An error has occurred'});
          }
          else{
            res.status(200).send(result);
          }
        });
      });
    app.get('/tasks/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('tasks').findOne(details, (err, item) => {
          if (err) {
            res.status(500).send({'error':'An error has occurred'});
          } else {
            console.log(item);
            res.status(200).send(item);
          }
        });
      });
    app.post('/task', (req, res) => {
      let json = JSON.stringify(req.body);
      let data = JSON.parse(json);
      const note = { 
        name: data.name, 
        deadline: data.deadline, 
        details: data.details, 
        isMade: data.isMade, 
      };
      db.collection('tasks').insert(note, (err, result) => {
        if (err) { 
          res.status(500).send({ 'error': 'An error has occurred' }); 
        } else {
          res.status(201);
        }
      });
    });
    app.put ('/task/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { 
          name: req.body.name, 
          deadline: req.body.deadline, 
          details: req.body.details, 
          isMade: req.body.isMade, 
        };
        db.collection('tasks').update(details, note, (err, result) => {
          if (err) {
              res.status(500).send({'error':'An error has occurred'});
          } else {
              res.status(200).send(result);
          } 
        });
      });

      app.put ('/task/:id/status/:statusBool', (req, res) => {
        const id = req.params.id;
        const statusBool = req.params.statusBool;
        const details = { '_id': new ObjectID(id) };
        const note = { 
          name: req.body.name, 
          deadline: req.body.deadline, 
          details: req.body.details, 
          isMade: statusBool, 
        };
        db.collection('tasks').update(details, note, (err, result) => {
          if (err) {
              res.status(500).send({'error':'An error has occurred'});
          } else {
              res.status(200).send(result);
          } 
        });
      });
    app.delete('/task/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('tasks').remove(details, (err, item) => {
          if (err) {
            res.status(500).send({'error':'An error has occurred'});
          } else {
            res.status(201);
          } 
        });
      });
  };
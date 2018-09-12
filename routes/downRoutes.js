module.exports = app => {
  app.post('/api/download', (req, res) => {
    res.send(req.body.id);


  });
 }

const express = require('express');
const app = express();
const feedController = require('./controller/feedController');

app.use(express.static('client/public'));
app.use(express.json());

app.get('/', (req, res) => res.sendFile('index.html', { root: './client/views' }));
app.get('/feed', (req, res) => res.sendFile('feed.html', { root: './client/views' }));
app.get('/1', (req, res) => res.sendFile('1.html', { root: './client/views' }));
app.get('/2', (req, res) => res.sendFile('2.html', { root: './client/views' }));
app.get('/3', (req, res) => res.sendFile('3.html', { root: './client/views' }));

app.route('/api/feed')
  .get(feedController.getFeedItems)
  .post(feedController.saveFeedItem);

app.route('/api/feed/:id')
  .get(feedController.getFeedItem)
  .delete(feedController.deleteFeedItem)
  .patch(feedController.updateFeedItem);

app.get('/api/people', feedController.getPeople);
app.get('/api/people/:id', feedController.getPersonById);

app.listen(1337, () => {
  console.log('Listening on port 1337.');
});



const express = require('express');
const app = express();
const feedController = require('./controller/feedController'); 

// Middleware
app.use(express.static('client/public')); 
app.use(express.json()); 

// Serve HTML pages
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'});
});

app.get('/feed', function(req, res){
    res.sendFile('feed.html', {root: './client/views'});
});

app.get('/1', function(req, res){
    res.sendFile('1.html', {root: './client/views'});
});

app.get('/2', function(req, res){
    res.sendFile('2.html', {root: './client/views'});
});

app.get('/3', function(req, res){
    res.sendFile('3.html', {root: './client/views'});
});

// Feed API routes
app.route('/api/feed')
    .get(feedController.getFeedItems)      
    .post(feedController.saveFeedItem);    

app.route('/api/feed/:id')
    .get(feedController.getFeedItem)       
    .delete(feedController.deleteFeedItem) 
    .patch(feedController.updateFeedItem); 

// NEW: People API route
app.get('/api/people', feedController.getPeople);

app.listen(1337, () => {
    console.log('Listening on port 1337.');
});

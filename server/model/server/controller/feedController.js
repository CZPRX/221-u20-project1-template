const feedModel = require('../model/feedItem');

exports.getFeedItems = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(feedModel.getAllFeedItems());
};

exports.saveFeedItem = (req, res) => {
  const newItem = feedModel.createFeedItem(
    req.body.title,
    req.body.body,
    req.body.linkUrl,
    req.body.imageUrl
  );
  res.setHeader('Content-Type', 'application/json');
  res.send(newItem);
};

exports.getFeedItem = (req, res) => {
  const item = feedModel.getFeedItemById(req.params.id);
  res.setHeader('Content-Type', 'application/json');
  res.send(item || {});
};

exports.deleteFeedItem = (req, res) => {
  feedModel.deleteFeedItem(req.params.id);
  res.setHeader('Content-Type', 'application/json');
  res.send({ message: 'Item deleted' });
};

exports.updateFeedItem = (req, res) => {
  const updatedItem = feedModel.updateFeedItem(req.params.id, req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(updatedItem || {});
};



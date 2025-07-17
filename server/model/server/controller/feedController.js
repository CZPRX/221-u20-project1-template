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

const person = require('../model/person');

let person1 = person.createPerson('Angel', 'Duarte', 'Purple');
let person2 = person.createPerson('Cristopher', 'Rivera', 'Red');
let person3 = person.createPerson('Luis', 'Trejo', 'Green');

const people = [person1, person2, person3];

exports.getPeople = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(people);
};

exports.getPersonById = (req, res) => {
  const id = parseInt(req.params.id); // turns "1" into 1
  const person = people[id];

  res.setHeader('Content-Type', 'application/json');

  if (person) {
    res.send(person);
  } else {
    res.status(404).send({ error: 'Person not found' });
  }
};




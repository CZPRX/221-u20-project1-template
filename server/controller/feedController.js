const feedModel = require('../model/feedItem');
const person = require('../model/person');

let person1 = person.createPerson('Angel', 'Duarte', 'Purple');
let person2 = person.createPerson('Cristopher', 'Rivera', 'Red');
let person3 = person.createPerson('Luis', 'Trejo', 'Green');

let people = [person1, person2, person3];
console.log("People array loaded:", people);


exports.getPeople = function(req, res) {
  console.log("GET /api/people called");
  res.setHeader('Content-Type', 'application/json');
  res.send(people);
};

exports.getPersonById = function(req, res) {
  const id = parseInt(req.params.id);
  console.log(`GET /api/people/${id} called`);

  const person = people[id - 1];

  res.setHeader('Content-Type', 'application/json');

  if (person) {
    res.send(person);
    res.status(404).send({ error: 'Person not found' });
  }
};

exports.getFeedItems = function(req, res) {
  console.log("GET /api/feed called");
  res.setHeader('Content-Type', 'application/json');
  res.send(feedModel.getAllFeedItems());
};

exports.saveFeedItem = function(req, res) {
  console.log("POST /api/feed called with data:", req.body);
  const newItem = feedModel.createFeedItem(
    req.body.title,
    req.body.body,
    req.body.linkUrl,
    req.body.imageUrl
  );
  res.setHeader('Content-Type', 'application/json');
  res.send(newItem);
};

exports.getFeedItem = function(req, res) {
  const id = req.params.id;
  console.log(`GET /api/feed/${id} called`);
  const item = feedModel.getFeedItemById(id);
  res.setHeader('Content-Type', 'application/json');
  if (item) {
    res.send(item);
  } else {
    res.status(404).send({ error: "Feed item not found" });
  }
};

exports.deleteFeedItem = function(req, res) {
  const id = req.params.id;
  console.log(`DELETE /api/feed/${id} called`);
  const deleted = feedModel.deleteFeedItem(id);
  res.setHeader('Content-Type', 'application/json');
  if (deleted) {
    res.send({ message: `Feed item ${id} deleted.` });
  } else {
    res.status(404).send({ error: "Feed item not found" });
  }
};

exports.updateFeedItem = function(req, res) {
  const id = req.params.id;
  console.log(`PATCH /api/feed/${id} called with data:`, req.body);
  const updated = feedModel.updateFeedItem(id, req.body);
  res.setHeader('Content-Type', 'application/json');
  if (updated) {
    res.send(updated);
  } else {
    res.status(404).send({ error: "Feed item not found" });
  }
};

exports.saveUser = function(req, res) {
  console.log("POST /api/people called with data:", req.body);
  const user = req.body;

  const newPerson = person.createPerson(user.firstName, user.lastName, user.favoriteColor);
  people.push(newPerson);

  res.setHeader('Content-Type', 'application/json');
  res.send({ message: "User saved", person: newPerson });
};


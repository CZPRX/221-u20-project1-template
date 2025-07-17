const feedModel = require('../model/feedItem');
const person = require('../model/person');

let person1 = person.createPerson('Angel', 'Duarte', 'Purple');
let person2 = person.createPerson('Cristopher', 'Rivera', 'Red');
let person3 = person.createPerson('Luis', 'Trejo', 'Green');

let people = [person1, person2, person3];
console.log("People array loaded:", people);


exports.getPeople = function(req, res) {
  console.log("GET /api/people called");
  res.json(people);
};

exports.getPersonById = function(req, res) {
  const id = parseInt(req.params.id);
  console.log(`GET /api/people/${id} called`);
  const person = people[id - 1];

  
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ error: 'Person not found' });
  }
};

exports.savePerson = function(req, res) {
  const { firstName, lastName, favoriteColor } = req.body;
  const newPerson = person.createPerson(firstName, lastName, favoriteColor);
  people.push(newPerson);
  console.log("POST /api/people called with data:", req.body);
  res.status(201).json(newPerson);
};


exports.getFeedItems = function(req, res) {
  console.log("GET /api/feed called");
  res.json(feedModel.getAllFeedItems());
};

exports.getFeedItem = function(req, res) {
  const id = req.params.id;
  console.log(`GET /api/feed/${id} called`);
  const item = feedModel.getFeedItemById(id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: "Feed item not found" });
  }
};

exports.saveFeedItem = function(req, res) {
  console.log("POST /api/feed called with data:", req.body);
  const newItem = feedModel.createFeedItem(
    req.body.title,
    req.body.body,
    req.body.linkUrl,
    req.body.imageUrl
  );
  res.status(201).json(newItem);
};

exports.deleteFeedItem = function(req, res) {
  const id = req.params.id;
  console.log(`DELETE /api/feed/${id} called`);
  const deleted = feedModel.deleteFeedItem(id);

  if (deleted) {
    res.json({ message: `Feed item ${id} deleted.` });
  } else {
    res.status(404).json({ error: "Feed item not found" });
  }
};

exports.updateFeedItem = function(req, res) {
  const id = req.params.id;
  console.log(`PATCH /api/feed/${id} called with data:`, req.body);
  const updated = feedModel.updateFeedItem(id, req.body);

  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: "Feed item not found" });
  }
};


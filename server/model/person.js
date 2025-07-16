class Person {
  constructor(firstName, lastName, favoriteColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
  }
}

function createPerson(firstName, lastName, favoriteColor) {
  return new Person(firstName, lastName, favoriteColor);
}

module.exports = {
  createPerson
};

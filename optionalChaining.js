const person1 = {
  name: 'John',
  job: {
    title: 'Front-end engineer',
    manager: {
      name: 'Bob',
    },
  },
};

const person2 = {
  name: 'Bob',
};

function printManager(person) {
  console.log(person.job?.manager?.name);
}

printManager(person1);
printManager(person2);

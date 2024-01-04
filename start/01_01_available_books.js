// Write your code here

const Book = class Book{
  constructor (title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

get availability() {
  return this.getAvailability();
  }


 getAvailability(){
  if (this.numCopies === 0){
    return "out of stock"
  } else if (this.numCopies < 10) {
    return "low stock";
  } else {
    return "in stock";
  }
  };

sell(numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
}

restock(numCopiesStocked = 5) {
  this.numCopies += numCopiesStocked;
}

};



const HarryPotter = new Book("Harry Potter", "Rowling", 1234485, 6);
console.log(HarryPotter.availability);

HarryPotter.restock(24);
console.log(HarryPotter.availability);

HarryPotter.sell(18);
console.log(HarryPotter.availability);
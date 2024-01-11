class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
class EditionBook extends Book {
  constructor (title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    this.edition = edition;
  }

  getEdition(edition) {
    return `The current version of "${this.title}" book is ${this.edition}`
  }
}

const hungerGames = new EditionBook("Hunger Games", "Suzanne Collins", 5451, 12, "2nd");
const harryPotter = new Book("Harry Potter", "Rowling", 1234485, 6);

console.log(harryPotter.availability);
console.log(hungerGames);
console.log(hungerGames.getEdition());
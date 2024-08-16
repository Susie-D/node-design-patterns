var Shopper = require('./Shopper');

var alex = new Shopper('Alex Bank');
alex.addItemsToList('camping knife');
alex.addItemsToList('tent');
alex.addItemsToList('backpack');
alex.addItemsToList('map');
alex.addItemsToList('slingshot');

var eve = new Shopper('Eve Porcello');
eve.addItemsToList('camping knife');
eve.addItemsToList('tent');
alex.addItemsToList('backpack');
alex.addItemsToList('map');
alex.addItemsToList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`)
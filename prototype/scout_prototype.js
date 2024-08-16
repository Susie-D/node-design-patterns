var Shopper = require('./Shopper');

var scout = new Shopper();
scout.addItemsToList('camping knife');
scout.addItemsToList('tent');
scout.addItemsToList('backpack');
scout.addItemsToList('map');

module.exports = scout;
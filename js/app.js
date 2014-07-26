var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Router.map(function() {
  this.route('credits', { path: '/thanks' });
  this.route('about');
  this.resource('products');
});
App.IndexController = Ember.Controller.extend({
  productsCount: 6,
  logo: 'http://courseware.codeschool.com/ember/images/logo-small.png',
  time: function() {
    return (new Date()).toDateString();
  }.property()
});
App.AboutController = Ember.Controller.extend({
  contactName: 'Anostagia',
  avatar: 'http://courseware.codeschool.com/ember/images/avatar.png',
  open: function() {
    return ((new Date()).getDay() === 0) ? "Closed" : "Open";
  }.property()
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});
App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    isOnSale: true,
    image: 'http://courseware.codeschool.com/ember/images/products/flint.png'
  },
  {
    title: 'Kindling',
    price: 249,
    description: 'Easily combustible small sticks or twigs used for starting a fire.',
    isOnSale: false,
    image: 'http://courseware.codeschool.com/ember/images/products/kindling.png'
  }
];

app.service('mainSrv', function($http) {
  console.log('serving, mainly.');

  this.getQuotes = function() {
    return $http.get('/quotes')
  }

  this.addQuote = function(quote) {
    console.log('service quote:::: ', quote);
    return $http.post('/quotes', quote)
  }

})

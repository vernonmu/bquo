app.controller('mainCtrl', function($scope, mainSrv){
  console.log('controlling, mainly.');

  $scope.getQuotes = function() {
    console.log('go!');
    mainSrv.getQuotes()
    .then(function(res){
      console.log(res.data);
      if (res.data) {
        $scope.resultsFlag = true;

        $scope.quoteResults = res.data
      }
    })
  }

  $scope.addQuote = function(quote) {
    mainSrv.addQuote(quote)
    .then(function(response){
      if (response.status == 200) {
          console.log('added successfully!', response);

          Materialize.toast('Quote submitted!', 4000, 'toast__style')

          $scope.quote.text = ''
          $scope.quote.author = ''
          $scope.quote.date = ''
          $scope.quote.category = ''
      }

    })

  }
})

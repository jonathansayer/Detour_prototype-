parkSearch.controller('ParkSearchController', ['Search', function(Search) {

  var self = this;

  self.doSearch = function() {
    Search.query()
      .then(function(response) {
        self.searchResult = response.data;
      })
  };
}]);

parkSearch.controller('ParkSearchController', ['Search', function(Search) {

  var self = this;
  var map;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  };

  self.initMap = function() {
    console.log("hello")
    self.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.5191120, lng: -0.0745060},
      zoom: 15
    });
  }


}]);

parkSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://maps.googleapis.com/maps/api/place/radarsearch/json?';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'location': '51.5191120,-0.0745060',
          'radius': '1000',
          'types': searchTerm,
          'key': ''
        }
      });
    }
  }
}]);

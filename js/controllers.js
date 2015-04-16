var app = angular.module('gallery', ['ngResource']);

app.factory('FlickrAPI', function($resource) {
    return $resource('http://api.flickr.com/services/feeds/photos_public.gne',
        { format: 'json', jsoncallback: 'JSON_CALLBACK'},
        { 'load': { 'method': 'JSONP' } });
});

app.controller('FlickrCtrl', function($scope, FlickrAPI) {
    $scope.list = ['dog', 'cat']; // tags
    $scope.photos = [];

    angular.forEach($scope.list, function(tag,i){
        $scope.photos[i] = FlickrAPI.load({tags: tag});
     });
});

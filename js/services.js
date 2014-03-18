var ArticleService = angular.module('ArticleService', []);
 
ArticleService.factory('ArtFactory', ['$http',
  function($http){
    //return $resource('http://www.artickly.com/jsonencode.php?articleid=:articleid', {}, {
    //  query: {method:'JSONP', params:{articleid:'1'} }
    //});
    
    return{
        getArticle : function(articleurl) {
            return $http({
                url: articleurl,
                method: 'JSONP',
                isArray: true,
                cache: true
            })
        }
    }  
      
    /*   
    var method = "JSONP";  
    var uri = "http://www.artickly.com/jsonencode.php?articleid=:articleid&callback=JSON_CALLBACK";

    var code = null;
    var response = null;

    $http({
        method: method,
        url: uri,
        cache: true
    }).
    success(function(data, status) {

        response= data;

    }).
    error(function(data, status) {
        response = data || "Request failed";
        
    });  
      return response;
      */
      
      
  }]);
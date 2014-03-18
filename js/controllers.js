// This is a JavaScript file
var articklyControllers = angular.module('articklyControllers', ['ngSanitize']);


articklyControllers.controller('homer', ['$scope', '$http', '$location','ArtFactory',
    function($scope, $http  , $location ,$routeScope) {
        $scope.method = 'JSONP';
        $scope.togglerVal = 0;
        $scope.changeView = function(num) {
            //alert(num);
            var ur = 'article/' + num;
            console.log(ur);
            $location.path('/article/' + num);
            console.log(ur);
        };
        $scope.showCategories = function() {
            $location.path('/categories/');
        };
        $scope.showAboutUs = function() {
            $location.path('/aboutus/');
        };
        $scope.goHome = function() {
            $location.path('/articles/');
        };
        $scope.doTheBack = function() {
            window.history.back();
        };
        $scope.toggler = function() {
            if($scope.togglerVal == 1)
            {
                document.getElementById('sp-nav').style.display="none";
                $scope.togglerVal = 0;
            }
            else
            {
                document.getElementById('sp-nav').style.display="block";
                $scope.togglerVal = 1;
            }
            
        };
        $scope.searching = function() {
            var text = $scope.query;
            //alert(text);
            $location.path('/search/' + text);
           
        };
        $scope.url="http://www.artickly.com/jsonencode_index.php?callback=JSON_CALLBACK";

        $scope.code = null;
        $scope.response = null;
//        ArtFactory.getArticle("http://www.artickly.com/jsonencode_index.php?callback=JSON_CALLBACK").success(function(data) {
//            $scope.data = data;
//        });
        
        $http({
            method: $scope.method,
            url: $scope.url,
            cache: true
        }).
        success(function(data, status) {

            $scope.data = data;

        }).
        error(function(data, status) {
            $scope.data =  [{'title' :'Internet not Working', 'articlesnippet': "Check Network" , "image":"img/DataNotFound.jpg", "articleid":"" } ];
            $scope.status = status;
        });
        
    }
]);



articklyControllers.controller('bart', ['$scope','$location','ArtFactory', '$routeParams', 
function(  $scope , $location, ArtFactory , $routeParams, $http) {
    console.log($location);
    $scope.togglerVal = 0;
//    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
//        $scope.transitionState = "active"
//    });
    $scope.showCategories = function() {
            $location.path('/categories/');
    };
    $scope.showAboutUs = function() {
            $location.path('/aboutus/');
        };
    $scope.goHome = function() {
            $location.path('/articles/');
    };
    $scope.doTheBack = function() {
            window.history.back();
    };
    $scope.searching = function() {
            var text = document.getElementsByTagName("input")[0].value;
           // alert(text);
            $location.path('/search/' + text);
           
        };
        
    $scope.toggler = function() {
            if($scope.togglerVal == 0)
            {
                document.getElementById('sp-nav').style.display="block";
                $scope.togglerVal = 1;
            }
            else
            {
                document.getElementById('sp-nav').style.display="none";
                $scope.togglerVal = 0;
            }
            
    };
    
    
    console.log(ArtFactory);
    ArtFactory.getArticle("http://www.artickly.com/jsonencode.php?articleid="+$routeParams.message+'&callback=JSON_CALLBACK').success(function(data){
        console.log(data);
        $scope.data=data;
   });
    console.log($scope.data);
    
    
}]);

articklyControllers.controller('catList', ['$scope', '$location',
    function($scope,$location,$routeScope) {
        $scope.method = 'JSONP';
        $scope.togglerVal = 0;
        $scope.changeView = function(num) {
            //alert(num);
            var ur = 'category/' + num;
            console.log(ur);
            $location.path('/category/' + num);
            console.log(ur);
        };
        $scope.showCategories = function() {
            $location.path('/categories/');
        };
        $scope.showAboutUs = function() {
            $location.path('/aboutus/');
        };
        $scope.goHome = function() {
            $location.path('/articles/');
        };
        $scope.doTheBack = function() {
            window.history.back();
        };
        $scope.searching = function() {
            var text = document.getElementsByTagName("input")[0].value;
           // alert(text);
            $location.path('/search/' + text);
           
        };
        $scope.toggler = function() {
            if($scope.togglerVal == 0)
            {
                document.getElementById('sp-nav').style.display="block";
                $scope.togglerVal = 1;
            }
            else
            {
                document.getElementById('sp-nav').style.display="none";
                $scope.togglerVal = 0;
            }
            
        };
        $scope.data = [
             {'name': 'Life',
              'id': '1',
              'img': 'img/categories/life.jpg'},
             {'name': 'Culture',
              'id': '2',
              'img': 'img/categories/culture.jpg'},
             {'name': 'Politics',
              'id': '3',
              'img': 'img/categories/politics.jpg'},
             {'name': 'Sports',
              'id': '4',
              'img': 'img/categories/sports.jpg'},
             {'name': 'Business',
              'id': '5',
              'img': 'img/categories/business.jpg'},
             {'name': 'TV and Movies',
              'id': '6',
              'img': 'img/categories/movies.jpg'},
             {'name': 'Technology',
              'id': '7',
              'img': 'img/categories/technology.jpg'},
             {'name': 'Literature',
              'id': '8',
              'img': 'img/categories/literature.jpg'},
             {'name': 'Humour',
              'id': '9',
              'img': 'img/categories/humour.jpg'}
        ];
    }
]);

//articklyControllers.controller('catArticles', ['$scope', '$http', '$location','$routeParams',
    function catArticles($scope , $http , $routeParams, $rootScope, $location) {
        $scope.method = 'JSONP';
        $scope.togglerVal = 0;
        $scope.changeView = function(num) {
            //alert(num);
            var ur = 'article/' + num;
            console.log(ur);
            $location.path('/article/' + num);
            console.log(ur);
        };
        
        $scope.toggler = function() {
            if($scope.togglerVal == 0)
            {
                document.getElementById('sp-nav').style.display="block";
                $scope.togglerVal = 1;
            }
            else
            {
                document.getElementById('sp-nav').style.display="none";
                $scope.togglerVal = 0;
            }
            
        };
        $scope.showCategories = function() {
            $location.path('/categories/');
        };
        $scope.showAboutUs = function() {
            $location.path('/aboutus/');
        };
        $scope.goHome = function() {
            $location.path('/articles/');
        };
        $scope.doTheBack = function() {
            window.history.back();
        };
        $scope.searching = function() {
            var text = document.getElementsByTagName("input")[0].value;
           // alert(text);
            $location.path('/search/' + text);
           
        };
        $scope.url = "http://www.artickly.com/jsonencode_index.php?id=" + $routeParams.message + "&callback=JSON_CALLBACK";
        $scope.code = null;
        $scope.response = null;
        console.log($scope.url +"URLLL");
        //catArticles.$inject=["$http"];
         $http({
             method: $scope.method,
             url: $scope.url,
             cache:true
            
         }).
         success(function(data, status) {
            console.log(data);
             $scope.data = data;
 
         }).
         error(function(data, status) {
             $scope.data =  [{'title' :'Internet not Working', 'articlesnippet': "Check Network" , "image":"", "articleid":"" } ];
             $scope.status = status;
         });
    }
//]);

articklyControllers.controller('aboutUs', ['$scope', '$http', '$location',
    function($scope, $http, $location,$rootScope) {
        $scope.counter=0;
        $scope.togglerVal = 0;
        $scope.class= "unClicked";
        
        $scope.clicker= function(){
            $scope.class="Clicked";
            $scope.counter=$scope.counter+1;
            var left= 7 - $scope.counter;
            $scope.BlaBla="Click "+ left + " more times and see the magic";
            
            if($scope.counter===7)
            {
                $location.path('/people/');
            }
            
        }
        
        
        $scope.showCategories = function() {
            $location.path('/categories/');
        };
        $scope.showAboutUs = function() {
            $location.path('/aboutus/');
        };
        $scope.goHome = function() {
            $location.path('/articles/');
        };
        $scope.doTheBack = function() {
            window.history.back();
        };
        $scope.searching = function() {
            var text = document.getElementsByTagName("input")[0].value;
           // alert(text);
            $location.path('/search/' + text); 
        };
        $scope.toggler = function() {
            if($scope.togglerVal == 0)
            {
                document.getElementById('sp-nav').style.display="block";
                $scope.togglerVal = 1;
            }
            else
            {
                document.getElementById('sp-nav').style.display="none";
                $scope.togglerVal = 0;
            }
            
        };
    }
]);



articklyControllers.controller('peopler', ['$scope', '$http', '$location',
    function($scope, $http, $location,$rootScope) {
        $scope.counter=1;
        $scope.togglerVal = 0;
        
        $scope.clicker= function(){
            $scope.counter=$scope.counter+1;
            if($scope.counter===5)
            {
                $location.path('/people/');
            }
            
        }
        $scope.showCategories = function() {
            $location.path('/categories/');
        };
        $scope.showAboutUs = function() {
            $location.path('/aboutus/');
        };
        $scope.goHome = function() {
            $location.path('/articles/');
        };
        $scope.doTheBack = function() {
            window.history.back();
        };
        $scope.searching = function() {
            var text = document.getElementsByTagName("input")[0].value;
           // alert(text);
            $location.path('/search/' + text); 
        };
        $scope.toggler = function() {
            if($scope.togglerVal == 0)
            {
                document.getElementById('sp-nav').style.display="block";
                $scope.togglerVal = 1;
            }
            else
            {
                document.getElementById('sp-nav').style.display="none";
                $scope.togglerVal = 0;
            }
            
        };
    }
]);


articklyControllers.controller('search', ['$scope', '$http', '$location','$routeParams',
    function($scope, $http, $location, $routeParams) {
        $scope.method = 'JSONP';
        $scope.togglerVal = 0;
        $scope.changeView = function(num) {
            //alert(num);
            var ur = '/article/' +num ;
            console.log(ur);
            $location.path('/article/' + num);
            console.log(ur);
        };
        $scope.showCategories = function() {
            $location.path('/categories/');
        };
        $scope.showAboutUs = function() {
            $location.path('/aboutus/');
        };
        $scope.goHome = function() {
            $location.path('/articles/');
        };
        $scope.doTheBack = function() {
            window.history.back();
        };
        $scope.searching = function() {
            var text = $scope.query;
           // alert(text);
            $location.path('/search/' + text);
           
        };
        $scope.toggler = function() {
            if($scope.togglerVal == 0)
            {
                document.getElementById('sp-nav').style.display="block";
                $scope.togglerVal = 1;
            }
            else
            {
                document.getElementById('sp-nav').style.display="none";
                $scope.togglerVal = 0;
            }
            //$spMenu.toggle();
            
        };
        //alert("here");
        //alert($routeParams.message);
        $scope.url = "http://www.artickly.com/jsonencode_all.php?search=" + $routeParams.message + "&callback=JSON_CALLBACK ";
        //$scope.url = " http://www.artickly.com/jsonencode_all.php?callback=JSON_CALLBACK ";
        //$scope.url = "http://www.artickly.com/jsonencode_index.php?id=" + $routeParams.message + "&callback=JSON_CALLBACK";
        $scope.code = null;
        $scope.response = null;

        $http({
            method: $scope.method,
            url: $scope.url
        }).
        success(function(data, status) {

//alert($routeParams.message);
            var i1=document.getElementsByTagName("input")[0];
            i1.value=$routeParams.message;
            //alert(i1.value);
            $scope.data = data;
            

        }).
        error(function(data, status) {
            $scope.data =  [{'title' :'Internet not Working', 'articlesnippet': "Check Network" , "image":"", "articleid":"" } ];
            $scope.status = status;
        });
    }
]);

function AlbumCtrl($scope,$timeout,$location) {
    $scope.counter = 0;
    $scope.onTimeout = function(){
        $scope.counter++;
        mytimeout = $timeout($scope.onTimeout,1000);
        if(($scope.counter)==3)
        {
            $location.path('/articles/');
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    $scope.stop = function(){
        $timeout.cancel(mytimeout);
    }
}



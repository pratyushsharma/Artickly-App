var Articled = angular.module('home', ['shoppinpal.mobile-menu', 'ngRoute', 'ngTouch','chieffancypants.loadingBar','ngAnimate' , 'articklyControllers', 'ArticleService']);

Articled.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  });
Articled.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/articles', {
            templateUrl: 'Articles-list.html',
            controller: 'homer'
        }).
        when('/article/:message', {
            templateUrl: 'Article.html',
            controller: 'bart'
        }).
        when('/category/:message', {
            templateUrl: 'CatArtList.html',
            controller: 'catArticles', 
        }).
        when('/categories/', {
            templateUrl: 'Category-list.html',
            controller: 'catList'
        }).
        when('/aboutus/', {
            templateUrl: 'AboutUs.html',
            controller: 'aboutUs'
        }).
        when('/search/:message', {
            templateUrl: 'Search.html',
            controller: 'search'
        }).
        when('/home',{
            templateUrl: 'splashScreen.html',
            controller: 'AlbumCtrl'
        }).
        when('/people',{
            templateUrl: 'people.html',
            controller: 'peopler'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);
'use strict';

/**
 * @ngdoc overview
 * @name karlApp
 * @description
 * # karlApp
 *
 * Main module of the application.
 */
angular
  .module('karlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/robotandpuppy', {
        templateUrl: 'views/robotandpuppy.html',
        controller: 'RPCtrl',
        controllerAs: 'robotandpuppy'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'BioCtrl',
        controllerAs: 'bio'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


// run
angular.module('karlApp')
  .run(['$rootScope', '$timeout', '$location', '$window', '$sce', '$anchorScroll', function ($rootScope, $timeout, $location, $window, $sce, $anchorScroll) {
    //$rootScope;
    //$anchorScroll;
    $rootScope.patterns = [
      { url : 'images/patterns/ignasi_pattern_s.png' }
    ];

    $rootScope.resizeIcons = function () {
      var cw = $('.karlthing a').width();
      $('.karlthing a').css({'height':cw+'px'});
      console.log('width', cw);
    };

    $rootScope.jQueryLoaded = function () {
      $timeout(function(){
        if(!window.jQuery) {
          $rootScope.jQueryLoaded();
        } else {
          console.log('jQueryLoaded()');


          //$anchorScroll();



          /*
          // jQuery Mobile Handling...
          $.mobile.autoInitializePage = false;
          $.mobile.ajaxEnabled = false;

          $(document).on("mobileinit", function() {
            $.mobile.autoInitializePage = false;
            $.mobile.ajaxEnabled = false;
          });

          // jQuery Mobile Handling...
          $(".ui-loader").remove();
          */

          //var t = setTimeout(function () {
            //$rootScope.reveal();
            //$anchorScroll();
            //console.log('SCROLL');

          //}, 2000);
          $rootScope.resizeIcons();
          $( window ).resize(function() {
            $rootScope.resizeIcons();
            //$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
          });

          // glitch
          //$(".glitch-image img").clone().appendTo(".glitch-image").end().clone().appendTo(".glitch-image");


          //$rootScope.setupStickyMenu();
          //$rootScope.setupCustomBarCarousel();
          //$rootScope.setupCustomPerformerCarousel();
          //$rootScope.sendGaEvent();
        }
      },100);
    };

    //var cw = $('.child').width();
    //$('.child').css({'height':cw+'px'});
    $rootScope.init = function () {
      $rootScope.jQueryLoaded();
    };

    $rootScope.init();

  }]);

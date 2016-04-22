'use strict';

/**
 * @ngdoc function
 * @name karlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the karlApp
 */
angular.module('karlApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.karlsThings = [
      {
        name : 'Labs',
        url : '/labs',
        icon : 'glyphicon-console',
        subThings : [
          // Botmap.io
          // FB / Meetup Sync
          // jQuery Tour
          // Mashlist
          // Wesley
          // Tatanka
          //
        ]
      }, {
        name : 'Apps',
        url : '/apps',
        icon : 'glyphicon-th',
        subThings : [
          // GoReturnMe
          //
        ]
      }, {
        name : 'Work',
        url : '/work',
        icon : 'glyphicon-wrench',
        subThings : [
          // Bonnaroo
          // Outside Lands
          // Cocktail Magic
          // Asus
          // GoReturnMe
          // SheBeads
          // The Ivorys
          // Death By Icon
          // Deanna Devore
          // HP Thing
          // Philips
          //
        ]
      }, {
        name : 'Resume',
        url : '/resume.pdf',
        icon : 'glyphicon-paperclip'
      }, {
        name : 'Longboarding',
        icon : 'glyphicon-cd',
        subThings : [
          // Map
          // Meetup
        ]

      }, {
        name : 'Robot & Puppy',
        url : '/robotandpuppy',
        icon : 'glyphicon-book'
      }, {
        name : 'Blog',
        url : '/blog'
      }, {
        name : 'Foosball',
        url : ''
      }, {
        name : 'Video',
        url : '/video'
      }, {
        name : 'Music',
        url : '/music',
        icon : 'equalizer'
      }, {
        name :  'Facebook',
        url : ''
      }, {
        name : 'Twitter',
        url : ''
      }, {
        name : 'Instagram',
        url : ''
      }, {
        name : 'Snapchat',
        url : ''
      }
    ];

    $scope.latestBlog = {
      title : 'Latst Blog Title',
      body : 'as fas fsaf asd asdfasdf asdf fas fsaf asd asdfasdf asdf fas fsaf asd asdfasdf asdf fas fsaf asd asdfasdf asdf.'
    };

    $scope.wallpaper = { url : 'images\/wallpapers\/shades.png' };

  }]);

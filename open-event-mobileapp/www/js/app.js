
angular.module('app', ['ionic', 'app.controllers', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleHex("#ffffff");
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.conferences', {
      url: '/sessions',
      views: {
        'menuContent': {
          templateUrl: 'templates/sessions.html',
          controller: 'sessionsCtrl'
        }
      }
    })

  .state('app.conference', {
    url: '/:conferenceId',
    views: {
      'menuContent': {
        templateUrl: 'templates/session.html',
        controller: 'sessionCtrl'
      }
    }
  })
  
  .state('app.favorites', {
      url: '/favorites',
      views: {
        'menuContent': {
          templateUrl: 'templates/favorites.html',
          controller: 'favoritesCtrl'
        }
      }
    })

  .state('app.activityStream', {
      url: '/activityStream',
      views: {
        'menuContent': {
          templateUrl: 'templates/activityStream.html',
          controller: 'activityStreamCtrl'
        }
      }
    })
    
  .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
        }
      }
    })

  .state('app.signUp', {
      url: '/signup',
      views: {
        'menuContent': {
          templateUrl: 'templates/signUp.html',
          controller: 'signUpCtrl'
        }
      }
    })
    

    
  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    });
    
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/sessions');
});
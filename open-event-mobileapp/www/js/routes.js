angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.session', {
    url: '/sessions',
    views: {
      'side-menu21': {
        templateUrl: 'templates/session.html',
        controller: 'sessionCtrl'
      }
    }
  })

  .state('menu.favorites', {
    url: '/favorites',
    views: {
      'side-menu21': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('menu.signUp', {
    url: '/sign-up',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signUp.html',
        controller: 'signUpCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.map', {
    url: '/map',
    views: {
      'side-menu21': {
        templateUrl: 'templates/map.html',
        controller: 'mapCtrl'
      }
    }
  })

  .state('menu.stream', {
    url: '/sessionstream',
    views: {
      'side-menu21': {
        templateUrl: 'templates/stream.html',
        controller: 'streamCtrl'
      }
    }
  })

  .state('menu.activityStream', {
    url: '/activitystream',
    views: {
      'side-menu21': {
        templateUrl: 'templates/activityStream.html',
        controller: 'activityStreamCtrl'
      }
    }
  })

  .state('menu.rateSession', {
    url: '/rate',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rateSession.html',
        controller: 'rateSessionCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/sessions')

  

});
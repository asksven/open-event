angular.module('app.controllers', [])
  
.controller('AppCtrl', ['$scope',
    function($scope, modalService, userService) {
        $scope.user = new Apiomat.User('test' + new Date().getTime(), '1,618');
        /* configure datastore with member credentials */
        Apiomat.Datastore.configureWithCredentials($scope.user);
        Apiomat.Datastore.setOfflineStrategy(
            Apiomat.AOMOfflineStrategy.USE_OFFLINE_CACHE, {
                onOk : function()
                {
                //Cache is initalized
                },
                onError : function(err)
                {
                //Error occurred
                }
        });
        /* and save it */
        $scope.user.save();
}])
  
.controller('sessionCtrl', ['$scope', '$stateParams', "conferenceService",
    function($scope, $stateParams, conferenceService) {
    $scope.conferenceId = $stateParams.conferenceId;
    
    $scope.$on("$ionicView.afterEnter", function() {
    getConferenceData($scope.conferenceId);
    console.log("$scope.conference = " + $scope.conference);
    })   
    
    function getConferenceData(conferenceId) {
        
        var promise = conferenceService.getConference(conferenceId);
            
        promise.then(function(data) {
            $scope.conference = data;
            console.log(data);
        }); 
    } 
}])
   
.controller('favoritesCtrl', function($scope) {

})
   
.controller('signUpCtrl', function($scope) {

})
      
.controller('aboutCtrl', function($scope) {

})
   
.controller('mapCtrl', function($scope) {

})
   
.controller('streamCtrl', function($scope) {

})
   
.controller('activityStreamCtrl', function($scope) {

})
   
.controller('rateSessionCtrl', function($scope) {

})

.controller('sessionsCtrl', ['$scope', 'conferenceService',
    function($scope, conferenceService) {
        
    $scope.$on("$ionicView.afterEnter", function() {
        getConferencesData();
        console.log("$scope.conferences = " + $scope.conferences);
    })   
    
    function getConferencesData() {
        
        var promise = conferenceService.getConferences();
            
        promise.then(function(data) {
            $scope.conferences = data;
            console.log(data);
        }); 
    } 
}])

 
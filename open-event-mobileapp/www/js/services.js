angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('conferenceService', function($q, $http) {
    
    var getConferences = function() {
        
        var deferred = $q.defer();
        
        Apiomat.conference.getconferences("", {
            onOk : function(loadedObjs) {
                //Now you can do sth with loaded objects (loadedObjs)
                console.log("Count of loaded objects: " + loadedObjs.length);
                //var jsonData = JSON.stringify(loadedObjs);
                //return jsonData;
                deferred.resolve(loadedObjs);
                
            },
            onError : function(error) {
                //handle error
                console.log("An error happened when accessing the conference API: " + error);
                deferred.reject();
            }
        });
        
        return deferred.promise;
    }        
    
   var getConference = function(sessionId) {
        
        var deferred = $q.defer();
        
        Apiomat.conference.getconferences("session_id==\"" + sessionId + "\"", {
            onOk : function(loadedObjs) {
                //Now you can do sth with loaded objects (loadedObjs)
                console.log("Count of loaded objects: " + loadedObjs.length);
                //var jsonData = JSON.stringify(loadedObjs);
                //return jsonData;
                deferred.resolve(loadedObjs);
                
            },
            onError : function(error) {
                //handle error
                console.log("An error happened when accessing the conference API: " + error);
                deferred.reject();
            }
        });
        
        return deferred.promise;
    }    

    return {
        getConferences: getConferences,
        getConference: getConference
    }
    
})

.service('BlankService', [function(){

}]);


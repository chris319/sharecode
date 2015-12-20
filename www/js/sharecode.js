function getSubscriptionsAngular($http, userId) {

  var result;
    $http.get('http://schlagmich.net:8080/api/v1/subscriptions/'+userId).
        success(function(data) {
            result = data._embedded.groupResourceList;
        });

        return result;
}

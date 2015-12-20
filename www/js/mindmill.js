function getSubscriptions (userId) {
     var result;
     jQuery.ajax({
         type: "GET",
         url: "http://schlagmich.net:8080/api/v1/subscriptions/"+userId,
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         async: false,
         success: function (json) {
              // alert("Response:\n '" + json[0].title + "'");
              //console.log("Object: "+$('#test').html);
               //$('#test').text(json[0].title);
               //fillTemplate(json);
               //alert(json._embedded.groupResourceList);
               console.log("Result: "+json._embedded.groupResourceList);
               result = json._embedded.groupResourceList;
         },

         error: function (status) {
             // error handler
             console.log("Error"+ status);
         }
});
 return result;
};

function getSubscriptionsAngular($scope, $http, userId) {
    $http.get('http://schlagmich.net:8080/api/v1/subscriptions/'+userId).
        success(function(data) {
            $scope.groups = data;
        });
}


function fillTemplate(data) {
  // Grab the template script
  var theTemplateScript = $("#mm_group_list_template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    group: data
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('##mm_group_list').html(theCompiledHtml);
}



$(function () {
  $('#getSubscriptions').click(function (){
    getSubscriptions('0d492660-a10e-11e5-8eda-73e5ccce3d45');
  })
});

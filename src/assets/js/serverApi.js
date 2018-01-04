
function login(username, password){
  let req = {
    "C": "Pap_Api_AuthService",
    "M": "authenticate",
    "fields": [
      [
        "name",
        "value",
        "values",
        "error"
      ],
      [
        "username",
        username,
        null,
        ""
      ],
      [
        "password",
        password,
        null,
        ""
      ],
      [
        "roleType",
        "A",
        null,
        ""
      ],
      [
        "isFromApi",
        "Y",
        null,
        ""
      ],
      [
        "apiVersion",
        "1c6dc15c0e93d3ff9a634b769f346763",
        null,
        ""
      ]
    ]
  }
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.affforce.com/scripts/server.php",
    "method": "POST",
    "data":  JSON.stringify(req)

  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}



function sendRequest(requestJson){
  var settings = {
    "async": true,
    "crossDomain": true,

    beforeSend: function(request) {
        request.setRequestHeader("Access-Control-Allow-Origin", '*');
      },
    "url": "https://www.affforce.com/scripts/server.php",
    "method": "POST",
    "data":{
      "D": JSON.stringify(requestJson)
    },
    success : function (data, status, xhr) {// success callback function
                  console.log('s');
                  // $.notify(data.e);
                  $.notify(data.e,"Successfully Added","success");
           },
   error: function (jqXhr, textStatus, errorMessage) { // error callback
       $.notify(errorMessage,"error");
   }




  }

  $.ajax(settings).done(function (response) {

    // alert(response);

    console.log(response);
  });
}


$( document ).ready(function() {

  $("#contactusBtn").click(function(e){
    e.preventDefault();
    var requestJson =  {"C":"Gpf_Rpc_Server",
                        "M":"run",
                        "requests":[
                                    {"C":"Pap_Signup_ContactUsForm",
                                    "M":"save",
                                    "fields":
                                            [
                                              ["name","value"],
                                              ["Id","temporary"],
                                              ["name", $('#Name').val()],
                                              ["email",$('#Email').val()],
                                              ["text",$('#text').val()]
                                            ]
                                    }
                                  ],
                      "S":"8529ee67938e552d122504275ab68c83"}

      sendRequest(requestJson);
  });

  // $.get('https://www.affforce.com/affiliates/').done(function(response){
  //   console.log(response)
  // })
});

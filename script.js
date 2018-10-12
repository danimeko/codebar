// github user finder example
$(document).ready(function() {
    $(document).on('keypress', '#username', function(event) {
      if (event.which === 13) { // check the key was <enter>
        // do something
        var input = $(this);
      var username = input.val();

      console.log('username was: ' + username);
      getGithubInfo(username);
      }
    });
  });

  function getGithubInfo(username) {
    var url = 'https://api.github.com/users/' + username;
  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
  
    var data = xmlhttp.responseText;
  
    console.log(data);
    showUser(xmlhttp);
  }

  function showUser(xmlhttp) {
    if(xmlhttp.status === 200) {
      // show the user details #profile h2 - <user login> + ' is GitHub user #' + <user id>
      obj = $.parseJSON(xmlhttp.responseText);
      console.log(obj);
      $('<img src= '+obj.avatar_url+'>').appendTo(".avatar");
      $(".information h2").html(obj.name);
      $(".information h3").html(obj.location);
      var json = xmlhttp.responseText;
      var user = JSON.parse(json);
    } else {
      // show an error
    }
  }
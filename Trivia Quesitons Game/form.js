
  $("#submit").click(function() {
    console.log("button clicked");
    var score = 0;
    $("label").css("color","black");



    if($("input[name=sea]:checked", '#q1').val() == "Philippine Sea") {
      score++;
        $("input[name=sea]:checked+label").css("color","green");
    }
    else {
       $("input[name=sea]:checked+label").css("color","red");
    }



    if($("input[name=planet]:checked", '#q2').val() == "Jupiter") {
      score++;
      $("input[name=planet]:checked+label").css("color","green");

    }
    else {
        $("input[name=planet]:checked+label").css("color","red");
    }



    if($("input[name=titanic]:checked", '#q3').val() == "1912") {
      score++;
      $("input[name=titanic]:checked+label").css("color","green");
    }
    else {
       $("input[name=titanic]:checked+label").css("color","red");
    }



    if($("input[name=water]:checked", '#q4').val() == "Sailfish") {
      score++;
      $("input[name=water]:checked+label").css("color","green");
    }
    else {
        $("input[name=water]:checked+label").css("color","red");
    }



    if($("input[name=live]:checked", '#q5').val() == "Trees") {
      score++;
      $("input[name=live]:checked+label").css("color","green");
    }
    else {
        $("input[name=live]:checked+label").css("color","red");
    }

    console.log(score);

    $("#result").html("Your have Scored " + score / 5 * 100 + "%");
  });

  $("#ResetButton").click(function() {
      location.reload();
  });

  $("#hintb1").click(function() {
    $(this).html("Is North and East of the Philipines.");
  });
  $("#hintb2").click(function() {
    $(this).html("It is the biggest plannet.");
  });
  $("#hintb3").click(function() {
    $(this).html("The Titanic was built in 1909.");
  });
  $("#hintb4").click(function() {
    $(this).html("The fastest water animal reaching speed up to 68 miles per hour.");
  });
  $("#hintb5").click(function() {
    $(this).html("This one is tricky.");
  });

$(document).ready(function() {
  $("form#lang").submit(function() {
    event.preventDefault();
    const q1Score = parseInt($("input:radio[name=language1]:checked").val());
    const q2Score = parseInt($("input:radio[name=language2]:checked").val());
    const q3Score = parseInt($("input:radio[name=language3]:checked").val());
    const q4Score = parseInt($("input:radio[name=language4]:checked").val());
    const q5Score = parseInt($("input:radio[name=language5]:checked").val());
    
    const score =q1Score+q2Score+q3Score+q4Score+q5Score;
    console.log(score);

    if(score < 8) {
      $("#swift").show();
      $("#python").hide();
      $("#javaScript").hide();
      // $("#lang").hide();
    } else if(score>12) {
      $("#python").show();
      $("#javaScript").hide();
      $("#swift").hide();
      // $("#intro").hide();
    } else {
      $("#javaScript").show();
      $("#python").hide();
      $("#swift").hide();
      // $("#intro").hide();
    }
  });
});

$("form#refresh").submit(function() {
  location.reload(true);
});
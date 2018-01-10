$(document).ready(function() {
  $("form").submit(function(event) {
    var blanks = ["userName", "userProblem", "userDate", "userStartTime", "userEndTime"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    })
  })

})

/**
 * errorMessage() returns a new element
 * runs if user forgot to input something on a required field
 * based on the passed in message name
 *
 * @param {String} message
 * @return {Element} error
 */
function errorMessage(message) {
  var error = document.createElement("p");
  error.innerHTML = 'Error: ' + message;
  $(error).css("color", "red");
  $(error).css("font-size", "16px");
  $(error).css("font-weight", "bold");
  $(error).css("text-align", "left");
  return error;
}

/**
 * successMessage() returns a new element
 * runs if user submits form correctly
 * based on the passed in message name
 *
 * @param {String} message
 * @return {Element} success
 */
function successMessage(message) {
  var success = document.createElement("p");
  success.innerHTML = message;
  $(success).css("color", "purple");
  $(success).css("font-weight", "bold");
  $(success).css("font-size", "30px");
  $(success).css("text-align", "center");
  return success;
}

$(document).ready(function() {
  $("#contactForm").submit(function() {
    var name = $("#name").val();
    if(name === '') {
      $("#nameField").addClass("has-error")
      var error = errorMessage('Please enter a name.')
      $("#nameField").after(error);
      return false;
    }
    var message = $("#message").val();
    if(message === '') {
      $("#messageField").addClass("has-error")
      var error = errorMessage('Please enter a message.')
      $("#messageField").after(error);
      return false;
    }
    $("p").remove();
    $("#contactForm").remove();
    var success = successMessage('Once PHP and MySQL are used, this will send over the data to a database.');
    $("body").append(success);
    return false;
  });
});

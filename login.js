function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username == "" || password == "") {
      alert("Please enter username and password.");
      return false;
    }
    else if (username != password) {
      alert("Invalid username or password.");
      return false;
    }
    else {
      alert("Login successful.");
      window.location.replace("order.html")
      return true;
    }
  }
  
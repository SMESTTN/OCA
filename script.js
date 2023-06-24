document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    // Validate login credentials and perform necessary actions
    if (email === "beta@alpha.oca.sme" && password === "alp_greek") {
      alert("Success !!!");
      // Redirect to another website
      window.location.href = "L372 Config UI.html";
    } else if (email === "alpha@alpha.oca.sme" && password === "qwertyasdfghzxcvb") {
        alert("Success !!!");
        // Redirect to another website
        window.location.href = "L372 Config UI.html";
    } else {
      alert("Your username or password is wrong !!!");
    }
  });
  
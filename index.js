 function openPopup() {
      document.getElementById("loginPopup").style.display = "flex";
    }

    function login() {
      const email = document.getElementById("gmail").value;
      if (email.includes("@gmail.com")) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "movies.html";
      } else {
        alert("Please enter a valid Gmail address.");
      }
    }
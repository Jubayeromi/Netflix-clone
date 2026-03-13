 // Protect route
  if(localStorage.getItem("loggedIn") !== "true") {
   window.location.href = "index.html";
  }
 function watchMovie(title, file) {
  window.location.href = "player.html?movie=" + encodeURIComponent(title) + "&file=" + encodeURIComponent(file);
 }

 

  function logout() {
   localStorage.removeItem("loggedIn");
   window.location.href = "index.html";
  }
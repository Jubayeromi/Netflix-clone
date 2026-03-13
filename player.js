 // Get movie title and file from URL
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("movie");
  const file = urlParams.get("file"); // file path to video

  document.getElementById("movie-title").innerText = title || "Playing Movie";
  document.getElementById("movie-source").src = file || "sample.mp4";
  document.getElementById("movie-video").load();

  function closePlayer() {
   window.location.href = "movies.html";
  }

  // Protect route
  if(localStorage.getItem("loggedIn") !== "true") {
   window.location.href = "index.html";
  }
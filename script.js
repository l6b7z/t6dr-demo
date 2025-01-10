// nav button visibility toggle
document.getElementById("nav_button").addEventListener("click", function(){
  this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
});
// scroll down to show nav button
window.addEventListener("scroll", function() {
    var y = window.scrollY;
    if (y >= 400) {
      this.document.getElementById("nav_button").style.display="block";
    } else {
      this.document.getElementById("nav_button").style.display="none";
      this.document.getElementById("nav_list").style.display="none";
    }
  });


// random page gen  
function randomPage() { 
  var arrayofsites = [

  // "/sites/art/#.html",

  // "/sites/biology/#.html",

  // "/sites/books/#.html",
  "/sites/books/shane_parrish-the_great_mental_models/shane_parrish-the_great_mental_models.html",

  // "/sites/chemistry/#.html",

  // "/sites/geography/#.html",

  // "/sites/history/#.html",

  // "/sites/languages/#.html",

  // "/sites/mathematics/#.html",

  // "/sites/music/#.html",

  // "/sites/overviews/#.html",

  // "/sites/philosophy/#.html",

  // "/sites/physics/#.html",

  // "/sites/psychology/#.html",

  // "/sites/technology/#.html",

  // "/sites/trivia/#.html",

  // other
  "/sites/_basepage.html",
  "/sites/_sites",
];
var randomSite = arrayofsites[Math.floor(Math.random() * arrayofsites.length)];
  location.href = randomSite;
};

document.getElementById("random").onclick = randomPage;

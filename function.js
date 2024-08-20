function punyaPhoto() {
  document.querySelector(".pynia").style.display = "none";
}


document.getElementById('submit1').style.display = "none";
document.querySelector(".pynia").style.display = "none"; 


document.getElementById('submit').addEventListener('click', function () {
  document.querySelector(".pynia").style.display = "block";
  document.getElementById('submit').style.display = "none";
  document.getElementById('submit1').style.display = "block";
  document.getElementById('tittle').style.display = "none";
  document.getElementById('background-music').play(); 
});


document.getElementById('submit1').addEventListener('click', function () {
  punyaPhoto();
  document.getElementById('submit1').style.display = "none";
  document.getElementById('submit').style.display = "block";
  document.getElementById('tittle').style.display = "block";
  let music = document.getElementById('background-music');
  music.pause(); 
  music.currentTime = 0; 
});
function makeItRain() {
  var drops = '';
  var backdrops = '';
  var increment = 0;

  while (increment < 100) {
    increment += 2;
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    drops += '<div class="drop" style="left: ' + increment + '%;animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splash" style="left: ' + increment + '%;animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>'
    backdrops += '<div class="drop" style="right: ' + increment + '%;animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.6' + randoHundo + 's;"></div></div>'
  }
  document.getElementById("main").innerHTML += drops
  document.getElementById("backdrop").innerHTML += backdrops
    var snd = new Audio("./Stereo-Rain-And-Wind-A-www.fesliyanstudios.com.mp3"); // buffers automatically when created
    snd.play();
}

makeItRain();


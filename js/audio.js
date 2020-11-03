function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.volume = 0.4;
      this.sound.play();
    };
    this.stop = function () {
      this.sound.pause();
    };
  }
  
  let backGroundMusic = new sound("audio/background-music.mp3");
  let touchSound = new sound("audio/touchSound.mp3"); 
let audio = {
    musica: null,
    pistas: [
      "audio/cancion.mp3",
      "audio/cancion2.mp3",
      "audio/cancion3.mp3",
      "audio/cancion4.mp3",
      "audio/cancion5.mp3",
      "audio/cancion6.mp3",
      "audio/cancion7.mp3",
      "audio/cancion8.mp3",
      "audio/cancion9.mp3",
      "audio/cancion10.mp3"
    ],
    indicePistaActual: 0,
    reproducir: function() {
      if (audio.musica !== null) {
        audio.musica.pause();
        audio.musica.src = "";
      }
      if (audio.indicePistaActual === 0) {
        let eventoDisparado = false;
        document.addEventListener("keydown", function() {
          if (!eventoDisparado) {
            audio.musica = new Audio(audio.pistas[audio.indicePistaActual]);
            audio.musica.play();
            audio.musica.loop = false;
            audio.musica.volume = 1;
            audio.musica.addEventListener("ended", function() {
              audio.indicePistaActual = (audio.indicePistaActual + 1) % audio.pistas.length;
              audio.reproducir();
            });
            eventoDisparado = true;
          }
        });
      } else {
        audio.musica = new Audio(audio.pistas[audio.indicePistaActual]);
        audio.musica.play();
        audio.musica.loop = false;
        audio.musica.volume = 1;
        audio.musica.addEventListener("ended", function() {
          audio.indicePistaActual = (audio.indicePistaActual + 1) % audio.pistas.length;
          audio.reproducir();
        });
      }
    }
  };
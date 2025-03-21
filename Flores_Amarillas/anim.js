// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hoy yo me encuentro", time: 13.4 },
  { text: "Sentado en el centro de mi habitación", time: 18.8 },
  { text: "De mi habitación", time: 22 },
  { text: "Pensando en qué hacer", time: 25.8 },
  { text: "Pensando en qué hacer", time: 31 },

  { text: "Como un cigarro", time: 39 },
  { text: "Cayendo en cenizas", time: 46 },
  { text: "Mi alma se muestra", time: 49 },
  { text: "Cayendo también", time: 51 },
  { text: "Expulsada de Edén", time: 57 },

  { text: "Oh oh oh oh", time: 65 },
  { text: "Oh oh oh oh", time: 73 },
  { text: "Oh oh oh oh oh oh", time: 79 },
  { text: "Oh oh oh oh", time: 88 },

  { text: "Me he encontrado viéndote a los ojos", time: 96 },
  { text: "Y abrazarte me calma", time: 99 },
  { text: "Todo el miedo que hay en mí", time: 103 },
  { text: "Dime que estarás en cada noche y cada día de dolor", time: 109 },
  { text: "Es que yo te quiero a ti", time: 116 },

  { text: "Yo te cuidaré cuando estés triste", time: 123 },
  { text: "O bien contenta, corazón", time: 127 },
  { text: "Es que yo te quiero a ti", time: 130 },
  { text: "Es que yo te quiero a ti", time: 136 },

  { text: "Oh oh oh oh oh", time: 142 },
  { text: "Oh oh oh oh", time: 148 },

  { text: "Como me mal viajo por acá", time: 156 },
  { text: "Pensando en mil cosas por pasar", time: 163 },
  { text: "Me consume la noche y la ansiedad", time: 170 },
  { text: "Al menos sé que estás tú pa' calmar", time: 176 },

  { text: "Como un cigarro", time: 183 },
  { text: "Cayendo en cenizas", time: 189 },
  { text: "Mi alma se muestra", time: 193 },
  { text: "Cayendo también", time: 196 },
  { text: "Expulsada de Edén", time: 201 },

  { text: "Me he encontrado viéndote a los ojos", time: 210 },
  { text: "Y abrazarte me calma", time: 215 },
  { text: "Todo el miedo que hay en mí", time: 218 },
  { text: "Dime que estarás en cada noche y cada día de dolor", time: 223 },
  { text: "Es que yo te quiero a ti", time: 231 },

  { text: "Ya no dejo que el miedo me gane", time: 238 },
  { text: "Porque no sirve ni madres", time: 240 },
  { text: "Ya que yo te quiero a ti", time: 245 },
  { text: "Es que yo te quiero a ti", time: 251 },
  { text: "Es que yo te quiero a ti", time: 257 },

  { text: "Oh oh oh", time: 262 },
  { text: "Oh oh oh", time: 265 },
  { text: "Oh oh oh oh", time: 268 },
  { text: "Oh oh", time: 272 },
  { text: "Oh oh oh oh", time: 275 },
  { text: "Oh oh oh oh", time: 278 },
  { text: "Oh oh oh oh", time: 281 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 0);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 12000);
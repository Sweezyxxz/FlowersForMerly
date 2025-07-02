// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Las Bolitas que salen de los petalos Representan tu color favorito", time: 13.5 },
  { text: "Las Rosas son Rojas porque son Rojas Xd", time: 20.5},
  { text: "Ya pero enserio queria decirte que...", time: 23 },
  { text: "Eres una gran persona", time: 27.5},
  { text: "Eres mi pensamiento favorito del día", time: 32.5},
  { text: "Eres una Mujer que cualquier hombre desearia", time: 36.5},
  { text: "Eres mi suerte en este mundo loco ", time: 42.5},
  { text: "Eres el poema más bonito que la vida me ha regalado", time: 46.5},
  { text: "Eres exactamente lo que siempre soñé y no sabía que existía", time: 50.5},
  { text: "Eres el sueño que no quiero despertar", time: 54.5},
  { text: "Eres la inspiración detrás de mis sonrisas", time: 58.5},
  { text: "Eres el abrazo que mi alma siempre necesitó", time: 62.5},
  { text: "Eres luz en mis días nublados", time: 66.5},
  { text: "Eres lo mejor que me ha pasado sin siquiera buscarlo", time: 70.5},
  { text: "Eres mi pedacito de paz en medio del caos", time: 74.5},
  { text: "Eres la razón por la que sonrío sin motivo", time: 78.5},
  { text: "Eres el destino que esperaba en silencio", time: 82.5},
  { text: "Eres ese “te quiero” que no me canso de sentir", time: 86.5},
  { text: "Eres mi amor en todas las vidas que pueda tener", time: 90.5},
  { text: "Eres lo que no sabía que buscaba, pero ahora no puedo dejar de querer", time: 94.5},
  { text: "Eres mi siempre en un mundo lleno de instantes", time: 98.5},
  { text: "Eres el sueño que me despierta con ilusión", time: 102.5},
  { text: "Eres la caricia que no sabía que necesitaba", time: 106.5},
  { text: "A tu lado los días grises se visten de colores", time: 110.5},
  { text: "Cada momento contigo vale más que mil recuerdos", time: 114.5},
  { text: "Lo más bonito de mis días comienza cuando pienso en ti", time: 118.5},
  { text: "El tiempo pasa volando cuando estás cerca", time: 122.5},
  { text: "Cada latido mío lleva tu nombre sin que lo sepa", time: 126.5},
  { text: "Desde que llegaste, el mundo tiene otro brillo", time: 130.5},
  { text: "Lo nuestro no se explica, se siente", time: 134.5},
  { text: "Si tuviera que elegir otra vez, te volvería a elegir sin dudar", time: 138.5},
  { text: "Tu presencia convierte lo cotidiano en mágico", time: 142.5},
  { text: "A veces no necesito palabras, solo un ratito contigo", time: 146.5},
  { text: "A veces, solo quiero mirarte y olvidarme del resto", time: 150.5},
  { text: "Tu compañía es ese regalo que nunca dejo de agradecer", time: 154.5},
  { text: "Si el amor tuviera forma, tendría tus ojos", time: 158.5},
  { text: "Prefiero tus silencios a mil palabras vacías", time: 162.5},
  { text: "Hay tardes que solo tienen sentido si estás tú", time: 166.5},
  { text: "Si amarte es un sueño, ojalá nunca despierte", time: 170.5},
  { text: "Cada día contigo es mi nuevo “mejor recuerdo”", time: 174.5},
  { text: "No hay forma de escribir “nosotros” sin sonreír", time: 178.5},
  { text: "No necesito buscar razones, tu existencia ya lo explica todo", time: 182.5},
  { text: "Si tú estás, el resto no importa", time: 186.5},
  { text: "Nuestro amor es ese “sí” que vale por mil vidas", time: 190.5},
  { text: "Contigo no quiero un “para siempre”, quiero un “cada día”", time: 194.5},
  { text: "Hay días en los que solo tu voz puede rescatarme", time: 198.5},
  { text: "Te pienso suave, te quiero fuerte y te siento siempre", time: 202.5},
  { text: "Ojalá pudiera congelar el tiempo cada vez que sonríes", time: 206.5},
  { text: "Quiero perderme contigo, aunque sea solo en una mirada larga", time: 210.5},
  { text: "Gracias por estar", time: 214.5},
  { text: "Gracias por elegirme", time: 218.5},
  { text: "Gracias por existir", time: 222.5},
  { text: "Gracias por quedarte.", time: 226.5},
  { text: "Gracias por cuidarme tanto", time: 230.5},
  { text: "Gracias por hacerme sentir especial", time: 234.5},
  { text: "Gracias por quedarte incluso en mis días difíciles", time: 238.5},
  { text: "Gracias por hacerme sonreír sin razón", time: 242.5},
  { text: "Gracias por ser mi lugar seguro", time: 246.5},
  { text: "Agradezco cada instante contigo", time: 250.5},
  { text: "Te agradezco con el alma entera", time: 254.5},
  { text: "No importa cuán lejos estés mi corazón siempre encuentra el camino", time: 258.5},
  { text: "Nuestro amor es ese “sí” que vale por mil vidas", time: 266.5},
  { text: "Aunque estés lejos, te llevo más cerca que nunca ", time: 270.5},
  { text: "Te ama, tu niño down ❤️ ", time: 276.5},
  

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8
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

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 4s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 4000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 14000);
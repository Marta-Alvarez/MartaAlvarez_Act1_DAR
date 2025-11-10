const entradas = [
  {
    titulo: "¿Qué es OSINT?",
    imagen: "images/Imagen1.jpg",
    texto: `
      <p>OSINT (Open Source Intelligence) es el proceso de recopilar información a partir de fuentes públicas disponibles en internet.</p>
      <p>Esto incluye redes sociales, sitios web, bases de datos abiertas, foros y más. Es una técnica clave en ciberseguridad, periodismo de investigación y análisis forense digital.</p>
      <p>Lo interesante es que no requiere acceso privilegiado: todo lo que se analiza está al alcance de cualquiera con curiosidad y método.</p>
     `
  },
  {
    titulo: "Herramientas OSINT",
    imagen: "images/Imagen2.png",
    texto: `
      <p>Algunas herramientas destacadas en OSINT son <strong>Maltego</strong>, <strong>Shodan</strong>, <strong>TheHarvester</strong> y <strong>SpiderFoot</strong>.</p>
      <p>Permiten explorar datos públicos, visualizar conexiones y detectar vulnerabilidades en sistemas y redes.</p>
    `
  },
  {
    titulo: "Riesgos de exposición de datos personales",
    imagen: "images/Imagen3.jpg",
    texto: `
      <p>Muchas personas desconocen cuánto de su vida está expuesto públicamente en internet.</p>
      <p>El OSINT permite detectar esa exposición y nos recuerda la importancia de proteger nuestra privacidad digital.</p>
    `
  }
];


const contenedor = document.getElementById("blog-container");

entradas.forEach(entrada => {
  const div = document.createElement("div");
  div.className = "blog-entry";
  div.innerHTML = `
    <img src="${entrada.imagen}" alt="${entrada.titulo}">
    <h2>${entrada.titulo}</h2>
    ${entrada.texto}
  `;
  contenedor.appendChild(div);
});


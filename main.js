// Selecciona todos los enlaces del menú
const navLinks = document.querySelectorAll('.nav-link');

// Agrega un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Elimina la clase 'active' y 'bg-success' de todos los enlaces
    navLinks.forEach(link => link.classList.remove('active', 'bg-success'));
    
    // Agrega la clase 'active' y 'bg-success' solo al enlace actual
    this.classList.add('active', 'bg-success');
  });
});

// Configuración del efecto de máquina de escribir
const app = document.getElementById('app');

const typewriter = new Typewriter(app, {
  loop: true
});

typewriter
  .typeString('<span style="color: #3498db;">Ingeniera bioquímica</span>')
  .pauseFor(2500)
  .deleteAll()
  .typeString('<span style="color: #9DBEBB;">Maestra en ciencias</span>')
  .pauseFor(2500)
  .deleteChars(19)  // Elimina 19 caracteres antes de escribir el siguiente texto
  .typeString('<span style="color: #E79968;"><strong>Científica de datos</strong></span>')
  .pauseFor(2500)
  .start();



  
  // Mostrar el botón cuando el usuario desplace hacia abajo
window.onscroll = function() {
  const boton = document.getElementById("volverAlInicio");
  
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    // Si el desplazamiento es mayor que 300px, mostramos el botón
    boton.style.display = "block";
  } else {
    // Si el desplazamiento es menor, lo ocultamos
    boton.style.display = "none";
  }
};

// Agregar el comportamiento de desplazamiento suave al hacer clic en el botón
document.getElementById("volverAlInicio").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});




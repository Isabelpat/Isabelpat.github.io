  // Selecciona todos los enlaces del menú
  const navLinks = document.querySelectorAll('.nav-link');

  // Agrega un evento de clic a cada enlace
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Elimina la clase 'active' de todos los enlaces
      navLinks.forEach(link => link.classList.remove('active', 'bg-success'));
      
      // Agrega la clase 'active' y 'bg-success' solo al enlace actual
      this.classList.add('active', 'bg-success');
    });
  });



var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('<span style="color: #3498db;">Ingeniera bioquímica</span>') // Azul
    .pauseFor(2500)
    .deleteAll()
    .typeString('<span style="color: #2ecc71;">Maestra en ciencias</span>') // Verde
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('<span style="color: #e74c3c;"><strong>Científica de datos</strong></span>') // Rojo
    .pauseFor(2500)
    .start();



    






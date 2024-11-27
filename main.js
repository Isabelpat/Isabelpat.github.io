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

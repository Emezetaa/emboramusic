document.addEventListener('DOMContentLoaded', function() {
    //  Mostrar/Ocultar Navbar
    const botonMenu = document.querySelector('.navbar-toggler');
    const menuCollapsible = document.getElementById('navbarNavDropdown');
    
    if(botonMenu && menuCollapsible) {
        const bsCollapse = new bootstrap.Collapse(menuCollapsible, {toggle: false});
        botonMenu.addEventListener('click', () => bsCollapse.toggle());
    }

    // Modal 
    const miModal = document.getElementById('modalCotizar');
    if(miModal) {
        miModal.addEventListener('shown.bs.modal', () => {
            console.log("El usuario ha abierto el modal de cotización.");
        });
    }

    // Validación del Formulario de Contrataciones
    const formContratacion = document.querySelector('form');
    if(formContratacion) {
        formContratacion.addEventListener('submit', function(event) {
            const email = document.querySelector('input[type="email"]').value;
            if (email === "") {
                event.preventDefault();
                alert("Por favor, ingresa tu correo para poder contactarte.");
            } else {
                console.log("Formulario validado correctamente.");
            }
        });
    }
});

function cotizaYa() {
    console.log("Función cotizaYa ejecutada");
}


function validarEnvio(event) {
    event.preventDefault();
    const email = document.getElementById('emailContacto').value;

    if (email !== "") {
        alert("¡Gracias! Hemos recibido tu solicitud para Embora Music. Te contactaremos pronto.");
        window.location.href = "index.html"; 
    }
}
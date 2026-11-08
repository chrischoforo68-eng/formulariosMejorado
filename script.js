 // Menu móvil
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link, .btn-nav').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
  });
});

// Header con fondo al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Formulario de reserva (simulación)
const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;
  const guests = document.getElementById('guests').value;

  if (!checkin || !checkout) {
    alert('Por favor selecciona las fechas de llegada y salida.');
    return;
  }

  if (new Date(checkout) <= new Date(checkin)) {
    alert('La fecha de salida debe ser posterior a la de llegada.');
    return;
  }

  // Simulación de respuesta
  alert(`¡Gracias por tu interés!\n\nFechas: ${checkin} → ${checkout}\nHuéspedes: ${guests}\n\nUn asesor se pondrá en contacto contigo pronto para confirmar disponibilidad.`);
  
  bookingForm.reset();
});

// Establecer fecha mínima (hoy) en los inputs de fecha
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkin').setAttribute('min', today);
document.getElementById('checkout').setAttribute('min', today);
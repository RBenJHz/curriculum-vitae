document.addEventListener('DOMContentLoaded', () => {
    // === Elementos del DOM ===
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const idiomaSelect = document.getElementById('idioma-select');
    const modoToggle = document.getElementById('modo-toggle');
    const navItems = document.querySelectorAll('.nav-link');
    const masBtn = document.getElementById('easter-egg');
    const easterPanel = document.getElementById('easter-panel');
    const easterBtns = document.querySelectorAll('.easter-btn');
  
    // === Diccionario de traducciones ===
    const textos = {
      es: {
        navInicio: "Inicio",
        navSobreMi: "Sobre Mí",
        navHabilidades: "Habilidades",
        navProyectos: "Proyectos",
        navContacto: "Contacto",
        nombre: "Ruben Jaimes",
        profesion: "Desarrollador Fullstack",
        frase: "Construyendo el futuro con visión y tecnología",
        sobreMiTitulo: "Sobre Mí",
        sobreMiTexto: "Soy un apasionado por la tecnología, la inteligencia artificial y el desarrollo de soluciones que impactan positivamente.",
        habilidadesTitulo: "Habilidades Técnicas",
        habilidadesTexto: "HTML, CSS, JavaScript, Spring Boot, PostgreSQL, MySQL y más tecnologías.",
        proyectosTitulo: "Proyectos Destacados",
        proyectosTexto: "He trabajado en soluciones como SIGA 5000 para gestión avícola con IoT e inteligencia artificial.",
        contactoTitulo: "Contacto",
        contactoTexto: "+573162369111.",
        btn: "Más"
      },
      en: {
        navInicio: "Home",
        navSobreMi: "About Me",
        navHabilidades: "Skills",
        navProyectos: "Projects",
        navContacto: "Contact",
        nombre: "Ruben Jaimes",
        profesion: "Full Stack Developer",
        frase: "Building the future with vision and technology",
        sobreMiTitulo: "About Me",
        sobreMiTexto: "I am passionate about technology, AI, and developing solutions that positively impact.",
        habilidadesTitulo: "Technical Skills",
        habilidadesTexto: "HTML, CSS, JavaScript, Spring Boot, PostgreSQL, MySQL and other technologies.",
        proyectosTitulo: "Featured Projects",
        proyectosTexto: "I’ve worked on systems like SIGA 5000 for poultry management with IoT and AI.",
        contactoTitulo: "Contact",
        contactoTexto: "+573162369111.",
        btn: "More"
      },
      pt: {
        navInicio: "Início",
        navSobreMi: "Sobre Mim",
        navHabilidades: "Habilidades",
        navProyectos: "Projetos",
        navContacto: "Contato",
        nombre: "Ruben Jaimes",
        profesion: "Desenvolvedor Fullstack",
        frase: "Construindo o futuro com visão e tecnologia",
        sobreMiTitulo: "Sobre Mim",
        sobreMiTexto: "Sou apaixonado por tecnologia, inteligência artificial e desenvolvimento de soluções que impactam positivamente.",
        habilidadesTitulo: "Habilidades Técnicas",
        habilidadesTexto: "HTML, CSS, JavaScript, Spring Boot, PostgreSQL, MySQL e outras tecnologias.",
        proyectosTitulo: "Projetos em Destaque",
        proyectosTexto: "Trabalhei em sistemas como SIGA 5000 para gerenciamento avícola com IoT e IA.",
        contactoTitulo: "Contato",
        contactoTexto: "+573162369111.",
        btn: "Mais"
      }
    };
  
    // === Función para actualizar textos según el idioma seleccionado ===
    function actualizarIdioma(idioma) {
      const traducciones = textos[idioma];
      for (const clave in traducciones) {
        const elementos = document.querySelectorAll(`[data-i18n="${clave}"]`);
        elementos.forEach(el => {
          el.textContent = traducciones[clave];
        });
      }
    }
  
    // === Cambio de idioma ===
    idiomaSelect.addEventListener("change", (e) => {
      actualizarIdioma(e.target.value);
    });
  
    // === Menú hamburguesa ===
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  
    // === Cerrar menú al hacer clic en un enlace ===
    navItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  
    // === Cambiar tema claro/oscuro ===
    modoToggle.addEventListener('click', () => {
      const temaActual = document.body.getAttribute('data-tema') || 'oscuro';
      const nuevoTema = temaActual === 'oscuro' ? 'claro' : 'oscuro';
      document.body.setAttribute('data-tema', nuevoTema);
      modoToggle.textContent = nuevoTema === 'oscuro' ? '🌙' : '☀️';
    });
  
    // === Easter egg ===
    masBtn.addEventListener('click', () => {
        alert('¡Easter egg descubierto!\nPronto desbloquearás una sorpresa...');
      
        // Oculta suavemente el botón "Más"
        masBtn.style.transition = 'opacity 0.5s ease';
        masBtn.style.opacity = '0';
      
        setTimeout(() => {
          masBtn.style.display = 'none';
      
          // Muestra el panel misterioso
          easterPanel.classList.remove('hidden');
          setTimeout(() => {
            easterPanel.classList.add('show');
          }, 100);
        }, 500);
      });
      
      // Acción misteriosa según elección
      easterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          const eleccion = e.target.dataset.choice;
          if (eleccion === 'left') {
            alert('Alimentate y crece...');
            // Snake
          } else {
            alert('Destruye tantos como puedas...');
            // Asteroids
          }
        });
      });
  
    // Definir qué pasa con cada botón
    easterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const direction = btn.dataset.direction;
        console.log(`Elegiste: ${direction}`);
        // Aquí puedes decidir qué animación, contenido o cambio hacer...
        // ¡Pero por ahora queda como un misterio!
      });
    });

    // === Mostrar "Más" solo en sección Inicio ===
    const observer = new IntersectionObserver(([entry]) => {
      masBtn.style.display = entry.isIntersecting ? 'inline-block' : 'none';
    }, { threshold: 0.5 });
  
    observer.observe(document.getElementById('inicio'));

    // === Establecer modo oscuro al iniciar ===
    document.body.setAttribute('data-tema', 'oscuro');
    modoToggle.textContent = '🌙';
  
  });
  
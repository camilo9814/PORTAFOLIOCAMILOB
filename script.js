/* ==================================================================
   script.js — Lógica del portafolio "Obsidian & Cobalt Editorial"
   No necesitas editar este archivo. Todo el contenido se lee desde
   contenido.js.
   ================================================================== */
(function () {
  "use strict";

  // Nota técnica: un "const" de nivel superior en otro <script> NO cuelga de
  // "window", así que se comprueba con typeof sobre el identificador directo.
  const faltan = [];
  if (typeof PERFIL === "undefined") faltan.push("PERFIL");
  if (typeof HERO === "undefined") faltan.push("HERO");
  if (typeof PERFIL_SECCION === "undefined") faltan.push("PERFIL_SECCION");
  if (typeof CIFRAS === "undefined") faltan.push("CIFRAS");
  if (typeof SERVICIOS === "undefined") faltan.push("SERVICIOS");
  if (typeof LISTA_SERVICIOS === "undefined") faltan.push("LISTA_SERVICIOS");
  if (typeof FONDOS_IA === "undefined") faltan.push("FONDOS_IA");
  if (typeof CATEGORIAS === "undefined") faltan.push("CATEGORIAS");
  if (typeof GALERIA === "undefined") faltan.push("GALERIA");
  if (typeof PROYECTOS === "undefined") faltan.push("PROYECTOS");
  if (typeof METODO === "undefined") faltan.push("METODO");
  if (typeof LISTA_METODO === "undefined") faltan.push("LISTA_METODO");
  if (typeof FAQ === "undefined") faltan.push("FAQ");
  if (typeof LISTA_FAQ === "undefined") faltan.push("LISTA_FAQ");
  if (typeof CTA === "undefined") faltan.push("CTA");
  if (typeof PIE === "undefined") faltan.push("PIE");
  if (faltan.length) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<p style="padding:6rem 1.5rem;max-width:40rem;margin:auto;line-height:1.6;font-family:sans-serif">' +
      "No se pudo leer contenido.js correctamente (falta: " + faltan.join(", ") + "). Casi siempre es una comilla, " +
      "una coma o una llave { } que falta o sobra en el último cambio que hiciste. Revisa ese archivo o vuelve a la versión anterior.</p>"
    );
    return;
  }

  const $ = (id) => document.getElementById(id);
  function crear(etiqueta, clase) {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    return el;
  }
  function ponerEnlace(el, url, ocultarPadre) {
    if (!url) { (ocultarPadre ? el.closest("li, div") || el : el).hidden = true; return; }
    el.href = url;
  }
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Convención de contenido.js: "\n" = línea nueva, **texto** = color de acento.
  function pintarTitulo(el, texto) {
    el.innerHTML = "";
    String(texto).split("\n").forEach(function (linea, i) {
      if (i > 0) el.appendChild(document.createElement("br"));
      const partes = linea.split("**");
      partes.forEach(function (parte, j) {
        if (!parte) return;
        const span = document.createElement("span");
        if (j % 2 === 1) span.className = "degradado";
        span.textContent = parte;
        el.appendChild(span);
      });
    });
  }

  function resolverEnlace(clave) {
    if (clave === "whatsapp") return PERFIL.whatsapp;
    if (clave === "email") return PERFIL.email ? "mailto:" + PERFIL.email : "";
    return clave || "";
  }

  /* ---------- Pequeña librería de iconos en línea (sin dependencias externas) ---------- */
  const ICONOS = {
    retoque: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="4"/><path d="M4 8h3l2-3h6l2 3h3v11H4Z"/></svg>',
    modelado3d: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7Z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
    ilustracion: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3-1 4-3 4-5 4 0 9-4 11-9 1-2 0-4-2-3-5 2-9 7-9 11-2 0-4 1-5 4Z"/><path d="M14 6l4 4"/></svg>',
    branding: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 10h18M7 14h4"/></svg>',
    direccionArte: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="9" height="9"/><rect x="12" y="8" width="9" height="9"/><rect x="7" y="13" width="9" height="8"/></svg>',
    social: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 16v-5m3 5V9m3 7v-3"/></svg>',
    reloj: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    calidad: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 19V9m6 10V5m6 14v-7"/></svg>',
    escudo: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z"/></svg>',
    revision: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v6h6M20 20v-6h-6"/><path d="M5.5 15a7 7 0 0 0 12-3M18.5 9a7 7 0 0 0-12 3"/></svg>'
  };
  function icono(nombre) { return ICONOS[nombre] || ""; }


  /* ================================================================
     BARRA SUPERIOR / MENÚ MÓVIL
     ================================================================ */
  function cargarBarra() {
    $("marcaNombre").textContent = PERFIL.nombre;
    $("marcaLinea").textContent = PERFIL.lineaMarca;
    [$("barraContacto"), $("menuContacto"), $("menuMovilContacto")].forEach(function (el) {
      ponerEnlace(el, resolverEnlace("whatsapp"));
    });
    $("barraContacto").textContent = "Hablemos";

    const boton = $("botonMenu");
    const menuMovil = $("menuMovil");
    boton.addEventListener("click", function () {
      const abierto = menuMovil.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", String(abierto));
    });
    menuMovil.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menuMovil.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* ================================================================
     1. INICIO
     ================================================================ */
  function cargarHero() {
    $("heroEstudio").textContent = HERO.estudio;
    $("heroDisciplinas").textContent = HERO.disciplinas;
    $("heroDisponible").textContent = HERO.disponible;
    $("heroAntetitulo").textContent = HERO.antetitulo;
    pintarTitulo($("heroTitulo"), HERO.titulo);
    $("heroPresentacion").textContent = HERO.presentacion;
    $("heroBotonPortafolio").textContent = HERO.botonPortafolio;
    $("heroBotonCotizarTexto").textContent = HERO.botonCotizar;
    ponerEnlace($("heroBotonCotizar"), resolverEnlace(HERO.botonCotizarEnlace));

    function llenarPieza(prefijo, datos, irATrabajos) {
      $(prefijo + "Img" + (datos.__sufijoImg || "")).src = datos.imagen;
      $(prefijo + "Img" + (datos.__sufijoImg || "")).alt = datos.titulo;
    }

    $("heroImgPrincipal").src = HERO.piezaPrincipal.imagen;
    $("heroImgPrincipal").alt = HERO.piezaPrincipal.titulo;
    $("heroEtiquetaPrincipal").textContent = HERO.piezaPrincipal.etiqueta;
    $("heroPrincipalMeta").textContent = HERO.piezaPrincipal.meta;
    $("heroPrincipalTitulo").textContent = HERO.piezaPrincipal.titulo;

    $("heroImgLateral1").src = HERO.piezaLateral1.imagen;
    $("heroImgLateral1").alt = HERO.piezaLateral1.titulo;
    $("heroEtiquetaLateral1").textContent = HERO.piezaLateral1.etiqueta;
    $("heroLateral1Titulo").textContent = HERO.piezaLateral1.titulo;

    $("heroImgLateral2").src = HERO.piezaLateral2.imagen;
    $("heroImgLateral2").alt = HERO.piezaLateral2.titulo;
    $("heroEtiquetaLateral2").textContent = HERO.piezaLateral2.etiqueta;
    $("heroLateral2Titulo").textContent = HERO.piezaLateral2.titulo;

    [$("heroPiezaPrincipal"), $("heroPiezaLateral1"), $("heroPiezaLateral2")].forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.getElementById("trabajos").scrollIntoView({ behavior: reducirMovimiento ? "auto" : "smooth" });
      });
    });
  }


  /* ================================================================
     2. SOBRE MÍ + CIFRAS
     ================================================================ */
  function cargarPerfilSeccion() {
    $("sm01").textContent = PERFIL_SECCION.indice;
    $("perfilImg").src = PERFIL_SECCION.imagen;
    $("perfilImg").alt = PERFIL_SECCION.fichaNombre;
    $("perfilNombreFicha").textContent = PERFIL_SECCION.fichaNombre;
    $("perfilRolFicha").textContent = PERFIL_SECCION.fichaRol;
    $("perfilUbicacionFicha").textContent = PERFIL_SECCION.fichaUbicacion;
    $("perfilAntetitulo").textContent = PERFIL_SECCION.antetitulo;
    pintarTitulo($("perfilTitulo"), PERFIL_SECCION.titulo);
    $("perfilParrafo1").textContent = PERFIL_SECCION.parrafo1;
    $("perfilParrafo2").textContent = PERFIL_SECCION.parrafo2;

    const cont = $("cifras");
    CIFRAS.forEach(function (c) {
      const bloque = crear("div", "cifra");
      const num = crear("span", "cifra__num" + (c.acento ? " cifra__num--cobalto" : ""));
      num.textContent = c.numero;
      const etq = crear("span", "cifra__etiqueta");
      etq.textContent = c.etiqueta;
      bloque.append(num, etq);
      cont.appendChild(bloque);
    });
  }


  /* ================================================================
     3. SERVICIOS
     ================================================================ */
  function cargarServicios() {
    $("serv02").textContent = SERVICIOS.indice;
    pintarTitulo($("servTitulo"), SERVICIOS.titulo);
    $("servNota").textContent = SERVICIOS.nota;

    const cont = $("rejillaServicios");
    LISTA_SERVICIOS.forEach(function (s, i) {
      const tarjeta = crear("article", "servicio");
      tarjeta.innerHTML =
        '<div><div class="servicio__cab">' +
        '<span class="servicio__num">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<span class="servicio__icono">' + icono(s.icono) + '</span>' +
        '</div>' +
        '<h3 class="servicio__titulo"></h3>' +
        '<p class="servicio__texto"></p></div>' +
        '<div class="chips"></div>';
      tarjeta.querySelector(".servicio__titulo").textContent = s.titulo;
      tarjeta.querySelector(".servicio__texto").textContent = s.texto;
      const chips = tarjeta.querySelector(".chips");
      (s.tags || []).forEach(function (t) {
        const chip = crear("span", "chip");
        chip.textContent = t;
        chips.appendChild(chip);
      });
      cont.appendChild(tarjeta);
    });
  }


  /* ================================================================
     4. FONDOS CON IA (COMPARADOR)
     ================================================================ */
  function cargarFondosIA() {
    $("ia04").textContent = FONDOS_IA.indice;
    pintarTitulo($("iaTitulo"), FONDOS_IA.titulo);
    $("iaNota").textContent = FONDOS_IA.nota;

    $("iaAntes").src = FONDOS_IA.antes;
    $("iaAntes").alt = FONDOS_IA.etiquetaAntes;
    $("iaDespues").src = FONDOS_IA.despues;
    $("iaDespues").alt = FONDOS_IA.etiquetaDespues;
    $("iaEtiquetaAntes").textContent = FONDOS_IA.etiquetaAntes;
    $("iaEtiquetaDespues").textContent = FONDOS_IA.etiquetaDespues;
    $("iaAyuda").textContent = FONDOS_IA.ayuda;
    $("iaPieNota").textContent = FONDOS_IA.piePersonalizado;

    $("iaFichaTitulo").textContent = FONDOS_IA.fichaTitulo;
    const metricas = $("iaMetricas");
    FONDOS_IA.metricas.forEach(function (m) {
      const fila = crear("div");
      const dt = crear("dt"); dt.textContent = m.etiqueta;
      fila.appendChild(dt);
      if (m.valor) {
        const dd = crear("dd", m.acento ? "cobalto" : "");
        dd.textContent = m.valor;
        fila.appendChild(dd);
      }
      if (m.detalle) {
        const p = crear("p", "detalle");
        p.textContent = m.detalle;
        fila.appendChild(p);
      }
      metricas.appendChild(fila);
    });

    const chips = $("iaChips");
    FONDOS_IA.chips.forEach(function (t) {
      const chip = crear("span", "chip");
      chip.textContent = t;
      chips.appendChild(chip);
    });

    $("iaCTATitulo").textContent = FONDOS_IA.ctaTitulo;
    $("iaCTATexto").textContent = FONDOS_IA.ctaTexto;
    $("iaCTABoton").textContent = FONDOS_IA.ctaBoton;
    ponerEnlace($("iaCTA"), resolverEnlace(FONDOS_IA.ctaEnlace));

    iniciarComparador($("comparadorIA").querySelector(".comparador__marco"), $("iaRango"), $("iaAntesCapa"));
  }

  function iniciarComparador(marco, rango, capaAntes) {
    function fijar(valor) {
      rango.value = valor;
      marco.style.setProperty("--pos", valor + "%");
    }
    rango.addEventListener("input", function () { marco.style.setProperty("--pos", rango.value + "%"); });

    // Arrastre directo sobre la imagen (además del control invisible)
    let arrastrando = false;
    function valorDesdeX(x) {
      const r = marco.getBoundingClientRect();
      return Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100));
    }
    marco.addEventListener("pointerdown", function (e) {
      arrastrando = true;
      fijar(valorDesdeX(e.clientX));
    });
    window.addEventListener("pointerup", function () { arrastrando = false; });
    marco.addEventListener("pointermove", function (e) {
      if (arrastrando) fijar(valorDesdeX(e.clientX));
    });

    // Pequeño barrido de bienvenida para insinuar que se puede arrastrar
    if (reducirMovimiento) { fijar(50); return; }
    fijar(85);
    setTimeout(function () {
      const inicio = performance.now();
      const duracion = 1500;
      let detenido = false;
      rango.addEventListener("pointerdown", function () { detenido = true; }, { once: true });
      marco.addEventListener("pointerdown", function () { detenido = true; }, { once: true });
      function paso(ahora) {
        if (detenido) return;
        const avance = Math.min((ahora - inicio) / duracion, 1);
        const suave = 1 - Math.pow(1 - avance, 3);
        fijar(85 - 35 * suave);
        if (avance < 1) requestAnimationFrame(paso);
      }
      requestAnimationFrame(paso);
    }, 800);
  }


  /* ================================================================
     5. TRABAJOS (GALERÍA + FILTROS + MODAL)
     ================================================================ */
  let categoriaActiva = "todos";
  let visibles = [];
  let indiceActual = 0;

  function nombreCategoria(clave) { return CATEGORIAS[clave] || clave || ""; }

  function cargarGaleriaCabecera() {
    $("trab03").textContent = GALERIA.indice;
    $("trabTitulo").textContent = GALERIA.titulo;
    $("behanceNota").textContent = GALERIA.notaBehance;
    $("behanceBotonTexto").textContent = GALERIA.botonBehance;
    ponerEnlace($("behanceBoton"), PERFIL.behance);
  }

  function crearFiltros() {
    const cont = $("filtros");
    const opciones = [["todos", "Todos"]].concat(Object.entries(CATEGORIAS));
    opciones.forEach(function (op) {
      const clave = op[0], nombre = op[1];
      const cantidad = clave === "todos" ? PROYECTOS.length : PROYECTOS.filter(function (p) { return p.categoria === clave; }).length;
      if (clave !== "todos" && cantidad === 0) return;
      const boton = crear("button", "filtro");
      boton.type = "button";
      boton.dataset.categoria = clave;
      boton.textContent = nombre + " (" + String(cantidad).padStart(2, "0") + ")";
      cont.appendChild(boton);
    });
    cont.addEventListener("click", function (e) {
      const boton = e.target.closest(".filtro");
      if (!boton) return;
      categoriaActiva = boton.dataset.categoria;
      $("galeria").classList.add("con-animacion");
      marcarFiltro();
      dibujarGaleria();
    });
    marcarFiltro();
  }
  function marcarFiltro() {
    document.querySelectorAll(".filtro").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.categoria === categoriaActiva));
    });
  }

  function crearObra(p, i) {
    const obra = crear("button", "obra " + (p.tamano === "ancha" ? "obra--ancha" : "obra--normal"));
    obra.type = "button";
    obra.style.animationDelay = Math.min(i, 10) * 45 + "ms";
    obra.setAttribute("aria-label", "Abrir " + p.titulo);

    const marco = crear("div", "obra__marco");
    const img = crear("img");
    img.src = p.imagen; img.alt = ""; img.loading = "lazy"; img.decoding = "async";
    img.addEventListener("error", function () { obra.classList.add("obra--error"); });
    const aviso = crear("span", "obra__aviso");
    aviso.textContent = "No se encontró la imagen: " + p.imagen;
    marco.append(img, aviso, crear("span", "obra__velo"));
    if (p.etiqueta) {
      const etq = crear("span", "obra__etiqueta");
      etq.textContent = p.etiqueta;
      marco.appendChild(etq);
    }
    const pie = crear("span", "obra__pie");
    const texto = crear("span");
    if (p.meta) {
      const meta = crear("span", "obra__meta");
      meta.textContent = p.meta;
      texto.appendChild(meta);
    }
    const titulo = crear("span", "obra__titulo");
    titulo.textContent = p.titulo;
    texto.appendChild(titulo);
    const flecha = crear("span", "obra__flecha");
    flecha.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';
    pie.append(texto, flecha);
    marco.appendChild(pie);
    obra.appendChild(marco);
    obra.addEventListener("click", function () { abrirModal(i); });
    return obra;
  }

  function dibujarGaleria() {
    const cont = $("galeria");
    cont.innerHTML = "";
    visibles = PROYECTOS.filter(function (p) { return categoriaActiva === "todos" || p.categoria === categoriaActiva; });
    $("vacio").hidden = visibles.length > 0;
    if (!visibles.length) $("vacio").textContent = "Todavía no hay proyectos en esta categoría.";
    visibles.forEach(function (p, i) { cont.appendChild(crearObra(p, i)); });
  }

  const modal = $("modal");
  let imagenesActuales = [];

  function abrirModal(indice) {
    indiceActual = indice;
    mostrarProyecto();
    document.body.classList.add("sin-scroll");
    if (!modal.open) modal.showModal();
  }
  function agregarDato(lista, etiqueta, valor) {
    if (!valor) return;
    const fila = crear("div");
    const dt = crear("dt"); dt.textContent = etiqueta;
    const dd = crear("dd"); dd.textContent = valor;
    fila.append(dt, dd);
    lista.appendChild(fila);
  }
  function mostrarProyecto() {
    const p = visibles[indiceActual];
    imagenesActuales = [p.imagen].concat(p.galeria || []);
    $("modalCategoria").textContent = nombreCategoria(p.categoria);
    $("modalTitulo").textContent = p.titulo;
    $("modalDescripcion").textContent = p.descripcion || "";
    const datos = $("modalDatos");
    datos.innerHTML = "";
    agregarDato(datos, "Categoría", nombreCategoria(p.categoria));
    agregarDato(datos, "Año", p.anio);
    agregarDato(datos, "Herramientas", p.herramientas);
    const enlace = $("modalEnlace");
    if (p.enlace) { enlace.href = p.enlace; enlace.textContent = "Ver proyecto completo"; enlace.hidden = false; }
    else enlace.hidden = true;

    const miniaturas = $("modalMiniaturas");
    miniaturas.innerHTML = "";
    miniaturas.hidden = imagenesActuales.length < 2;
    imagenesActuales.forEach(function (ruta, i) {
      const boton = crear("button", "miniatura");
      boton.type = "button";
      boton.setAttribute("aria-label", "Ver imagen " + (i + 1));
      const img = crear("img"); img.src = ruta; img.alt = ""; img.loading = "lazy";
      boton.appendChild(img);
      boton.addEventListener("click", function () { mostrarImagen(i); });
      miniaturas.appendChild(boton);
    });

    const hayVarios = visibles.length > 1;
    $("modalPrev").hidden = !hayVarios;
    $("modalNext").hidden = !hayVarios;
    mostrarImagen(0);
    $("modalInfo").scrollTop = 0;
    modal.scrollTop = 0;
  }
  function mostrarImagen(i) {
    const p = visibles[indiceActual];
    const img = $("modalImg");
    img.src = imagenesActuales[i];
    img.alt = p.titulo;
    document.querySelectorAll(".miniatura").forEach(function (m, k) { m.setAttribute("aria-current", String(k === i)); });
  }
  function cambiarProyecto(paso) {
    indiceActual = (indiceActual + paso + visibles.length) % visibles.length;
    mostrarProyecto();
  }
  $("modalCerrar").addEventListener("click", function () { modal.close(); });
  $("modalPrev").addEventListener("click", function () { cambiarProyecto(-1); });
  $("modalNext").addEventListener("click", function () { cambiarProyecto(1); });
  modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
  modal.addEventListener("close", function () { document.body.classList.remove("sin-scroll"); });
  document.addEventListener("keydown", function (e) {
    if (!modal.open || visibles.length < 2) return;
    if (e.key === "ArrowLeft") cambiarProyecto(-1);
    if (e.key === "ArrowRight") cambiarProyecto(1);
  });
  let toqueX = null;
  const lienzo = $("modalLienzo");
  lienzo.addEventListener("touchstart", function (e) { toqueX = e.changedTouches[0].clientX; }, { passive: true });
  lienzo.addEventListener("touchend", function (e) {
    if (toqueX === null || visibles.length < 2) return;
    const d = e.changedTouches[0].clientX - toqueX;
    toqueX = null;
    if (Math.abs(d) > 60) cambiarProyecto(d < 0 ? 1 : -1);
  }, { passive: true });


  /* ================================================================
     6. MÉTODO
     ================================================================ */
  function cargarMetodo() {
    $("met05").textContent = METODO.indice;
    pintarTitulo($("metTitulo"), METODO.titulo);
    $("metParrafo").textContent = METODO.parrafo;
    $("metGarantiaTitulo").textContent = METODO.garantiaTitulo;
    $("metGarantiaTexto").textContent = METODO.garantiaTexto;

    const cont = $("rejillaMetodo");
    LISTA_METODO.forEach(function (m) {
      const tarjeta = crear("article", "metodo__tarjeta");
      tarjeta.innerHTML =
        '<div class="metodo__cab"><span class="metodo__num"></span><span class="metodo__icono"></span></div>' +
        '<div><h4 class="metodo__titulo"></h4><p class="metodo__texto-tarjeta"></p></div>';
      tarjeta.querySelector(".metodo__num").textContent = m.numero;
      tarjeta.querySelector(".metodo__icono").innerHTML = icono(m.icono);
      tarjeta.querySelector(".metodo__titulo").textContent = m.titulo;
      tarjeta.querySelector(".metodo__texto-tarjeta").textContent = m.texto;
      cont.appendChild(tarjeta);
    });
  }


  /* ================================================================
     7. FAQ (ACORDEÓN)
     ================================================================ */
  function cargarFAQ() {
    $("faq06").textContent = FAQ.indice;
    $("faqTitulo").textContent = FAQ.titulo;
    $("faqNota").textContent = FAQ.nota;

    const cont = $("acordeon");
    LISTA_FAQ.forEach(function (item) {
      const fila = crear("div", "pregunta");
      fila.innerHTML =
        '<button class="pregunta__boton" type="button" aria-expanded="false">' +
        '<span class="pregunta__texto"></span><span class="pregunta__icono" aria-hidden="true"></span></button>' +
        '<div class="pregunta__respuesta"><p></p></div>';
      fila.querySelector(".pregunta__texto").textContent = item.pregunta;
      fila.querySelector(".pregunta__respuesta p").textContent = item.respuesta;
      cont.appendChild(fila);
    });

    cont.addEventListener("click", function (e) {
      const boton = e.target.closest(".pregunta__boton");
      if (!boton) return;
      const fila = boton.closest(".pregunta");
      const respuesta = fila.querySelector(".pregunta__respuesta");
      const yaAbierta = boton.getAttribute("aria-expanded") === "true";

      cont.querySelectorAll(".pregunta__boton").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
        b.closest(".pregunta").setAttribute("aria-expanded", "false");
        b.nextElementSibling.style.maxHeight = null;
      });

      if (!yaAbierta) {
        boton.setAttribute("aria-expanded", "true");
        fila.setAttribute("aria-expanded", "true");
        respuesta.style.maxHeight = respuesta.scrollHeight + "px";
      }
    });
  }


  /* ================================================================
     8. CONTACTO + PIE DE PÁGINA
     ================================================================ */
  function cargarContacto() {
    $("ctaAntetitulo").textContent = CTA.antetitulo;
    pintarTitulo($("ctaTitulo"), CTA.titulo);
    $("ctaParrafo").textContent = CTA.parrafo;
    $("ctaWhatsappTexto").textContent = CTA.botonWhatsapp;
    ponerEnlace($("ctaWhatsapp"), resolverEnlace("whatsapp"), true);
    $("ctaEmailTexto").textContent = CTA.botonEmail;
    if (PERFIL.email) $("ctaEmail").href = "mailto:" + PERFIL.email; else $("ctaEmail").hidden = true;

    $("canalesTitulo").textContent = CTA.canalesTitulo;
    ponerEnlace($("canalInstagram"), PERFIL.instagram, true);
    $("canalInstagramTexto").textContent = PERFIL.instagramUsuario || "";
    ponerEnlace($("canalBehance"), PERFIL.behance, true);
    $("canalBehanceTexto").textContent = PERFIL.behanceUsuario || "";
    $("canalUbicacion").textContent = [PERFIL.ubicacion, PERFIL.horario].filter(Boolean).join(" • ");
  }

  function cargarPie() {
    $("pieNombre").textContent = PERFIL.nombre;
    $("pieDescripcion").textContent = PIE.descripcion;
    $("pieUbicacion").textContent = [PERFIL.ubicacion, PERFIL.horario].filter(Boolean).join(" — ");
    $("pieDisponibilidad").textContent = PERFIL.disponibilidad;

    const ig = $("pieInstagram");
    ponerEnlace(ig, PERFIL.instagram, true);
    ig.textContent = "Instagram / " + (PERFIL.instagramUsuario || "");

    const be = $("pieBehance");
    ponerEnlace(be, PERFIL.behance, true);
    be.textContent = "Behance / " + (PERFIL.behanceUsuario || "");

    const em = $("pieEmail");
    if (PERFIL.email) { em.href = "mailto:" + PERFIL.email; em.textContent = PERFIL.email; }
    else em.hidden = true;

    $("pieDerechos").textContent = PIE.derechos;
    $("pieCredito").textContent = PIE.credito;
  }


  /* ================================================================
     ARRANQUE
     ================================================================ */
  cargarBarra();
  cargarHero();
  cargarPerfilSeccion();
  cargarServicios();
  cargarFondosIA();
  cargarGaleriaCabecera();
  crearFiltros();
  dibujarGaleria();
  cargarMetodo();
  cargarFAQ();
  cargarContacto();
  cargarPie();
})();

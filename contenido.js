/* ==================================================================
   CONTENIDO DEL PORTAFOLIO — "Obsidian & Cobalt Editorial"
   ------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para actualizar tu
   web (además de subir tus imágenes a la carpeta "imagenes").

   REGLAS DE ORO PARA NO DAÑAR NADA
   1. Cambia solo el texto que está entre comillas "así".
   2. No borres comillas, comas ni llaves { } ni corchetes [ ].
   3. Cada elemento de una lista (entre corchetes [ ]) va entre
      llaves { ... } y termina con una coma.
   4. Las imágenes se guardan en la carpeta "imagenes". Aquí solo
      escribes su ruta, por ejemplo "imagenes/mi-foto.jpg".
   5. Donde veas dos asteriscos **así**, ese trozo de texto se pinta
      en el color azul/lavanda de acento. Un salto de línea real
      dentro del texto (Enter) empieza una línea nueva del título.
   ================================================================== */


/* ==================================================================
   1. TUS DATOS Y ENLACES
   ================================================================== */
const PERFIL = {
  nombre: "Camilo Andrés Barba",
  lineaMarca: "Retoque & Modelador 3D — Bogotá",

  // Correo, WhatsApp y redes. Deja "" en whatsapp si no quieres botón de WhatsApp.
  email: "tucorreo@ejemplo.com",                       // ← CAMBIA ESTE CORREO
  whatsapp: "https://wa.me/573197167140",               // ← CAMBIA ESTE NÚMERO (código país + número, sin + ni espacios)
  instagram: "https://www.instagram.com/camilo9814/",
  instagramUsuario: "@camilo9814",
  behance: "https://www.behance.net/camilobarba",
  behanceUsuario: "camilobarba",
  ubicacion: "Bogotá D.C., Colombia",
  horario: "Horario UTC-5",
  disponibilidad: "Disponible para proyectos globales / remoto"
};


/* ==================================================================
   2. INICIO (lo primero que se ve)
   ================================================================== */
const HERO = {
  estudio: "Estudio Creativo Independiente — Bogotá, Colombia",
  disciplinas: "3D • CGI • Retoque • Concept Art",
  disponible: "Q3-Q4 Disponible",

  antetitulo: "Camilo Andrés Barba • Portfolio",
  // "\n" empieza una línea nueva. **texto** se pinta en el color de acento.
  titulo: "DONDE LA FORMA\n**Y LA LUZ COBRAN** VIDA",

  presentacion: "Retoque fotográfico publicitario e ilustración digital desde Bogotá. Creando realidades visuales con inteligencia artificial que trascienden el lienzo digital para marcas con exigencia estética.",
  botonPortafolio: "Ver portafolio",
  botonCotizar: "Cotizar proyecto",
  // El botón "Cotizar" abre este enlace (por defecto, tu WhatsApp).
  botonCotizarEnlace: "whatsapp",

  // Las 3 imágenes de la vitrina de inicio (1 grande + 2 pequeñas).
  piezaPrincipal: {
    imagen: "imagenes/hero/principal.svg",
    etiqueta: "Retoque Publicitario & Moda",
    meta: "Separación de frecuencias / Dodge & Burn / Micro-textura",
    titulo: "Portadas Moda & Beauty Editorial — High-End Retouching"
  },
  piezaLateral1: {
    imagen: "imagenes/hero/lateral-1.svg",
    etiqueta: "Retoque Publicitario",
    titulo: "Portadas Moda & Campaña"
  },
  piezaLateral2: {
    imagen: "imagenes/hero/lateral-2.svg",
    etiqueta: "Hard Surface 3D",
    titulo: "Prototipo de Casco — PBR Texturing"
  }
};


/* ==================================================================
   3. SOBRE MÍ + CIFRAS
   ================================================================== */
const PERFIL_SECCION = {
  indice: "01 / Perfil & Visión",
  imagen: "imagenes/sobre-mi/perfil.svg",
  fichaNombre: "Camilo Andrés Barba",
  fichaRol: "3D Lead & Digital Retoucher",
  fichaUbicacion: "BOG / COL",

  antetitulo: "El ojo detrás de la escena",
  titulo: "Precisión de luz,\nrigor anatómico y textura sin concesiones.",
  parrafo1: "Como artista digital multidisciplinario radicado en Bogotá, fusiono la disciplina de la fotografía publicitaria con la libertad ilimitada del renderizado 3D en Blender y herramientas de última generación. Cada proyecto es abordado como una pieza de exhibición: desde la simulación de materiales hiperrealistas hasta el micro-retoque de piel en portadas editoriales.",
  parrafo2: "Mi enfoque elimina las barreras entre lo virtual y lo físico. Ya sea construyendo una arquitectura nocturna inmersiva, modelando un hiperdeportivo con fidelidad milimétrica o curando el sistema visual de una marca corporativa de lujo, entrego control estético absoluto a directores de arte y agencias globales."
};

// Las 4 cifras que se ven debajo del texto "Sobre mí".
const CIFRAS = [
  { numero: "+5", etiqueta: "Años de trayectoria" },
  { numero: "100%", etiqueta: "Fidelidad 16-bit", acento: true },
  { numero: "CGI", etiqueta: "Blender • Cycles • Octane" },
  { numero: "LATAM", etiqueta: "& proyectos globales", acento: true }
];


/* ==================================================================
   4. SERVICIOS
   ------------------------------------------------------------------
   El campo "icono" acepta una de estas palabras: retoque, modelado3d,
   ilustracion, branding, direccionArte, social
   ================================================================== */
const SERVICIOS = {
  indice: "02 / Disciplinas & Capacidades",
  titulo: "Lo que puedo hacer\npor tu marca",
  nota: "Servicios integrales de postproducción de imagen, visualización tridimensional y diseño de sistemas listos para despliegue comercial."
};

const LISTA_SERVICIOS = [
  {
    icono: "retoque",
    titulo: "Retoque Fotográfico High-End",
    texto: "Edición editorial para moda, belleza, modelos comerciales y fotografía de producto de lujo. Separación de frecuencias no destructiva, dodge & burn manual y limpieza de textura micro-dérmica.",
    tags: ["Photoshop 16-bit", "Skin Texture", "Color Grading"]
  },
  {
    icono: "modelado3d",
    titulo: "Modelado y Animación 3D",
    texto: "Renders hiperrealistas de producto, personajes, escenografías arquitectónicas y animación procedural en Blender y Cycles. Iluminación volumétrica y texturizado PBR minucioso.",
    tags: ["Blender 4.x", "Cycles / Octane", "Hard Surface"]
  },
  {
    icono: "ilustracion",
    titulo: "Ilustración Digital & Concept Art",
    texto: "Creación de universos visuales, retratos hiperrealistas, concept art sci-fi y keyframes visuales para campañas publicitarias, videojuegos y medios impresos de autor.",
    tags: ["Procreate", "Matte Painting", "Keyframes"]
  },
  {
    icono: "branding",
    titulo: "Identidad Visual & Branding",
    texto: "Sistemas de identidad gráfica corporativa, diseño tipográfico riguroso, manuales de marca y papelería corporativa premium (tarjetas de presentación, estampados y packaging).",
    tags: ["Brand Books", "Vector Art", "Luxury Stationery"]
  },
  {
    icono: "direccionArte",
    titulo: "Dirección de Arte & Compositing",
    texto: "Integración fotográfica de elementos CGI en escenarios reales, color matching milimétrico, iluminación coherente y dirección estética global para lanzamientos de producto.",
    tags: ["CGI Integration", "Lighting Match", "Master Compositing"]
  },
  {
    icono: "social",
    titulo: "Contenido para Campañas & Social",
    texto: "Formatos de impacto optimizados para Instagram, TikTok y cartelería digital exterior (OOH). Animaciones cortas en bucle, renders dinámicos y composiciones visuales con gancho inmediato.",
    tags: ["Motion Loops", "Social Assets", "High Engagement"]
  }
];


/* ==================================================================
   5. FONDOS CON IA (comparador antes / después)
   ================================================================== */
const FONDOS_IA = {
  indice: "04 / Innovación & Dirección de Arte",
  titulo: "MONTAJE Y EXTENSIÓN\n**DE FONDOS CON IA**",
  nota: "Transformación de tomas crudas en estudio a mundos cinematográficos hiperrealistas. Integro síntesis generativa de entornos mediante IA con recorte anatómico de precisión, renderizado de luz coincidente, corrección volumétrica y color grading publicitario.",

  antes: "imagenes/fondos-ia/antes.jpg",
  despues: "imagenes/fondos-ia/despues.jpg",
  etiquetaAntes: "Antes (raw estudio)",
  etiquetaDespues: "Después (escenografía IA + composite)",
  ayuda: "Arrastra el cursor o el deslizador central para comparar",
  piePersonalizado: "100% retoque & extensión en estudio BOG",

  fichaTitulo: "Ficha técnica • Producción virtual",
  metricas: [
    { etiqueta: "Tiempo de integración", valor: "48 horas vs 2 semanas", detalle: "Ahorro radical en scouts de locación, permisos y vuelos internacionales." },
    { etiqueta: "Resolución de salida", valor: "8K Master Pro / 300 DPI", detalle: "Apta para cartelería exterior OOH monumental y portadas impresas.", acento: true },
    { etiqueta: "Pipeline de trabajo utilizado", valor: "", detalle: "Compositing en Photoshop + generación de set en ComfyUI/Midjourney + iluminación volumétrica concordante." }
  ],
  chips: ["Photoshop", "AI Generative Fill", "Color Match", "Rim Light Extraction"],

  ctaTitulo: "¿Tienes fotos en ciclorama?",
  ctaTexto: "Envíame tus tomas de estudio crudas. Diseñaremos entornos de hiperlujo acordes con el relato de tu campaña publicitaria sin salir de la ciudad.",
  ctaBoton: "Cotizar set con IA",
  ctaEnlace: "whatsapp"
};


/* ==================================================================
   6. CATEGORÍAS DE LA GALERÍA
   ------------------------------------------------------------------
   La "clave" es la que usas en cada proyecto (campo categoria).
   Si una categoría no tiene proyectos, su botón se oculta solo.
   ================================================================== */
const CATEGORIAS = {
  modelado3d: "Animación 3D",
  retoque: "Retoque High-End",
  ilustracion: "Ilustración",
  branding: "Branding",
  fondosIA: "Montajes con Fondo IA"
};

const GALERIA = {
  indice: "03 / Galería Behance • Selección de Obras",
  titulo: "El Trabajo",
  notaBehance: "¿Deseas examinar más proyectos?",
  botonBehance: "Ver perfil completo en Behance"
};


/* ==================================================================
   7. PROYECTOS
   ------------------------------------------------------------------
   Para SUBIR UN TRABAJO NUEVO: copia un bloque completo { ... },
   pégalo al inicio de la lista (justo debajo de "const PROYECTOS = [")
   y cambia sus textos. El primero de la lista sale primero.

   CAMPOS
   titulo        (obligatorio) Nombre del proyecto.
   categoria     (obligatorio) modelado3d, retoque, ilustracion, branding o fondosIA.
   imagen        (obligatorio) Imagen principal, ej. "imagenes/mi-foto.jpg".
   etiqueta      Texto corto sobre la imagen, ej. "CGI / Blender".
   meta          Línea pequeña sobre categoría/cliente/año.
   descripcion   Texto largo que se lee en la ventana flotante.
   anio          Año del proyecto.
   herramientas  Programas usados.
   tamano        "normal" (por defecto) o "ancha" (ocupa el doble de ancho).
   galeria       Opcional. Más imágenes del mismo proyecto.
   enlace        Opcional. Enlace al proyecto completo (Behance, etc).
   ================================================================== */
const PROYECTOS = [

  {
    titulo: "Montajes",
    categoria: "fondosIA",
    imagen: "imagenes/galeria/montajes/montaje-1.svg",
    etiqueta: "Montaje con Fondo IA",
    meta: "Composite • Dirección de Arte • 2026",
    tamano: "ancha",
    descripcion: "Texto de ejemplo. Cuéntale a tu visitante qué toma original usaste, cómo generaste el entorno con IA y cómo integraste la luz y el color para que todo encajara.",
    anio: "2026",
    herramientas: "Photoshop, IA Generativa",
    galeria: [
      "imagenes/galeria/montajes/montaje-1-antes.svg"
    ]
  },
  {
    titulo: "Portadas Moda",
    categoria: "retoque",
    imagen: "imagenes/galeria/retoque/portadas-moda.jpg",
    etiqueta: "Retoque Editorial",
    meta: "Moda • Publicidad • 2026",
    descripcion: "Texto de ejemplo. Cuéntale a tu visitante qué hiciste en este proyecto: el encargo, el proceso de retoque y el resultado final.",
    anio: "2026",
    herramientas: "Photoshop",
    galeria: [
      "imagenes/galeria/retoque/portadas-moda-2.jpg",
      "imagenes/galeria/retoque/portadas-moda-3.jpg",
      "imagenes/galeria/retoque/portadas-moda-4.jpg",
      "imagenes/galeria/retoque/portadas-moda-5.jpg",
      "imagenes/galeria/retoque/portadas-moda-6.jpg"
    ],
    enlace: "https://www.behance.net/camilobarba"
  },
  {
    titulo: "Objeto en volumen — Producto 3D",
    categoria: "modelado3d",
    imagen: "imagenes/galeria/modelado3d/producto.svg",
    etiqueta: "CGI / Blender",
    meta: "Automotriz • Behance",
    descripcion: "Texto de ejemplo. Describe el modelo, la iluminación y los materiales que trabajaste.",
    anio: "2026",
    herramientas: "Blender, Cycles"
  },
  {
    titulo: "Diseño de Interior 3D",
    categoria: "modelado3d",
    imagen: "imagenes/galeria/modelado3d/archviz.svg",
    etiqueta: "Archviz 3D",
    meta: "Interiorismo • Blender",
    descripcion: "Texto de ejemplo. Habla de la iluminación volumétrica y las texturas PBR de la escena.",
    anio: "2025",
    herramientas: "Blender"
  },
  {
    titulo: "Retoque Modelo Femenino",
    categoria: "retoque",
    imagen: "imagenes/galeria/retoque/retoque-femenino.jpg",
    etiqueta: "Beauty Retouch",
    meta: "Beauty • High-End",
    descripcion: "Texto de ejemplo. Describe el trabajo de piel, color y luz.",
    anio: "2026",
    herramientas: "Photoshop",
    galeria: [
      "imagenes/galeria/retoque/retoque-femenino-2.jpg"
    ]
  },
  {
    titulo: "Prop 3D para videojuego",
    categoria: "modelado3d",
    imagen: "imagenes/galeria/modelado3d/prop-videojuego.svg",
    etiqueta: "Game Asset / 3D",
    meta: "Hard Surface",
    descripcion: "Texto de ejemplo. Cuenta el proceso de texturizado y el desgaste de bordes.",
    anio: "2025",
    herramientas: "Blender, Substance"
  },
  {
    titulo: "Retrato — Dibujo Realismo",
    categoria: "ilustracion",
    imagen: "imagenes/galeria/ilustracion/retrato.svg",
    etiqueta: "Ilustración Realista",
    meta: "Arte Digital • Retrato",
    descripcion: "Texto de ejemplo. Cuenta el proceso creativo detrás de esta ilustración.",
    anio: "2025",
    herramientas: "Procreate"
  },
  {
    titulo: "Retoque Masculino",
    categoria: "retoque",
    imagen: "imagenes/galeria/retoque/retoque-masculino.jpg",
    etiqueta: "Retoque Comercial",
    meta: "Editorial Publicitaria",
    descripcion: "Texto de ejemplo. Describe la corrección cromática y el equilibrio de tonos.",
    anio: "2024",
    herramientas: "Photoshop",
    galeria: [
      "imagenes/galeria/retoque/retoque-masculino1.jpg",
      "imagenes/galeria/retoque/retoque-masculino.jpg"
    ]
  },
  {
    titulo: "Identidad de Marca",
    categoria: "branding",
    imagen: "imagenes/galeria/branding/identidad.svg",
    etiqueta: "Identidad de Marca",
    meta: "Branding • Papelería",
    descripcion: "Texto de ejemplo. Resume el encargo del cliente y la solución de diseño.",
    anio: "2024",
    herramientas: "Illustrator"
  }

];


/* ==================================================================
   8. MÉTODO Y GARANTÍAS
   ================================================================== */
const METODO = {
  indice: "05 / Método • Rigor Técnico",
  titulo: "Cada Proyecto\nEs Distinto",
  parrafo: "No trabajo con plantillas genéricas. Cada sesión publicitaria y cada modelo 3D responden a una necesidad estratégica: comunicar potencia de marca, textura tangible y emoción sin distorsión visual.",
  garantiaTitulo: "Garantía de flujo",
  garantiaTexto: "Comunicación transparente directa por Slack, WhatsApp o correo. Actualizaciones diarias mediante capturas de viewport y pases preliminares en baja para validar dirección antes del render final."
};

const LISTA_METODO = [
  { icono: "reloj", numero: "01 / Respuesta", titulo: "Cotización en < 24h", texto: "Respuesta ágil con desglose pormenorizado de etapas, plazos de entrega y presupuesto adaptado a la envergadura del proyecto." },
  { icono: "calidad", numero: "02 / Calidad", titulo: "Entrega Máxima Resolución", texto: "Archivos en TIFF / PSD a 8 o 16-bit en espacio Adobe RGB / ProPhoto, y renders 3D en EXR multicapa o 4K listos para impresión monumental." },
  { icono: "escudo", numero: "03 / Legalidad", titulo: "Derechos de Uso Claros", texto: "Licenciamiento comercial transparente y sin sorpresas para medios digitales, redes, publicidad exterior o empaques internacionales." },
  { icono: "revision", numero: "04 / Soporte", titulo: "Rondas de Corrección", texto: "Revisiones estructuradas incluidas en cada fase para asegurar que la paleta, la luz y los detalles coincidan con tus expectativas de marca." }
];


/* ==================================================================
   9. PREGUNTAS FRECUENTES
   ================================================================== */
const FAQ = {
  indice: "06 / Preguntas Frecuentes",
  titulo: "Antes de Escribirme",
  nota: "Respuestas directas sobre plazos, formatos técnicos y logística de colaboración remota o presencial en Bogotá."
};

const LISTA_FAQ = [
  {
    pregunta: "¿Cuánto tiempo toma un render 3D o retoque de campaña?",
    respuesta: "El tiempo varía según la complejidad. Retoques editoriales de retrato o producto usualmente toman de 24 a 72 horas por fotografía seleccionada. Proyectos de modelado 3D, texturizado PBR e iluminación arquitectónica o automotriz requieren de 5 a 12 días laborables con previsualizaciones intermedias."
  },
  {
    pregunta: "¿Cómo se realiza el flujo de revisiones y feedback?",
    respuesta: "Trabajamos con hitos claros: primero moodboard y referencias luminosas, luego un pase preliminar de modelado en baja resolución o prueba de corrección cromática, y por último el render final y color grading. Incluyo dos rondas de ajustes finos en cada propuesta."
  },
  {
    pregunta: "¿Trabajas con clientes fuera de Bogotá o internacionales?",
    respuesta: "Sí, más del 50% de mis colaboraciones se realizan de manera 100% remota con estudios y clientes en Estados Unidos, México, España y diversos países de Latinoamérica, coordinando entregas por Google Drive corporativo o servidores FTP seguros."
  },
  {
    pregunta: "¿Qué especificaciones técnicas y formatos finales entregas?",
    respuesta: "Para fotografía: archivos TIFF a 16 bits sin compresión con capas de ajuste preservadas (a solicitud) y versiones JPEG optimizadas para web sRGB. Para 3D: renders hasta 8K en formato EXR / PNG de 32-bit float, además de archivos nativos de Blender con texturas empaquetadas si se acuerda en el contrato."
  },
  {
    pregunta: "¿Cómo actualizar y publicar nuevos proyectos en este portafolio?",
    respuesta: "Este sitio está construido con una arquitectura modular estática lista para GitHub Pages. Nuevos proyectos se agregan copiando un bloque en el archivo contenido.js y subiendo la imagen a la carpeta imagenes — revisa la GUIA.md incluida para el paso a paso."
  }
];


/* ==================================================================
   10. CONTACTO FINAL
   ================================================================== */
const CTA = {
  antetitulo: "¿Tienes una visión en mente?",
  titulo: "Llevo tu próxima idea\n**a otra dimensión**",
  parrafo: "Disponible para proyectos comerciales de 3D, campañas publicitarias de retoque y dirección de arte visual. Escríbeme y evaluemos el alcance de tu proyecto hoy mismo.",
  botonWhatsapp: "WhatsApp directo",
  botonEmail: "Email corporativo",
  canalesTitulo: "Canales oficiales"
};


/* ==================================================================
   11. PIE DE PÁGINA
   ================================================================== */
const PIE = {
  descripcion: "3D Animator, Illustrator & High-End Digital Retoucher explorando profundidad visual, precisión de luz y oficio técnico.",
  derechos: "© 2026 Camilo Andrés Barba. Todos los derechos reservados.",
  credito: "Crafted in Bogotá • 3D & Digital Art Studio"
};

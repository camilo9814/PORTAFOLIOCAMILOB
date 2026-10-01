# Guía para publicar y actualizar tu portafolio

Este portafolio usa el estilo **"Obsidian & Cobalt Editorial"**: fondo negro
obsidiana, azul cobalto eléctrico como acento y tipografía editorial en
mayúsculas. Todo está pensado para que **solo toques dos cosas**: el archivo
`contenido.js` (todos los textos) y la carpeta `imagenes` (tus fotos y renders).

## Qué contiene la carpeta

| Archivo | Para qué sirve | ¿Lo edito? |
|---|---|---|
| `index.html` | Estructura de la página | Casi nunca (solo el título, ver más abajo) |
| `style.css` | Colores, tipografía y diseño | No |
| `script.js` | Menú, comparador, filtros, modal, acordeón | No |
| **`contenido.js`** | **Tus datos, textos, servicios y proyectos** | **Sí** |
| **`imagenes/`** | **Tus imágenes, organizadas en subcarpetas** | **Sí** |

### Cómo están organizadas tus imágenes

Cada sección de la web tiene su propia subcarpeta dentro de `imagenes/`, para
que sepas exactamente dónde subir cada foto nueva:

```
imagenes/
├── hero/              → las 3 fotos de la vitrina de inicio
├── sobre-mi/          → tu retrato de la sección "Sobre mí"
├── fondos-ia/         → el "antes" y "después" del comparador de Fondos IA
└── galeria/           → TODOS los trabajos de la sección "El Trabajo"
    ├── retoque/
    ├── modelado3d/
    ├── ilustracion/
    ├── branding/
    └── montajes/      → la categoría "Montajes con Fondo IA"
```

Cuando quieras agregar un trabajo nuevo a la galería, sube la foto a la
subcarpeta de `imagenes/galeria/` que corresponda a su categoría (o crea una
subcarpeta nueva dentro de `galeria/` si prefieres mantenerlas separadas por
cliente o proyecto — el nombre de la carpeta no afecta el filtro, eso lo
controla el campo `categoria` en `contenido.js`). Así es mucho más fácil
encontrar y reemplazar fotos desde GitHub sin tener decenas de archivos
sueltos en una sola carpeta.

---

## Parte 1. Probarlo en tu computador

1. Descomprime el ZIP en una carpeta.
2. Haz doble clic en `index.html`. Se abre en tu navegador con contenido de ejemplo.
3. Necesitas internet solo para que se descarguen las tipografías (Syne, Hanken Grotesk y Space Grotesk).

## Parte 2. Personalizar antes de publicar

Abre `contenido.js` con el Bloc de notas (Windows), TextEdit en modo texto
plano (Mac), o mejor aún con [Visual Studio Code](https://code.visualstudio.com/)
(gratis), que te marca los errores de comillas y comas mientras escribes.

El archivo está dividido en 11 bloques numerados, cada uno con su comentario
explicando qué es cada campo:

1. **PERFIL** — tu nombre, correo, WhatsApp, Instagram, Behance y ubicación.
2. **HERO** — el titular de inicio y las 3 imágenes de la vitrina.
3. **PERFIL_SECCION / CIFRAS** — el bloque "Sobre mí" y las 4 cifras.
4. **SERVICIOS / LISTA_SERVICIOS** — tus 6 tarjetas de servicios.
5. **FONDOS_IA** — el comparador antes/después y su ficha técnica.
6. **CATEGORIAS / GALERIA** — los filtros y el título de "El Trabajo".
7. **PROYECTOS** — la lista de trabajos (ver Parte 5 para agregar uno nuevo).
8. **METODO / LISTA_METODO** — las 4 tarjetas de garantías.
9. **FAQ / LISTA_FAQ** — las preguntas frecuentes.
10. **CTA** — el bloque final de contacto.
11. **PIE** — el pie de página.

Antes de publicar, como mínimo:
- Cambia el correo en `PERFIL.email` (línea 28, dice `tucorreo@ejemplo.com`).
- Cambia el número de WhatsApp en `PERFIL.whatsapp` (línea 29). El formato es
  `https://wa.me/` seguido del código de país y tu número, sin espacios ni `+`.
- Revisa tus enlaces de Instagram y Behance.

### La convención `**texto**` y el salto de línea

En los títulos grandes (`HERO.titulo`, `PERFIL_SECCION.titulo`,
`FONDOS_IA.titulo`, `CTA.titulo`) vas a ver cosas como:

```js
titulo: "DONDE LA FORMA\n**Y LA LUZ COBRAN** VIDA",
```

- `\n` empieza una línea nueva.
- El texto entre `**dos asteriscos**` se pinta en el color de acento (azul
  a lavanda). El resto se queda en blanco.

Puedes mover el `\n` y los `**...**` donde quieras, solo no los borres sin
querer.

---

## Parte 3. Crear el repositorio en GitHub

1. Entra a **github.com** y crea tu cuenta si no la tienes.
2. Pulsa **+ → New repository**.
3. Nómbralo `tunombredeusuario.github.io` (en minúsculas, reemplazando por tu
   usuario real) para que tu web quede en esa dirección tan limpia. Si usas
   otro nombre, tu web quedará en `https://tunombredeusuario.github.io/ese-nombre/`.
4. Marca **Public** y **Add a README file**, luego **Create repository**.

## Parte 4. Subir los archivos y activar GitHub Pages

1. Dentro del repositorio, pulsa **Add file → Upload files**.
2. Arrastra el **contenido** de la carpeta descomprimida (no el ZIP ni la
   carpeta exterior): `index.html`, `style.css`, `script.js`, `contenido.js`
   y la carpeta `imagenes`. `index.html` debe quedar en la raíz.
3. Pulsa **Commit changes**.
4. Ve a **Settings → Pages**.
5. En **Source** elige **Deploy from a branch**, luego rama **main** y
   carpeta **/(root)**, y pulsa **Save**.
6. Espera 1 a 3 minutos y recarga esa página: aparecerá **Your site is live
   at…** con tu enlace público.

---

## Parte 5. Cada vez que quieras subir un trabajo nuevo

### Paso A. Prepara la imagen
- Nombre en minúsculas, sin espacios ni tildes: `retoque-sami.jpg`.
- JPG o WebP, 1600 a 2400 px en el lado largo, y menos de 1 MB.
- Las piezas "normales" de la galería se recortan en formato 4:5 (vertical);
  las "anchas", en 16:10 (horizontal). En la ventana flotante se ve completa.

### Paso B. Sube la imagen
En tu repositorio, entra a **imagenes → galeria** y abre la subcarpeta de la
categoría (por ejemplo **retoque**, **modelado3d**, **montajes**...). Ahí
pulsa **Add file → Upload files**, arrastra tu imagen y pulsa **Commit
changes**. Si no existe la subcarpeta que necesitas, puedes crearla escribiendo
`galeria/nombre-carpeta/tu-imagen.jpg` en el cuadro de nombre al subir el
archivo — GitHub crea la carpeta automáticamente.

### Paso C. Agrega el proyecto en `contenido.js`
1. Abre **contenido.js** en GitHub y pulsa el ícono del **lápiz** para editar.
2. Busca `const PROYECTOS = [` (bloque 7).
3. Pega este bloque justo debajo, como primer elemento de la lista:

```js
  {
    titulo: "Nombre de tu proyecto",
    categoria: "retoque",              // modelado3d, retoque, ilustracion o branding
    imagen: "imagenes/retoque-sami.jpg",
    etiqueta: "Retoque Editorial",     // texto corto sobre la imagen
    meta: "Moda • Publicidad • 2026",  // línea pequeña
    descripcion: "Qué hiciste, para quién y cómo.",
    anio: "2026",
    herramientas: "Photoshop"
  },
```

4. Pulsa **Commit changes**, espera unos 2 minutos y recarga con
   Ctrl + Shift + R (o Cmd + Shift + R en Mac).

### Campos opcionales

```js
    tamano: "ancha",          // ocupa el doble de ancho en la cuadrícula (por defecto: normal)
    galeria: ["imagenes/foto-2.jpg", "imagenes/foto-3.jpg"],  // más fotos del mismo proyecto
    enlace: "https://www.behance.net/tu-proyecto"              // botón "Ver proyecto completo"
```

### Para borrar un proyecto
Borra desde su llave de apertura `{` hasta su llave de cierre `},` (con la
coma incluida). Puedes borrar también la imagen de la carpeta `imagenes`.

### Para agregar o renombrar una categoría
En el bloque 6 (`const CATEGORIAS`), agrega o cambia una línea como
`modelado3d: "Animación 3D",`. La palabra de la izquierda (antes de los dos
puntos) es la que usas en el campo `categoria` de cada proyecto; el texto de
la derecha es lo que ve el visitante. Una categoría sin proyectos oculta su
botón automáticamente.

### Para agregar o quitar un servicio, una garantía o una pregunta frecuente
Funciona igual que con los proyectos: son listas (`LISTA_SERVICIOS`,
`LISTA_METODO`, `LISTA_FAQ`) donde cada elemento va entre `{ }` separado por
comas. Copia un bloque existente, cambia el texto y pégalo donde quieras que
aparezca.

---

## Si algo sale mal

| Síntoma | Causa probable y solución |
|---|---|
| La página muestra un aviso diciendo qué bloque falta | Falta o sobra una comilla, coma o llave en el último cambio. El aviso te dice justo qué bloque (por ejemplo `PROYECTOS`) quedó mal formado — revisa ese bloque o vuelve a la versión anterior desde el historial de GitHub. |
| Un proyecto muestra "No se encontró la imagen" | El nombre del archivo no coincide exactamente (mayúsculas/minúsculas incluidas) o falta el `imagenes/` delante. |
| El cambio no aparece | Espera 1 a 2 minutos y recarga con Ctrl + Shift + R. |
| Sale un error 404 al abrir el enlace | `index.html` no quedó en la raíz del repositorio, o falta activar Pages (repite el paso 5 de la Parte 4). |
| Un filtro de categoría no aparece | Ninguno de tus proyectos usa esa categoría todavía; se oculta sola y vuelve a aparecer en cuanto agregues uno. |
| El comparador de "Fondos IA" no se mueve | Revisa que `FONDOS_IA.antes` y `FONDOS_IA.despues` apunten a imágenes que sí existen en la carpeta `imagenes`. |

## Dominio propio (opcional)
Si más adelante quieres `tunombre.com` en vez de `tunombre.github.io`,
cómpralo en cualquier registrador y conéctalo en **Settings → Pages → Custom
domain**. La web funciona igual de bien sin él.

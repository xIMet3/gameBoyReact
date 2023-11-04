##### <span style= "color:#004e99">Rediseño del Proyecto GameBoy Pocket con React y Css.

<img src="https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" data-canonical-src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/ecd0d6fc3da2be7f3a92b0a5bb2d8a5ed5a97fba21dc59ae638caa548d79d88d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a61766173636970742d4546443831443f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" style="max-width: 100%;"> <img src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS3" style="max-width: 100%;">

<br>

![Foto-final-proyecto](./Img/imgFinal.png)

<br><br><br><br>

# <span style= "color:#ff0000"> Contenido:
<br>

- ### [Descripción del proyecto 📋](#Descripción-del-proyecto)
- ### [Acerca de 🎮](#Acerca)
- ### [Desarrollo 🖥️](#Desarrollo)
- ### [Instalación 🔧](#Instalación)
- ### [Funcionamiento 📖](#Funcionamiento)
- ### [Responsive📱](#Responsive)
- ### [Repositorio GitHub 💾](#Repositorio)
- ### [Linkedin](#Linkedin)


<br><br><br><br>

### <span style="color:#d11911">Descripción del proyecto 
<br>

##### <span style="font-family:Aria-lNarrow">Este proyecto se basa en una réplica de la GameBoy Pocket utilizando React y Css.

<br><br>

### <span style= "color:#d11911">Acerca de<a id="Acerca"></a>


#### <span style="font-family:Aria-lNarrow">La GameBoy Pocket fué fabricada por Nintendo y lanzada al mercado en 1996 en Japón y EEUU y en 1997 en Europa. Este modelo es una modificación de la Game Boy clásica. Comparada con el modelo clásico, la Pocket tenía un tamaño mucho más pequeño.

![Caja-GameBoy](./Img/gameBoyOriginal4.jpeg)

<br><br>

### <span style= "color:#d11911">Desarrollo<a id="Desarrollo"></a>

<br>

####  <span style="font-family:Aria-lNarrow">  Para este proyecto se ha utilizado React con JavaScript y CSS, también contiene algunos gifs descargados de internet.

#### <span style="font-family:Aria-lNarrow">El cuerpo de la consola esta dividido en 3 secciones (arriba, centro y abajo) para así dividir los elementos principales entre la pantalla y las zonas de botones. Para el altavoz he usado una cuadricula de 7x7, a cada celda le he dado forma de círculo para imitar los agujeros del altavoz y he dividido los círculos segun se muestren, algunos no se muestran, algunos color negro y otros del color de la consola y así lograr imitar la forma de rombo que tiene el altavoz.

#### <span style="font-family:Aria-lNarrow">Absolutamente todo esta echo a mano por mi. Alguno botones son funcionales y estan preparados para interactuar con la consola.

<br>

### <span style= "color:#d11911">Instalación
<a id="Instalación"></a>

##### <span style="font-family:Aria-lNarrow">Para instalar en local seguir los siguientes pasos: 

###### <span style="font-family:Aria-lNarrow">1º- Clonar el repositorio.
###### <span style="font-family:Aria-lNarrow">2º- $ npm install
###### <span style="font-family:Aria-lNarrow">3º- $ npm run dev
###### <span style="font-family:Aria-lNarrow">Mostrará esto en la terminal :


<img src="./Img/localhost.png" alt="LocalHost" style="width: 300px;">

###### <span style="font-family:Aria-lNarrow">4º- Ctrl + click en la dirección local que se muestra en azul.

###### <span style="font-family:Aria-lNarrow">Se abrirá el navegador con el contenido del proyecto.

<br>

### <span style= "color:#d11911">Funcionamiento
<a id="Funcionamiento"></a>

#### <span style="font-family:Aria-lNarrow">Para empezar a interactuar con la consola :

##### <span style="font-family:Aria-lNarrow">1º- Pulsar el botón de encender (Parte superior izquierda), reproduce un gif con la presentación de GAMEBOY además de encenderse el led simulando que la consola esta ON.

![apagada](./Img/apagada.png){ width=290 } ![encendida](./Img/gameBoyEncendida.png){ width=300 }

<!-- <img src="./Img/apagada.png" alt="Consola encendida" style="width: 289.5px;"> 
<img src="./Img/gameBoyEncendida.png" alt="Consola encendida" style="width: 300px;"> -->


##### <span style="font-family:Aria-lNarrow">2º- A continuación se mostrará una lista de juegos.

<img src="./Img/listaDeJuegos.png" alt="Texto Alternativo" style="width: 400px;">

##### <span style="font-family:Aria-lNarrow">3º- Selecciona el juego deseado y reproducirá un pequeño gif del juego en cuestión. Soy consciente de que la pantalla de la GameBoy Pocket no tiene color, aún así he añadido gifs a color.

![superMario](./Img/superMario.png){ width=200 } ![tetris](./Img/tetris.png){ width=200 } ![zelda](./Img/zelda.png){ width=200 }

![pokemon](./Img/pokemonAmarillo.png){ width=200 } ![donkeyKong](./Img/donkeyKong.png){ width=200 } ![metroid](./Img/metroid.png){ width=200 }


<!-- <img src="./Img/superMario.png" alt="Texto Alternativo" style="width: 200px;">
<img src="./Img/tetris.png" alt="Texto Alternativo" style="width: 200px;">
<img src="./Img/zelda.png" alt="Texto Alternativo" style="width: 200px;">
<img src="./Img/pokemonAmarillo.png" alt="Texto Alternativo" style="width: 200px;">
<img src="./Img/donkeyKong.png" alt="Texto Alternativo" style="width: 200px;">
<img src="./Img/metroid.png" alt="Texto Alternativo" style="width: 200px;"> -->


##### <span style="font-family:Aria-lNarrow">4º- Al volver a presionar en el boton de encendido, apagará la consola y el led volverá a apagarse junto con la pantalla y la consola retornará a su estado inicial.

<br>

### <span style= "color:#d11911">Responsive<a id="Responsive"></a>

<br>

#### <span style="font-family:Aria-lNarrow">Es absolutamente responsive. Todo con MediaQuerys, nada de Bootstrap.

<br>

<img src="./Img/responsive.png" alt="Texto Alternativo" style="width: 500px;">

<br><br>

### <span style= "color:#d11911">Repositorio GitHub
<a id="Repositorio"></a>

#### https://github.com/xIMet3/gameBoyReact

### <span style= "color:#d11911">Linkedin
<a id="Linkedin"></a>

#### https://www.linkedin.com/in/joaquin-ruiz-padr%C3%B3s-81906b272/
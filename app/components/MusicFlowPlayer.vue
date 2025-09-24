<template>
  



<div class="carousel carousel-center w-full space-x-4 p-4 items-center">
  <div class="carousel-item" id="item0">
    <div class="">
      <div class="text-center mx-auto w-fit">
          <img src="/music/playlist.png" class="w-40 -mb-4" ref="animElem">
      </div>
      <div class="bg-[#181c24] rounded-2xl shadow-lg w-80 mx-auto p-4 flex flex-col items-center border-2 border-[#1d2627]">
        <div class="w-full p-10 text-xl">
          Explora algunas de nuestras listas de reproducción de ejemplo diseñadas para diferentes ambientes y tipos de negocios.
        </div>
        <div><small class="text-sky-300">Haz clic en los botones o utiliza el scroll para navegar entre ellas.</small></div>
      </div>
    </div>
  </div>
  <div class="carousel-item" id="item1">
      <Playlist :tracks="tracksCafeteria" :is-track-playing="isTrackPlaying" :handle-play-click="handlePlayClick" title="Relax en la Cafetería" />
  </div>
  <div class="carousel-item" id="item2">
      <Playlist :tracks="tracksGym" :is-track-playing="isTrackPlaying" :handle-play-click="handlePlayClick" title="Energía para el Gym" />

  </div>
  <div class="carousel-item" id="item3">
      <Playlist :tracks="tracksTienda" :is-track-playing="isTrackPlaying" :handle-play-click="handlePlayClick" title="De compras en la Tienda" />

  </div>
  <div class="carousel-item" id="item4">
      <Playlist :tracks="tracksRestaurante" :is-track-playing="isTrackPlaying" :handle-play-click="handlePlayClick" title="Ritmos suaves para Restaurante" />

  </div>
  <div class="carousel-item" id="item5">
    <div>
      <div class="text-center mx-auto w-fit">
          <img src="/music/playlist.png" class="w-40 -mb-4" ref="animElem">
      </div>
      <div class="bg-[#181c24] rounded-2xl shadow-lg w-80 mx-auto p-4 flex flex-col items-center border-2 border-[#1d2627]">
        <div class="w-full p-10 text-xl">
          Contáctanos y conóce más sobre nuestros planes y cómo podemos ayudarte a ambientar tu negocio con música de calidad y sin complicaciones.
        </div>
      </div>
    </div>
  </div>

</div>


<div class="flex w-full justify-center gap-2 py-2">
  <a href="#item1" class="btn btn-outline btn-info">Cafetería</a>
  <a href="#item2" class="btn btn-outline btn-info">Gym</a>
  <a href="#item3" class="btn btn-outline btn-info">Tienda</a>
  <a href="#item4" class="btn btn-outline btn-info">Restaurante</a>
</div>




  <MusicFlow
    :hidePlaylistPopup="true"
    :options="{
        height: 32,
        waveColor: '#ffffff',
        progressColor: '#0688bf',
        cursorColor: '#0fbce3',
        cursorWidth: 6,
        barWidth: 4,
        barGap: 4,
        barRadius: 7,
        barHeight: 0.65,
        minPxPerSec: 0,
        autoScroll: false,
        autoCenter: false,
        hideScrollbar: false,
        interact: true,
        autoplay: true
    }"
  />
</template>

<script setup lang="ts">
import { MusicFlow } from "vue-music-flow";
import type { TMusicFlow } from "vue-music-flow";
const { onPlayAsPlaylist, isTrackPlaying } = useMusicFlow();

function handlePlayClick(track: TMusicFlow, tracks: TMusicFlow[]) {
  console.debug('Play button clicked:', track);
  console.log(tracks)
  onPlayAsPlaylist(tracks, track);
}



const cafeteriaSong = {
  artwork: "/music/cafeteria.png",
  album: "Relax en la Cafetería",
  artist: 'Muusica.com',
}


const tracksCafeteria = [
  { ...cafeteriaSong,
    id: 1,
    audio: "/music/CoffeeKiss.mp3",
    title: "Coffee kiss",
    original:{
      duration: "02:05",
      genre: "Ideal para crear un ambiente relajado y moderno. Los sintetizadores suaves y las voces etéreas se mezclan perfectamente con el aroma del café."
    }
  },
  {
    ...cafeteriaSong,
    id: 2,
    audio: "/music/PassportStamps.mp3",
    title: "Passport Stamps",
    original:{
      genre: "Perfecta para un fondo agradable que no distrae. Su ritmo suave y guitarras acústicas invitan a una charla tranquila y relajada.",
      duration: "02:53"
    }
  },
  {
    ...cafeteriaSong,
    id: 3,
    audio: "/music/FriendsforLife.mp3",
    title: "Friends for Life",
    original:{
      genre: "Una melodía optimista y acogedora. La guitarra acústica y las voces femeninas añaden un toque de calidez, haciendo que los clientes se sientan como en casa.",
      duration: "02:10"
    }
  },
];

const gymSong = {
  artwork: "/music/gym.png",
  album: "Energía para el Gym",
  artist: 'Muusica.com',
}


const tracksGym = [
  { ...gymSong,
    id: 4,
    audio: "/music/gymPedalToTheMetal.mp3",
    title: "Pedal to the metal",
    original:{
      duration: "01:30",
      genre: "Energía pura y ritmo incesante. El bajo potente y los sintetizadores motivadores son perfectos para mantener alta la adrenalina durante el ejercicio."
    }
  },
  {
    ...gymSong,
    id: 5,
    audio: "/music/gymBuildItUp.mp3",
    title: "Build it up",
    original:{
      genre: "Ritmo progresivo y enérgico que se construye para el clímax del entrenamiento. Ideal para la parte más intensa de la rutina.",
      duration: "02:55"
    }
  },
  {
    ...gymSong,
    id: 6,
    audio: "/music/gymAGanar.mp3",
    title: "A ganar",
    original:{
      genre: "Una melodía vibrante y motivacional. Su ritmo constante y su toque de indie pop son un gran impulso para alcanzar tus metas de fitness.",
      duration: "02:08"
    }
  },
];

const tiendaSong = {
  artwork: "/music/tienda.png",
  album: "De compras en la Tienda",
  artist: 'Muusica.com',
}
const tracksTienda: TMusicFlow[] = [
  { ...tiendaSong,
    id: 10,
    audio: "/music/tiendaVamosDeCompras.mp3",
    title: "Vamos de Compras",
    original:{
      duration: "02:34",
      genre: "Múltiples géneros, alegre, ritmo bailable. Música refrescante y versátil que saca lo positivo de tus clientes."
    }
  },
  {
    ...tiendaSong,
    id: 11,
    audio: "/music/tiendaCasaNueva.mp3",
    title: "Casa Nueva",
    original:{
      duration: "03:01",
      genre: "Contemplativa y moderna de ritmo suave, que invita a pasar el tiempo en tu negocio, no sólo disfrutando de tus productos sino también del ambiente."
    }
  },
  {
    ...tiendaSong,
    id: 12,
    audio: "/music/tiendaTardeDeAmigos.mp3",
    title: "Tarde de Amigos",
    original:{
      duration: "02:47",
      genre: "Alegría que se traduce en buen ánimo para tus clientes. Ritmo suave y melodías amigables que crean un ambiente acogedor."
    }
  },
];

const restauranteSong = {
  artwork: "/music/restaurante.png",
  album: "Ritmos suaves para Restaurante",
  artist: 'Muusica.com',
}


const tracksRestaurante = [
  { ...restauranteSong,
    id: 7,
    audio: "/music/restauranteUnaNocheMas.mp3",
    title: "Una Noche Más",
    original:{
      duration: "02:01",
      genre: "Un toque de elegancia y pasión latina. Su ritmo lento y sensual crea un ambiente íntimo y sofisticado, perfecto para una cena romántica."
    }
  },
  {
    ...restauranteSong,
    id: 8,
    audio: "/music/restauranteLateNight.mp3",
    title: "Late Night",
    original:{
      duration: "03:55",
      genre: "Sonido lounge y sofisticado, ideal para cenas tardías. Crea una atmósfera relajada y chic, permitiendo a los clientes disfrutar de una experiencia memorable."
    }
  },
  {
    ...restauranteSong,
    id: 9,
    audio: "/music/restauranteLaConoci.mp3",
    title: "La Conocí",
    original:{
      duration: "02:25",
      genre: "Una balada acústica suave y melódica. Perfecta para un ambiente tranquilo, facilitando la conversación mientras los clientes disfrutan de la comida."
    }
  },
];
</script>

<style >
.vue-music-flow {
    --mw-color-mw-primary-dark: #00264d;
    --mw-color-mw-primary: #191e26;
    --mw-color-mw-secondary: transparent;
    --mw-color-mw-primary-hover: #0474ac;
    --mw-color-mw-primary-active: #0fbce3;
    --mw-color-mw-primary-typography: #e3e9eb;
    --mw-color-mw-secondary-typography: #329dbc;
    --scroll-bar-background-light: #f8fafc;
    --scroll-bar-background: #16243c;
    --scroll-bar-slider: #456282;
}
.vue-music-flow > div {
	padding: 10px 14px;
}
.vue-music-flow > div > div:nth-child(1) {
	padding: 1px 10px;
	border-radius: 10px;
  border: 2px #193144 solid;
}

</style>
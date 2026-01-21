<template>
  <div class="mx-auto w-full pt-40 bg-radial-[at_50%_75%] from-blue-500/50 to-blue-500/0 relative border-b-1 border-blue-500 shadow-2xl shadow-slate-500/40">
    <MuusicaLogo onlylogo />

    <div class="max-w-full md:max-w-3xl mx-auto pb-20 px-10 md:px-0">
      <h1 class="text-4xl md:text-6xl leading-tight capitalize font-second font-bold text-center mb-6">
        Múusica para que tu
        <span
          class="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 dark:from-blue-500 dark:via-cyan-400 dark:to-indigo-400 inline-block text-transparent bg-clip-text">
          Negocio
        </span>
        no deje de sonar.
      </h1>
      <p class="my-6 text-lg md:text-xl font-second text-center text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Canciones con licencia para ambientar tu negocio, sin pagar cuotas excesivas a disqueras o asociaciones de
        gestión.
      </p>

      <!-- Animated DJ Sprite -->
      <div class="flex justify-center my-12">
        <div class="sprite-animation drop-shadow-2xl" title="DJ Animation"></div>
      </div>

      <div class="flex gap-4 flex-wrap justify-center items-center mt-8">
        <a href="https://play.muusica.com/"
           class="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Quiero más información
        </a>
        <a href="https://play.muusica.com/"
           class="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          Prueba gratis
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </a>
      </div>
    </div>

  
    <section class="embla w-full h-full absolute top-0 bottom-0 left-0 right-0 -z-10 opacity-20 dark:opacity-10">
      <div class="embla__viewport" ref="emblaRef">
          <div class="embla__container">
            <div class="embla__slide" style="background-image: url('/assets/banner/f1.webp');"></div>
            <div class="embla__slide" style="background-image: url('/assets/banner/f2.webp');"></div>
            <div class="embla__slide" style="background-image: url('/assets/banner/f3.webp');"></div>
            <div class="embla__slide" style="background-image: url('/assets/banner/f4.webp');"></div>
            <div class="embla__slide" style="background-image: url('/assets/banner/f5.webp');"></div>
            
          </div>
        </div>
      </section>


      <div class="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 backdrop-blur-sm text-center text-white py-4 px-6">
        <p class="text-sm md:text-base font-medium max-w-4xl mx-auto">
          ✓ Ambientaciones musicales sin regalías ni problemas de derechos de autor
          <span class="hidden md:inline">·</span>
          <span class="block md:inline md:ml-2">Playlists diseñadas profesionalmente con uso legal garantizado</span>
        </p>
      </div>

  </div>




</template>



<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

const [emblaRef] = emblaCarouselVue(
  { loop: true },
  [
    Fade(),
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]
)
</script>


<style scoped>
.embla {
  margin: auto;
  overflow: hidden;
  height: 100%;
  --slide-height: 100%;
  --slide-size: 100%;
}

.embla__viewport {
  overflow: hidden;
  height: 100%;
}

.embla__container {
  position: relative;
  height: 100%;
  width: 100%;
}

.embla__slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: kenburns 14s ease-in-out infinite;
}

@keyframes kenburns {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

/* DJ Sprite Animation */
.sprite-animation {
  width: 154px; /* 370/480 * 200 = 154.17px para mantener aspect ratio */
  height: 200px; /* Altura reducida para mejor proporción en el diseño */
  background-image: url('/assets/spritessm.png');
  background-size: auto 200px; /* Escalar a altura de 200px */
  background-repeat: no-repeat;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  animation: sprite-frames 1.8s steps(18) infinite;
  transition: transform 0.3s ease;
}

.sprite-animation:hover {
  transform: scale(1.05);
}

@keyframes sprite-frames {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -2775px 0px; /* 6663px * (200/480) = 2775.625px */
  }
}

</style>
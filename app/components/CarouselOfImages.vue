<template>
  <div class="relative overflow-hidden">
    <!-- Section Header -->
    <div class="text-center mb-16 px-6">
      <h2 class="text-4xl md:text-5xl font-bold font-second mb-4">
        Ambienta tu negocio con música de calidad
      </h2>
      <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Profesionales tocando en espacios comerciales reales
      </p>
    </div>

    <!-- Modern Bento Grid Gallery -->
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="grid grid-cols-2 md:grid-cols-6 gap-3 auto-rows-[200px]">
        <!-- Row 1: Large featured 3x2 + 2 vertical 1x2 + 1 square -->
        <div class="col-span-2 md:col-span-3 row-span-2 relative overflow-hidden rounded-2xl shadow-xl">
          <img
            src="/assets/carousel/muusica1.webp"
            alt="Músicos en vivo en negocio"
            class="w-full h-full object-cover kenburns-1"
          />
        </div>

        <div class="row-span-2 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica2.webp"
            alt="Orquesta en sala de espera"
            class="w-full h-full object-cover kenburns-2"
          />
        </div>

        <div class="row-span-2 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica3.webp"
            alt="Músicos en spa"
            class="w-full h-full object-cover kenburns-3"
          />
        </div>

        <div class="row-span-1 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica9.webp"
            alt="DJ en gimnasio"
            class="w-full h-full object-cover kenburns-4"
          />
        </div>

        <!-- Row 2 continues -->
        <div class="row-span-1 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica10.webp"
            alt="Banda en consultorio"
            class="w-full h-full object-cover kenburns-5"
          />
        </div>

        <!-- Row 3: Mix of sizes -->
        <div class="row-span-1 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica4.webp"
            alt="Mariachi en restaurante"
            class="w-full h-full object-cover kenburns-6"
          />
        </div>

        <div class="row-span-1 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica5.webp"
            alt="Música acústica"
            class="w-full h-full object-cover kenburns-7"
          />
        </div>

        <div class="col-span-2 row-span-1 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica6.webp"
            alt="Jazz en cafetería"
            class="w-full h-full object-cover kenburns-8"
          />
        </div>

        <div class="row-span-1 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica7.webp"
            alt="Banda en tienda"
            class="w-full h-full object-cover kenburns-9"
          />
        </div>

        <div class="row-span-1 relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/carousel/muusica8.webp"
            alt="Músicos en hotel"
            class="w-full h-full object-cover kenburns-10"
          />
        </div>
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="text-center mt-16 px-6">
      <a href="/escuchanos"
         class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg">
        Escucha nuestras playlists
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
// Animated gallery with Ken Burns effect
</script>

<style scoped>
/* Ken Burns animations - cada imagen con timing diferente */
@keyframes kenburns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.15) translate(-2%, -2%);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
}

.kenburns-1 {
  animation: kenburns 25s ease-in-out infinite;
}

.kenburns-2 {
  animation: kenburns 20s ease-in-out infinite;
  animation-delay: -5s;
}

.kenburns-3 {
  animation: kenburns 18s ease-in-out infinite;
  animation-delay: -3s;
}

.kenburns-4 {
  animation: kenburns 22s ease-in-out infinite;
  animation-delay: -8s;
}

.kenburns-5 {
  animation: kenburns 24s ease-in-out infinite;
  animation-delay: -12s;
}

.kenburns-6 {
  animation: kenburns 19s ease-in-out infinite;
  animation-delay: -6s;
}

.kenburns-7 {
  animation: kenburns 21s ease-in-out infinite;
  animation-delay: -10s;
}

.kenburns-8 {
  animation: kenburns 23s ease-in-out infinite;
  animation-delay: -15s;
}

.kenburns-9 {
  animation: kenburns 26s ease-in-out infinite;
  animation-delay: -18s;
}

.kenburns-10 {
  animation: kenburns 20s ease-in-out infinite;
  animation-delay: -9s;
}
</style>
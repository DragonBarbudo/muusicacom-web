<template>
  <div class="relative">
    <!-- Background with subtle gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white/50 dark:from-slate-900/50 dark:to-slate-800/50"></div>

    <div class="container mx-auto px-6 relative">

      <!-- 3 Column Grid Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        <!-- Step 1 - Blue Card -->
        <div class="group relative">
          <!-- Card -->
          <div class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-400/20 overflow-hidden h-full">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>

            <div class="relative text-center h-full flex flex-col">
              <!-- Number Badge -->
              <div class="bg-white/20 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 ring-4 ring-white/30 shadow-lg">
                <span class="text-4xl font-bold text-white">1</span>
              </div>

              <!-- Content -->
              <div class="flex-1 flex flex-col">
                <h3 class="text-3xl font-bold text-white mb-6 font-second">¿Cuál es tu negocio?</h3>
                <div class="space-y-3 text-left">
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">🍽️ Restaurante</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">☕ Cafetería</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">👕 Tienda de ropa</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">💪 Gimnasio</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">🧘 Spa & Wellness</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">🏨 Hotel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 - Purple Card -->
        <div class="group relative">
          <div class="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-400/20 overflow-hidden h-full">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl"></div>

            <div class="relative text-center h-full flex flex-col">
              <!-- Number Badge -->
              <div class="bg-white/20 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 ring-4 ring-white/30 shadow-lg">
                <span class="text-4xl font-bold text-white">2</span>
              </div>

              <!-- Content -->
              <div class="flex-1 flex flex-col">
                <h3 class="text-3xl font-bold text-white mb-6 font-second">¿Qué ambiente quieres?</h3>
                <div class="space-y-3 text-left">
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">😌 Relajado y tranquilo</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">⚡ Energético y motivador</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">✨ Elegante y sofisticado</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">🎵 Moderno y fresco</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">🏡 Acogedor y familiar</span>
                  </div>
                  <div class="bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3 hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span class="text-white font-medium">🎉 Dinámico y vibrante</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3 - Green Card -->
        <div class="group relative">
          <div class="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-400/20 overflow-hidden h-full">
            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-green-400/10 rounded-full blur-2xl"></div>

            <div class="relative text-center h-full flex flex-col justify-between">
              <!-- Number Badge -->
              <div class="bg-white/20 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 ring-4 ring-white/30 shadow-lg">
                <span class="text-4xl font-bold text-white">3</span>
              </div>

              <!-- Content -->
              <div class="flex-1 flex flex-col justify-center">
                <h3 class="text-3xl font-bold text-white mb-6 font-second">Relájate y escucha</h3>

                <p class="text-green-50 text-lg leading-relaxed mb-6">
                  Tu negocio suena <span class="font-bold text-white">legal</span>,
                  <span class="font-bold text-white">profesional</span> y
                  <span class="font-bold text-white">sin regalías</span>.
                </p>

                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                  <p class="text-green-50 leading-relaxed">
                    Tendrás un playlist a la medida que puedes reproducir en cualquier dispositivo, o acceder a nuestro catálogo de más de 24 horas de música continua.
                  </p>
                </div>

                <div class="flex justify-center">
                  <a href="https://play.muusica.com"
                     class="inline-flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
                    </svg>
                    ¡Lo quiero!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Fully static component - no animations or interactions
</script>
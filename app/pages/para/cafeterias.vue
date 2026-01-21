<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold font-second mb-6">
          Música Profesional para Cafeterías
        </h1>
        <p class="text-2xl text-slate-600 dark:text-slate-400 mb-8">
          Crea el ambiente perfecto que haga que tus clientes se queden más tiempo
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="https://play.muusica.com" class="btn-primary px-8 py-4 text-lg">
            Prueba Gratis 14 Días
          </a>
          <NuxtLink to="/planes" class="btn-secondary px-8 py-4 text-lg">
            Ver Planes
          </NuxtLink>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-blue-600 mb-2">+25min</div>
          <p class="text-slate-600 dark:text-slate-400">Aumento en permanencia promedio</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-green-600 mb-2">+18%</div>
          <p class="text-slate-600 dark:text-slate-400">Incremento en ticket promedio</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-purple-600 mb-2">+32%</div>
          <p class="text-slate-600 dark:text-slate-400">Más ventas de repostería</p>
        </div>
      </div>

      <!-- El Problema -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          El Problema de la Música en Cafeterías
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-red-600">❌ Usando Spotify o YouTube</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• Anuncios interrumpen la experiencia</li>
              <li>• Canciones inapropiadas aleatorias</li>
              <li>• Volumen inconsistente</li>
              <li>• Multas SACM de $20,000-$85,000 MXN</li>
              <li>• Música muy rápida que hace que clientes se vayan</li>
            </ul>
          </div>
          <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-green-600">✅ Con Muusica.com</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• 100% legal, licencias incluidas</li>
              <li>• Playlists curadas para cafeterías</li>
              <li>• Volumen optimizado automático</li>
              <li>• Programación por horario</li>
              <li>• Música diseñada para extender permanencia</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Playlists por Momento -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Música Perfecta para Cada Momento del Día
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">☕</div>
            <h3 class="text-2xl font-bold mb-3">Mañana (7am-11am)</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Energía suave para despertar
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Acoustic, Indie Pop, Folk</li>
              <li><strong>Tempo:</strong> 90-110 BPM</li>
              <li><strong>Objetivo:</strong> Ambiente productivo y acogedor</li>
            </ul>
          </div>

          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">💼</div>
            <h3 class="text-2xl font-bold mb-3">Mediodía (11am-3pm)</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Concentración y trabajo
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Lo-fi, Jazz, Bossa Nova</li>
              <li><strong>Tempo:</strong> 70-90 BPM</li>
              <li><strong>Objetivo:</strong> Foco sin distracciones</li>
            </ul>
          </div>

          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">🌙</div>
            <h3 class="text-2xl font-bold mb-3">Tarde (3pm-8pm)</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Social y relajado
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Indie, Chill Pop, Soul</li>
              <li><strong>Tempo:</strong> 85-105 BPM</li>
              <li><strong>Objetivo:</strong> Ambiente social cómodo</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tipos de Cafetería -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Música Adaptada a Tu Concepto
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Café Moderno / Hipster</h3>
            <p class="mb-4">Indie, Alternative, Electronic Chill</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Perfecto para millennials y Gen Z. Música actual pero no mainstream.
            </p>
          </div>

          <div class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Café de Especialidad</h3>
            <p class="mb-4">Jazz, Bossa Nova, World Music</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Sofisticado y relajado. Ideal para apreciadores de café premium.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Café Co-Working</h3>
            <p class="mb-4">Lo-fi, Ambient, Instrumental</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Música diseñada para concentración. Sin voces que distraigan.
            </p>
          </div>

          <div class="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Café Tradicional</h3>
            <p class="mb-4">Standards, Clásica Ligera, Boleros</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Atemporal y familiar. Para clientela de todas las edades.
            </p>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Todo lo que Necesitas
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎵</div>
            <h3 class="text-xl font-bold mb-3">+10,000 Canciones</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Biblioteca enorme sin repeticiones molestas
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⏰</div>
            <h3 class="text-xl font-bold mb-3">Programación Automática</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Playlists que cambian según la hora del día
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🔊</div>
            <h3 class="text-xl font-bold mb-3">Volumen Inteligente</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Normalización automática entre canciones
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-3">Control Remoto</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Cambia música desde tu celular
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⚖️</div>
            <h3 class="text-xl font-bold mb-3">100% Legal</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Todas las licencias incluidas
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎧</div>
            <h3 class="text-xl font-bold mb-3">Sin Anuncios</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Experiencia continua e ininterrumpida
            </p>
          </div>
        </div>
      </section>

      <!-- Testimonial -->
      <section class="mb-20">
        <div class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-12 rounded-3xl">
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-2xl mb-6 italic">
              "Antes los clientes tomaban su café y se iban en 15 minutos. Ahora se quedan 40+ minutos trabajando, piden segundas tazas, y compran más repostería. La música cambió todo nuestro negocio."
            </p>
            <p class="font-bold text-xl">— Laura Martínez</p>
            <p class="text-cyan-100">Dueña, Café Nube (Condesa, CDMX)</p>
          </div>
        </div>
      </section>

      <!-- Pricing CTA -->
      <section class="mb-20">
        <div class="bg-slate-100 dark:bg-slate-800 p-12 rounded-3xl text-center">
          <h2 class="text-4xl font-bold font-second mb-6">
            Desde $299/mes Todo Incluido
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Música + Licencias + Soporte. Sin costos ocultos.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="https://play.muusica.com" class="btn-primary px-8 py-4 text-lg">
              Comenzar Prueba Gratis
            </a>
            <NuxtLink to="/planes" class="btn-secondary px-8 py-4 text-lg">
              Ver Todos los Planes
            </NuxtLink>
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-6">
            14 días gratis • Sin tarjeta de crédito • Cancela cuando quieras
          </p>
        </div>
      </section>

      <!-- FAQs -->
      <section>
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Preguntas Frecuentes
        </h2>
        <div class="max-w-3xl mx-auto space-y-6">
          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Puedo usar Spotify en mi cafetería?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              No. Spotify Premium es solo para uso personal. Usar Spotify, Apple Music, YouTube, etc. en negocios es ilegal y puede resultar en multas de $20,000-$85,000 MXN por parte de SACM.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Qué incluye el servicio?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Todo: +10,000 canciones sin regalías, licencias legales incluidas, programación automática por horario, control desde app móvil, soporte 24/7, y actualizaciones constantes de música.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Funciona con mi sistema de audio actual?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Muusica.com funciona con cualquier sistema: bocinas Bluetooth, sistemas multi-zona, Sonos, o solo tu computadora/tablet conectada a bocinas. No requieres equipo especial.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Puedo cambiar la música yo mismo?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Totalmente. Desde la app puedes cambiar playlist, ajustar volumen, o crear tus propias combinaciones. También puedes dejarlo en automático para que cambie según la hora del día.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Hay contrato forzoso?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              No. Planes mensuales sin compromiso. Cancela cuando quieras sin penalización. 14 días de prueba gratis sin tarjeta de crédito.
            </p>
          </details>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Música para Cafeterías | Aumenta Permanencia +25min | Muusica.com',
  meta: [
    { name: 'description', content: 'Música profesional para cafeterías que aumenta la permanencia +25min y ticket promedio +18%. Playlists curadas por horario, 100% legal. Desde $299/mes.' },
    { name: 'keywords', content: 'música para cafeterías, música café, playlist cafetería, música comercial café, música ambiente coffee shop' },
    { property: 'og:title', content: 'Música para Cafeterías | Aumenta Permanencia +25min | Muusica.com' },
    { property: 'og:description', content: 'Música profesional para cafeterías que aumenta la permanencia +25min y ticket promedio +18%. 100% legal, desde $299/mes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://muusica.com/para/cafeterias' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Música para Cafeterías | Muusica.com' },
    { name: 'twitter:description', content: 'Aumenta permanencia +25min con música profesional para cafeterías' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/para/cafeterias' }]
})
</script>

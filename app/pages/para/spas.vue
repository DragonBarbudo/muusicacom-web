<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold font-second mb-6">
          Música de Relajación para Spas y Wellness
        </h1>
        <p class="text-2xl text-slate-600 dark:text-slate-400 mb-8">
          Crea la experiencia sensorial completa que tus clientes merecen
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
        <div class="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-purple-600 mb-2">+45%</div>
          <p class="text-slate-600 dark:text-slate-400">Percepción de calidad del servicio</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-blue-600 mb-2">+38%</div>
          <p class="text-slate-600 dark:text-slate-400">Clientes que reservan nuevamente</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-green-600 mb-2">+28%</div>
          <p class="text-slate-600 dark:text-slate-400">Ventas de paquetes premium</p>
        </div>
      </div>

      <!-- El Problema -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          El Problema de la Música en Spas
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-red-600">❌ Música Inadecuada</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• Playlists genéricas de "spa music" repetitivas</li>
              <li>• Anuncios de YouTube que rompen la paz</li>
              <li>• Volumen inconsistente entre canciones</li>
              <li>• Música inapropiada que estresa</li>
              <li>• Uso ilegal de Spotify con riesgo de multas</li>
            </ul>
          </div>
          <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-green-600">✅ Con Muusica.com</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• 100% legal, todas las licencias incluidas</li>
              <li>• Playlists diseñadas por expertos en wellness</li>
              <li>• Frecuencias optimizadas para relajación profunda</li>
              <li>• Volumen perfectamente balanceado</li>
              <li>• Sin interrupciones, flujo continuo</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Playlists por Área -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Música Perfecta para Cada Zona
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">🧘</div>
            <h3 class="text-2xl font-bold mb-3">Sala de Espera</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Transición hacia la calma
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Ambient, New Age, Nature Sounds</li>
              <li><strong>Tempo:</strong> 50-70 BPM</li>
              <li><strong>Objetivo:</strong> Empezar a relajar y desconectar</li>
            </ul>
          </div>

          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">💆</div>
            <h3 class="text-2xl font-bold mb-3">Cabinas de Masaje</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Relajación profunda
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Healing Music, Meditation, 432Hz</li>
              <li><strong>Tempo:</strong> 40-60 BPM</li>
              <li><strong>Objetivo:</strong> Estado meditativo profundo</li>
            </ul>
          </div>

          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">🛁</div>
            <h3 class="text-2xl font-bold mb-3">Área Húmeda</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Purificación y renovación
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Water Sounds, Zen, Tibetan</li>
              <li><strong>Tempo:</strong> 45-65 BPM</li>
              <li><strong>Objetivo:</strong> Conexión elemental agua</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tipos de Spa -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Música para Tu Concepto de Spa
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Spa de Lujo / Premium</h3>
            <p class="mb-4">Classical Spa, Harp, Piano Ambient</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Sofisticado y exclusivo. Música que refleja la experiencia premium que ofreces.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Spa Holístico / Natural</h3>
            <p class="mb-4">Nature Sounds, Shamanic, Crystal Bowls</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Conexión con la naturaleza. Frecuencias curativas y sonidos orgánicos.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Spa Médico / Wellness Center</h3>
            <p class="mb-4">Therapeutic Music, Binaural Beats, Soft Ambient</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Científico y profesional. Música respaldada por estudios de neuromúsica.
            </p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Spa Urbano / Day Spa</h3>
            <p class="mb-4">Chill Lounge, Downtempo, Zen Pop</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Moderno y accesible. Relajante pero actual para clientela urbana.
            </p>
          </div>
        </div>
      </section>

      <!-- La Ciencia -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          La Ciencia del Sonido Curativo
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
            <h3 class="text-xl font-bold mb-3">🧠 Ondas Cerebrales</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música de 40-60 BPM induce ondas Alpha y Theta, asociadas con relajación profunda y estado meditativo.
            </p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl">
            <h3 class="text-xl font-bold mb-3">💓 Ritmo Cardíaco</h3>
            <p class="text-slate-600 dark:text-slate-400">
              El corazón sincroniza naturalmente con el tempo de la música. Tempo lento = ritmo cardíaco más bajo.
            </p>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
            <h3 class="text-xl font-bold mb-3">😌 Cortisol Reducido</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música apropiada reduce cortisol (hormona del estrés) hasta 25%, mejorando la experiencia terapéutica.
            </p>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Sistema Completo para Spas
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎵</div>
            <h3 class="text-xl font-bold mb-3">+5,000 Tracks Curativos</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Biblioteca especializada en música terapéutica
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🔊</div>
            <h3 class="text-xl font-bold mb-3">Control Multi-Zona</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música diferente en recepción, cabinas, y área húmeda
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎚️</div>
            <h3 class="text-xl font-bold mb-3">Volumen Perfecto</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Normalización automática, sin cambios bruscos
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-3">App para Terapeutas</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Cada terapeuta ajusta música de su cabina
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⚖️</div>
            <h3 class="text-xl font-bold mb-3">100% Legal</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Todas las licencias incluidas, cero preocupaciones
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">∞</div>
            <h3 class="text-xl font-bold mb-3">Flujo Continuo</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Transiciones suaves, nunca silencio abrupto
            </p>
          </div>
        </div>
      </section>

      <!-- Testimonial -->
      <section class="mb-20">
        <div class="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-12 rounded-3xl">
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-2xl mb-6 italic">
              "La música es ahora parte integral de nuestra experiencia. Clientes nos dicen que 'nunca se habían relajado tanto'. La retención subió 38% y las reseñas mencionan constantemente el 'ambiente perfecto'."
            </p>
            <p class="font-bold text-xl">— Patricia Sánchez</p>
            <p class="text-pink-100">Directora, Serenity Spa (Polanco, CDMX)</p>
          </div>
        </div>
      </section>

      <!-- Pricing CTA -->
      <section class="mb-20">
        <div class="bg-slate-100 dark:bg-slate-800 p-12 rounded-3xl text-center">
          <h2 class="text-4xl font-bold font-second mb-6">
            Desde $599/mes Multi-Zona
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Música + Licencias + Control Multi-Zona. Todo incluido.
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
              ¿La música realmente afecta la experiencia del spa?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Absolutamente. Estudios demuestran que la música apropiada puede aumentar la percepción de calidad del servicio hasta 45%. El sonido es igual de importante que el masaje, aromaterapia, o ambiente visual.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Qué diferencia hay con usar playlists gratis de YouTube?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              YouTube tiene anuncios que rompen completamente la experiencia de relajación. Además, es ilegal para uso comercial. Muusica.com ofrece música profesional sin interrupciones, 100% legal, con calidad superior.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Puedo tener música diferente en cada cabina?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí, con nuestro plan Profesional. Puedes tener playlists diferentes en recepción, cada cabina, área húmeda, etc. Cada terapeuta puede controlar la música de su cabina desde su celular.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Qué es la música en 432Hz que mencionan?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              432Hz es una frecuencia considerada más armónica con el cuerpo humano que el estándar 440Hz. Tenemos playlists completas afinadas a 432Hz para terapeutas que prefieren trabajar con estas frecuencias.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Funciona con mi sistema de audio actual?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Compatible con cualquier sistema: desde bocinas Bluetooth hasta sistemas multi-zona profesionales Sonos, Bose, o sistemas de audio empotrados. Solo necesitas conexión a internet.
            </p>
          </details>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Música para Spas y Wellness | Aumenta Satisfacción +45% | Muusica.com',
  meta: [
    { name: 'description', content: 'Música terapéutica profesional para spas. Aumenta percepción de calidad +45% y retención +38%. Frecuencias curativas, 100% legal. Desde $599/mes.' },
    { name: 'keywords', content: 'música para spas, música wellness, música terapéutica, música relajación spa, música 432hz comercial' },
    { property: 'og:title', content: 'Música para Spas y Wellness | Aumenta Satisfacción +45% | Muusica.com' },
    { property: 'og:description', content: 'Música terapéutica profesional para spas con control multi-zona. 100% legal, desde $599/mes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://muusica.com/para/spas' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Música para Spas | Muusica.com' },
    { name: 'twitter:description', content: 'Aumenta satisfacción +45% con música terapéutica profesional' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/para/spas' }]
})
</script>

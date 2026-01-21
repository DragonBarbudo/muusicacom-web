<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold font-second mb-6">
          Música de Alta Energía para Gimnasios
        </h1>
        <p class="text-2xl text-slate-600 dark:text-slate-400 mb-8">
          Motiva a tus miembros con playlists diseñadas para rendimiento máximo
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
        <div class="text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-red-600 mb-2">+12%</div>
          <p class="text-slate-600 dark:text-slate-400">Más tiempo de entrenamiento</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-blue-600 mb-2">+27%</div>
          <p class="text-slate-600 dark:text-slate-400">Retención de miembros</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-purple-600 mb-2">+35%</div>
          <p class="text-slate-600 dark:text-slate-400">Satisfacción en encuestas</p>
        </div>
      </div>

      <!-- El Problema -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          El Problema de la Música en Gimnasios
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-red-600">❌ Música Inadecuada</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• Radio FM con anuncios constantes</li>
              <li>• Canciones lentas que desmotivan</li>
              <li>• Playlists de Spotify (ilegales + anuncios)</li>
              <li>• Volumen mal ajustado por zona</li>
              <li>• Multas SACM hasta $100,000 MXN</li>
            </ul>
          </div>
          <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-green-600">✅ Con Muusica.com</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• 100% legal con todas las licencias</li>
              <li>• Música de alta energía constante</li>
              <li>• Tempo optimizado 120-140 BPM</li>
              <li>• Control multi-zona independiente</li>
              <li>• Sin interrupciones ni anuncios</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Playlists por Zona -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Música Diferente para Cada Zona
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">💪</div>
            <h3 class="text-2xl font-bold mb-3">Área de Pesas</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Energía máxima, intensidad total
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Hip Hop, Trap, Rock Pesado</li>
              <li><strong>Tempo:</strong> 130-150 BPM</li>
              <li><strong>Objetivo:</strong> Motivación para levantar más peso</li>
            </ul>
          </div>

          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">🏃</div>
            <h3 class="text-2xl font-bold mb-3">Cardio / Spinning</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Ritmo constante para resistencia
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> EDM, House, Reggaeton</li>
              <li><strong>Tempo:</strong> 120-140 BPM</li>
              <li><strong>Objetivo:</strong> Mantener ritmo cardíaco alto</li>
            </ul>
          </div>

          <div class="border-2 border-slate-200 dark:border-slate-700 p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div class="text-4xl mb-4">🧘</div>
            <h3 class="text-2xl font-bold mb-3">Yoga / Estiramiento</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Calma y concentración
            </p>
            <ul class="text-sm space-y-2">
              <li><strong>Géneros:</strong> Ambient, Chill, Instrumental</li>
              <li><strong>Tempo:</strong> 60-80 BPM</li>
              <li><strong>Objetivo:</strong> Relajación y enfoque mental</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Tipos de Gimnasio -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Música para Tu Tipo de Gimnasio
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">CrossFit / HIIT</h3>
            <p class="mb-4">Rock, Metal, Hip Hop Agresivo</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Máxima intensidad para entrenamientos de alta exigencia. Música que empuja límites.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Gimnasio Boutique</h3>
            <p class="mb-4">Pop Energético, Dance, Latin Urban</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Moderno y actual. Música que tu clientela premium reconoce y disfruta.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Gimnasio Tradicional</h3>
            <p class="mb-4">Rock Clásico, Pop 80s/90s, Dance</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Música conocida y motivante para todas las edades. Sin sorpresas.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Estudio de Ciclismo</h3>
            <p class="mb-4">EDM, House Progresivo, Tech House</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Beats consistentes perfectos para sincronizar pedaleo. Buildups para sprints.
            </p>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Sistema Completo para Gimnasios
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🔊</div>
            <h3 class="text-xl font-bold mb-3">Control Multi-Zona</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música diferente en pesas, cardio, y clases simultáneamente
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⚡</div>
            <h3 class="text-xl font-bold mb-3">Tempo Científico</h3>
            <p class="text-slate-600 dark:text-slate-400">
              BPM optimizado para maximizar rendimiento deportivo
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-3">App para Instructores</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Cada instructor cambia música de su clase desde su celular
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎵</div>
            <h3 class="text-xl font-bold mb-3">Sin Repeticiones</h3>
            <p class="text-slate-600 dark:text-slate-400">
              +15,000 canciones energéticas siempre frescas
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⚖️</div>
            <h3 class="text-xl font-bold mb-3">100% Legal</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Evita multas de $20,000-$100,000 MXN
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🚫</div>
            <h3 class="text-xl font-bold mb-3">Cero Anuncios</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Nunca interrumpas un WOD con publicidad
            </p>
          </div>
        </div>
      </section>

      <!-- Testimonial -->
      <section class="mb-20">
        <div class="bg-gradient-to-r from-red-600 to-orange-500 text-white p-12 rounded-3xl">
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-2xl mb-6 italic">
              "Nuestros miembros nos dicen que la música es una de las razones por las que aman venir. Desde que cambiamos a Muusica.com, la retención subió 27% y las quejas por música desaparecieron."
            </p>
            <p class="font-bold text-xl">— Carlos Hernández</p>
            <p class="text-orange-100">Director, Iron Box CrossFit (Monterrey)</p>
          </div>
        </div>
      </section>

      <!-- Pricing CTA -->
      <section class="mb-20">
        <div class="bg-slate-100 dark:bg-slate-800 p-12 rounded-3xl text-center">
          <h2 class="text-4xl font-bold font-second mb-6">
            Desde $599/mes para Múltiples Zonas
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Música + Licencias + Control Multi-Zona. Sin costos ocultos.
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
              ¿Puedo usar Spotify en mi gimnasio?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              No. Spotify, Apple Music, YouTube son solo para uso personal. Usarlos en negocios es ilegal y puede resultar en multas de hasta $100,000 MXN. Necesitas una licencia comercial.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Cómo funciona el control multi-zona?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Puedes tener música diferente en cada área (pesas, cardio, yoga) simultáneamente. Cada zona tiene su propia playlist y volumen. Todo se controla desde una sola cuenta.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Los instructores pueden cambiar la música?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Puedes dar acceso a tus instructores para que controlen la música de sus clases desde la app móvil, sin afectar otras zonas.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Qué equipo necesito?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Funciona con tu sistema actual de audio. Solo necesitas una tablet/computadora con internet conectada a tus bocinas. Compatible con sistemas multi-zona profesionales.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Hay música en español?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Tenemos playlists de reggaeton, latin urban, rock en español, y más. Puedes mezclar idiomas o tener solo español/inglés según tu preferencia.
            </p>
          </details>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Música para Gimnasios | Aumenta Retención +27% | Muusica.com',
  meta: [
    { name: 'description', content: 'Música profesional de alta energía para gimnasios. Aumenta retención +27% y tiempo de entrenamiento +12%. Control multi-zona, 100% legal. Desde $599/mes.' },
    { name: 'keywords', content: 'música para gimnasios, música gym, playlist gimnasio, música comercial fitness, música crossfit' },
    { property: 'og:title', content: 'Música para Gimnasios | Aumenta Retención +27% | Muusica.com' },
    { property: 'og:description', content: 'Música profesional para gimnasios con control multi-zona. 100% legal, desde $599/mes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://muusica.com/para/gimnasios' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Música para Gimnasios | Muusica.com' },
    { name: 'twitter:description', content: 'Aumenta retención +27% con música profesional para gimnasios' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/para/gimnasios' }]
})
</script>

<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold font-second mb-6">
          Música que Vende para Tu Tienda
        </h1>
        <p class="text-2xl text-slate-600 dark:text-slate-400 mb-8">
          Aumenta el tiempo de permanencia y las compras impulsivas con la música correcta
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
        <div class="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-green-600 mb-2">+15%</div>
          <p class="text-slate-600 dark:text-slate-400">Aumento en ventas totales</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-blue-600 mb-2">+23%</div>
          <p class="text-slate-600 dark:text-slate-400">Compras impulsivas</p>
        </div>
        <div class="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
          <div class="text-5xl font-bold text-purple-600 mb-2">+8min</div>
          <p class="text-slate-600 dark:text-slate-400">Permanencia en tienda</p>
        </div>
      </div>

      <!-- El Problema -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          El Problema de la Música en Retail
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-red-600">❌ Música Mal Elegida</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• Radio con anuncios de la competencia</li>
              <li>• Canciones depresivas que reducen ventas</li>
              <li>• Spotify/YouTube ilegales con anuncios</li>
              <li>• Música muy rápida que hace que clientes se vayan</li>
              <li>• Multas SACM de $20,000-$85,000 MXN</li>
            </ul>
          </div>
          <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4 text-green-600">✅ Con Muusica.com</h3>
            <ul class="space-y-3 text-slate-700 dark:text-slate-300">
              <li>• 100% legal, todas las licencias incluidas</li>
              <li>• Playlists diseñadas para aumentar ventas</li>
              <li>• Tempo optimizado para compras (100-120 BPM)</li>
              <li>• Sin anuncios ni interrupciones</li>
              <li>• Música positiva que motiva a comprar</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Cómo Funciona -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          La Ciencia de la Música en Retail
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl">
            <h3 class="text-xl font-bold mb-3">🎵 Tempo Correcto</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música de 100-120 BPM aumenta el tiempo de permanencia sin apresurar. Clientes exploran más productos.
            </p>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
            <h3 class="text-xl font-bold mb-3">😊 Emoción Positiva</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música alegre y familiar pone a clientes en mood de compra. Asocian tu tienda con sentimientos positivos.
            </p>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl">
            <h3 class="text-xl font-bold mb-3">🎯 Targeting Musical</h3>
            <p class="text-slate-600 dark:text-slate-400">
              La música que le gusta a tu cliente objetivo crea conexión emocional con tu marca y productos.
            </p>
          </div>
        </div>
      </section>

      <!-- Tipos de Tienda -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Música para Tu Tipo de Tienda
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Moda / Ropa</h3>
            <p class="mb-4">Pop Actual, Indie, Electronic Chill</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Música trendy y moderna que refleja el estilo de tu marca. Crea ambiente aspiracional.
            </p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Tienda Gourmet / Delicatessen</h3>
            <p class="mb-4">Bossa Nova, Jazz, World Music</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Sofisticado y refinado. Música que complementa productos premium y artesanales.
            </p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Librería / Papelería</h3>
            <p class="mb-4">Classical Light, Acoustic, Instrumental</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Ambiente tranquilo que invita a explorar. Música que no distrae de la lectura.
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Decoración / Hogar</h3>
            <p class="mb-4">Lounge, Chill House, Downtempo</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Ambiente relajado que ayuda a imaginar productos en casa. Tempo medio y agradable.
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Electrónica / Tecnología</h3>
            <p class="mb-4">Electronic, Future Bass, Synthwave</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Moderna y vanguardista. Música que refleja innovación y tecnología.
            </p>
          </div>

          <div class="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">Tienda Infantil</h3>
            <p class="mb-4">Pop Familiar, Disney, Feel-Good</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Alegre y positiva sin ser infantil. Agrada a padres mientras entretiene a niños.
            </p>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Sistema Completo para Retail
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎵</div>
            <h3 class="text-xl font-bold mb-3">+10,000 Canciones</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Variedad infinita sin repeticiones molestas
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⏰</div>
            <h3 class="text-xl font-bold mb-3">Programación por Hora</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música diferente en horarios pico vs. tranquilos
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-xl font-bold mb-3">Match con Tu Marca</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Playlists que reflejan la identidad de tu negocio
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">📱</div>
            <h3 class="text-xl font-bold mb-3">Control Remoto</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Cambia ambiente desde tu celular
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">⚖️</div>
            <h3 class="text-xl font-bold mb-3">100% Legal</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Evita multas y problemas legales
            </p>
          </div>
          <div class="text-center p-6">
            <div class="text-5xl mb-4">🚫</div>
            <h3 class="text-xl font-bold mb-3">Sin Anuncios</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Nunca promociones tu competencia por accidente
            </p>
          </div>
        </div>
      </section>

      <!-- Case Study -->
      <section class="mb-20">
        <div class="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-12 rounded-3xl">
          <div class="max-w-3xl mx-auto text-center">
            <p class="text-2xl mb-6 italic">
              "Nuestra tienda de ropa aumentó ventas 18% en 2 meses. Los clientes permanecen más tiempo, prueban más prendas, y varios nos han dicho que 'les encanta el ambiente'. La inversión se pagó sola en semanas."
            </p>
            <p class="font-bold text-xl">— Ana Gutiérrez</p>
            <p class="text-emerald-100">Dueña, Boutique Verde (Roma Norte, CDMX)</p>
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
            Música + Licencias + Soporte. Cero costos ocultos.
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
              ¿Realmente la música aumenta las ventas?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Estudios de Harvard Business Review y Journal of Consumer Research demuestran que la música correcta aumenta ventas hasta 15% y compras impulsivas hasta 23%. El tempo, género y volumen afectan directamente el comportamiento de compra.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Puedo usar mi cuenta personal de Spotify?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              No. Spotify Premium, Apple Music, YouTube, etc. son solo para uso personal. Usarlos en negocios es ilegal según la ley mexicana y puede resultar en multas de $20,000-$85,000 MXN.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Qué tipo de música es mejor para retail?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Depende de tu marca y cliente objetivo. Para tiendas premium: jazz, bossa nova. Para tiendas jóvenes: pop, indie. Para tiendas familiares: pop familiar, clásicos. Te ayudamos a elegir la música perfecta para tu negocio.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Funciona con mi sistema de audio actual?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Muusica.com funciona con cualquier sistema: desde bocinas Bluetooth simples hasta sistemas multi-zona profesionales. Solo necesitas internet y un dispositivo conectado a tus bocinas.
            </p>
          </details>

          <details class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <summary class="font-bold cursor-pointer">
              ¿Puedo cambiar la música si no me gusta?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Absolutamente. Tienes control total desde la app. Puedes cambiar playlist, ajustar volumen, o crear tus propias combinaciones de géneros en cualquier momento.
            </p>
          </details>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Música para Tiendas y Retail | Aumenta Ventas +15% | Muusica.com',
  meta: [
    { name: 'description', content: 'Música profesional para tiendas que aumenta ventas +15% y compras impulsivas +23%. Playlists científicamente optimizadas, 100% legal. Desde $299/mes.' },
    { name: 'keywords', content: 'música para tiendas, música retail, playlist tienda, música comercial retail, música para boutique' },
    { property: 'og:title', content: 'Música para Tiendas y Retail | Aumenta Ventas +15% | Muusica.com' },
    { property: 'og:description', content: 'Música profesional para tiendas y retail. Aumenta ventas y permanencia. 100% legal, desde $299/mes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://muusica.com/para/tiendas' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Música para Tiendas | Muusica.com' },
    { name: 'twitter:description', content: 'Aumenta ventas +15% con música profesional para retail' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/para/tiendas' }]
})
</script>

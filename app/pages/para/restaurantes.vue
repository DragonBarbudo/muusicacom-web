<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
      <div class="container mx-auto max-w-4xl text-center">
        <div class="i-carbon-restaurant text-6xl text-amber-600 mx-auto mb-6"></div>
        <h1 class="text-4xl md:text-6xl font-bold font-second mb-6 bg-gradient-to-r from-amber-600 to-orange-500 inline-block text-transparent bg-clip-text">
          Música para Restaurantes
        </h1>
        <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
          Crea el ambiente perfecto para que tus clientes disfruten más tiempo
        </p>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Nuestra música especializada para restaurantes ayuda a incrementar la permanencia de clientes hasta un 20% y las ventas hasta un 15%, todo con licencias comerciales incluidas.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://play.muusica.com" target="_blank" class="btn">
            Probar Gratis 14 Días
          </a>
          <a href="#demo-playlists" class="btn-calm">
            Escuchar Demo
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-6 bg-white dark:bg-slate-800">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-5xl font-bold text-amber-600 mb-2">15%</div>
            <p class="text-slate-600 dark:text-slate-400">Incremento promedio en ventas</p>
          </div>
          <div>
            <div class="text-5xl font-bold text-amber-600 mb-2">20%</div>
            <p class="text-slate-600 dark:text-slate-400">Mayor tiempo de permanencia</p>
          </div>
          <div>
            <div class="text-5xl font-bold text-amber-600 mb-2">95%</div>
            <p class="text-slate-600 dark:text-slate-400">Mejora en satisfacción del cliente</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          ¿Por qué la música correcta es crucial para tu restaurante?
        </h2>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl">
            <div class="i-carbon-time text-4xl text-amber-600 mb-4"></div>
            <h3 class="text-2xl font-bold font-second mb-3">Mayor Permanencia</h3>
            <p class="text-slate-700 dark:text-slate-300">
              La música adecuada hace que los clientes se sientan cómodos y relajados, incrementando su tiempo de estancia. Más tiempo = más consumo de bebidas, postres y segundos platillos.
            </p>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl">
            <div class="i-carbon-favorite text-4xl text-amber-600 mb-4"></div>
            <h3 class="text-2xl font-bold font-second mb-3">Experiencia Memorable</h3>
            <p class="text-slate-700 dark:text-slate-300">
              El 68% de los clientes considera el ambiente musical como factor clave en su decisión de regresar. Una buena playlist crea experiencias que se recuerdan y se recomiendan.
            </p>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl">
            <div class="i-carbon-shopping-bag text-4xl text-amber-600 mb-4"></div>
            <h3 class="text-2xl font-bold font-second mb-3">Aumenta el Ticket Promedio</h3>
            <p class="text-slate-700 dark:text-slate-300">
              Estudios demuestran que la música apropiada influye en las decisiones de compra, incrementando el ticket promedio hasta un 15% al crear un ambiente que invita a disfrutar sin prisas.
            </p>
          </div>

          <div class="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-8 rounded-xl">
            <div class="i-carbon-user-multiple text-4xl text-amber-600 mb-4"></div>
            <h3 class="text-2xl font-bold font-second mb-3">Personal Más Productivo</h3>
            <p class="text-slate-700 dark:text-slate-300">
              Un ambiente musical agradable mejora el ánimo del personal, reduciendo el estrés en horas pico y aumentando la productividad del servicio hasta un 12%.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Music Styles Section -->
    <section class="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-4">
          Playlists para cada momento del día
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Nuestro catálogo especializado para restaurantes se adapta al ritmo de tu negocio
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <div class="bg-gradient-to-br from-yellow-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span class="i-carbon-sun text-3xl text-white"></span>
            </div>
            <h3 class="text-xl font-bold font-second mb-3">Desayunos y Brunch</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Jazz suave, bossa nova, y acoustic pop para comenzar el día con energía positiva y relajada.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <span class="i-carbon-music text-amber-600"></span>
                <span>Tempo: 80-100 BPM</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="i-carbon-music text-amber-600"></span>
                <span>Estilo: Jazz, Bossa Nova, Acoustic</span>
              </li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <div class="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span class="i-carbon-light text-3xl text-white"></span>
            </div>
            <h3 class="text-xl font-bold font-second mb-3">Comidas</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Música contemporánea con volumen moderado que permite la conversación sin distraer del sabor.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <span class="i-carbon-music text-amber-600"></span>
                <span>Tempo: 90-110 BPM</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="i-carbon-music text-amber-600"></span>
                <span>Estilo: Pop, Indie, Latin Lounge</span>
              </li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <div class="bg-gradient-to-br from-purple-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span class="i-carbon-moon text-3xl text-white"></span>
            </div>
            <h3 class="text-xl font-bold font-second mb-3">Cenas</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Ambiente sofisticado y romántico con jazz contemporáneo, lounge y música latina suave.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <span class="i-carbon-music text-amber-600"></span>
                <span>Tempo: 70-90 BPM</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="i-carbon-music text-amber-600"></span>
                <span>Estilo: Lounge, Jazz, Chillout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Restaurant Types -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          Música para cada tipo de restaurante
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 hover:border-amber-500 transition-colors duration-300">
            <h3 class="text-xl font-bold font-second mb-3 flex items-center gap-3">
              <span class="i-carbon-fork-knife text-2xl text-amber-600"></span>
              Restaurante Gourmet / Fine Dining
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Jazz clásico, piano instrumental, música clásica contemporánea. Elegancia y sofisticación para complementar la alta gastronomía.
            </p>
          </div>

          <div class="border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 hover:border-amber-500 transition-colors duration-300">
            <h3 class="text-xl font-bold font-second mb-3 flex items-center gap-3">
              <span class="i-carbon-restaurant-fine text-2xl text-amber-600"></span>
              Restaurante Casual / Familiar
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Pop contemporáneo, indie, folk. Música alegre y familiar que crea un ambiente acogedor sin ser intrusiva.
            </p>
          </div>

          <div class="border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 hover:border-amber-500 transition-colors duration-300">
            <h3 class="text-xl font-bold font-second mb-3 flex items-center gap-3">
              <span class="i-carbon-earth-southeast-asia text-2xl text-amber-600"></span>
              Cocina Internacional / Fusión
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              World music, ethnic fusion, electro-chillout. Sonidos globales que complementan la diversidad culinaria.
            </p>
          </div>

          <div class="border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 hover:border-amber-500 transition-colors duration-300">
            <h3 class="text-xl font-bold font-second mb-3 flex items-center gap-3">
              <span class="i-carbon-favorite-filled text-2xl text-amber-600"></span>
              Restaurante Romántico
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Baladas suaves, bossa nova, smooth jazz. Música íntima perfecta para cenas de pareja y ocasiones especiales.
            </p>
          </div>

          <div class="border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 hover:border-amber-500 transition-colors duration-300">
            <h3 class="text-xl font-bold font-second mb-3 flex items-center gap-3">
              <span class="i-carbon-ibm-watson-tone-analyzer text-2xl text-amber-600"></span>
              Comida Rápida / Fast Casual
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Pop energético, indie rock suave, electrónica ligera. Ritmo dinámico que mantiene la energía sin acelerar demasiado.
            </p>
          </div>

          <div class="border-2 border-amber-200 dark:border-amber-800 rounded-xl p-6 hover:border-amber-500 transition-colors duration-300">
            <h3 class="text-xl font-bold font-second mb-3 flex items-center gap-3">
              <span class="i-carbon-fish text-2xl text-amber-600"></span>
              Restaurante de Mariscos / Terraza
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Tropical house, reggae suave, caribbean beats. Ambiente playero y relajado perfecto para disfrutar al aire libre.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Playlists -->
    <section class="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10" id="demo-playlists">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-4">
          Escucha nuestras playlists para restaurantes
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-400 mb-12">
          Prueba la calidad de nuestra música especializada
        </p>

        <MusicPlaylists />
      </div>
    </section>

    <!-- Legal Compliance -->
    <section class="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          100% Legal y Libre de Preocupaciones
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div class="flex items-center gap-4 mb-4">
              <div class="i-carbon-checkmark-filled text-4xl text-green-500"></div>
              <h3 class="text-2xl font-bold font-second">Sin Regalías SACM</h3>
            </div>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Toda nuestra música es original y libre de regalías. No necesitas pagar cuotas mensuales a SACM (Sociedad de Autores y Compositores de México).
            </p>
            <p class="text-sm text-slate-500 dark:text-slate-500">
              Ahorro promedio: $450-800 MXN/mes en derechos de autor
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div class="flex items-center gap-4 mb-4">
              <div class="i-carbon-checkmark-filled text-4xl text-green-500"></div>
              <h3 class="text-2xl font-bold font-second">Sin Regalías SOMEXFON</h3>
            </div>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Tampoco necesitas pagar a SOMEXFON (Sociedad Mexicana de Productores de Fonogramas). Nuestras licencias cubren todos los derechos fonográficos.
            </p>
            <p class="text-sm text-slate-500 dark:text-slate-500">
              Ahorro promedio: $350-600 MXN/mes en derechos conexos
            </p>
          </div>
        </div>

        <div class="mt-8 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center">
          <div class="i-carbon-document text-4xl text-blue-600 mx-auto mb-4"></div>
          <h3 class="text-2xl font-bold font-second mb-3">Certificado de Licencia Incluido</h3>
          <p class="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Recibe un certificado digital que demuestra que tu restaurante cuenta con todas las licencias necesarias para reproducir música comercial. Protégete de multas que pueden llegar hasta $100,000 MXN.
          </p>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          Casos de éxito
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl">
            <div class="flex items-center gap-4 mb-4">
              <img src="/assets/seals/comercial.svg" alt="Restaurante" class="w-16 h-16 rounded-full" />
              <div>
                <h4 class="font-bold text-lg">La Trattoria Italiana</h4>
                <p class="text-sm text-slate-500">Restaurante Fine Dining, CDMX</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div class="text-yellow-500 flex gap-1">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-slate-700 dark:text-slate-300 italic mb-6">
              "Implementamos las playlists de jazz y lounge de Muusica.com y nuestros clientes notaron inmediatamente la diferencia. El tiempo promedio de permanencia aumentó 18 minutos, lo que se tradujo en 23% más de ventas en postres y vinos. Además, ya no nos preocupamos por multas de SACM."
            </p>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-green-600">+18min</div>
                <div class="text-xs text-slate-500">Permanencia</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">+23%</div>
                <div class="text-xs text-slate-500">Ventas</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">$0</div>
                <div class="text-xs text-slate-500">Multas</div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl">
            <div class="flex items-center gap-4 mb-4">
              <img src="/assets/seals/data.svg" alt="Restaurante" class="w-16 h-16 rounded-full" />
              <div>
                <h4 class="font-bold text-lg">Tacos & Tequila</h4>
                <p class="text-sm text-slate-500">Restaurante Casual, Monterrey</p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div class="text-yellow-500 flex gap-1">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-slate-700 dark:text-slate-300 italic mb-6">
              "Antes pagábamos casi $1,500 al mes entre SACM, SOMEXFON y Spotify Premium. Con Muusica.com pagamos $599 y tenemos música especializada para restaurante mexicano. Nuestro personal dice que el ambiente mejoró mucho y los clientes preguntan por las canciones."
            </p>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-green-600">60%</div>
                <div class="text-xs text-slate-500">Ahorro</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">+15%</div>
                <div class="text-xs text-slate-500">Satisfacción</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-600">100%</div>
                <div class="text-xs text-slate-500">Legal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features for Restaurants -->
    <section class="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          Características exclusivas para restaurantes
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div class="i-carbon-time text-3xl text-amber-600 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Programación por Horarios</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Configura diferentes playlists automáticas para desayunos, comidas y cenas.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div class="i-carbon-volume-up text-3xl text-amber-600 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Control de Volumen Inteligente</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Ajuste automático según la ocupación y el ruido ambiente del local.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div class="i-carbon-categories text-3xl text-amber-600 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Zonas Múltiples</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Música diferente para terraza, salón principal, y área de bar simultáneamente.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div class="i-carbon-download text-3xl text-amber-600 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Modo Offline</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Descarga tus playlists favoritas para reproducir sin conexión a internet.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div class="i-carbon-filter text-3xl text-amber-600 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Filtros Personalizados</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Excluye géneros o artistas específicos según las preferencias de tu clientela.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-6 rounded-xl">
            <div class="i-carbon-microphone text-3xl text-amber-600 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Sin Canciones Explícitas</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Toda nuestra música es apropiada para ambientes familiares y profesionales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-gradient-to-br from-amber-600 to-orange-500">
      <div class="container mx-auto max-w-4xl text-center text-white">
        <h2 class="text-3xl md:text-5xl font-bold font-second mb-6">
          Transforma la experiencia de tu restaurante
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          Únete a cientos de restaurantes que ya confían en Muusica.com
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="https://play.muusica.com" target="_blank" class="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors duration-300">
            Probar Gratis 14 Días
          </a>
          <a href="/planes" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors duration-300">
            Ver Planes y Precios
          </a>
        </div>
        <p class="text-sm opacity-75">
          Sin tarjeta de crédito • Cancela cuando quieras • Soporte en español
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'for',
})

// SEO Meta Tags
useHead({
  title: 'Música para Restaurantes - Licencias Comerciales Incluidas | Muusica.com',
  meta: [
    {
      name: 'description',
      content: 'Música especializada para restaurantes con licencias comerciales. Aumenta ventas hasta 15% y permanencia 20%. Sin pagar SACM ni SOMEXFON. Playlists para desayuno, comida y cena.'
    },
    {
      name: 'keywords',
      content: 'música para restaurantes, música comercial restaurante, playlist restaurante, música sin regalías restaurante, licencias musicales restaurante, SACM restaurante, ambiente musical restaurante'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Música para Restaurantes - Aumenta Ventas y Permanencia | Muusica.com'
    },
    {
      property: 'og:description',
      content: 'Música profesional que incrementa ventas 15% y permanencia 20%. Licencias comerciales incluidas. Sin pagar SACM ni SOMEXFON.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://muusica.com/para/restaurantes'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Música para Restaurantes - Aumenta Ventas y Permanencia | Muusica.com'
    },
    {
      name: 'twitter:description',
      content: 'Música profesional que incrementa ventas 15% y permanencia 20%. Licencias comerciales incluidas.'
    }
  ]
})
</script>

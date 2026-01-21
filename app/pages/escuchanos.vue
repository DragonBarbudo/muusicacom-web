<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
      <div class="container mx-auto max-w-4xl text-center">
        <h1 class="text-4xl md:text-6xl font-bold font-second mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text">
          Escúchanos
        </h1>
        <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8">
          Descubre la calidad de nuestra música comercial libre de regalías
        </p>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Experimenta cómo nuestras playlists pueden transformar el ambiente de tu negocio.
          Cada canción ha sido cuidadosamente seleccionada y producida para crear la atmósfera perfecta.
        </p>
      </div>
    </section>

    <!-- Music Playlists Section -->
    <section class="py-20 px-6" id="playlists-demo">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold font-second mb-4">
            Playlists por Tipo de Negocio
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400">
            Explora nuestras colecciones musicales especializadas
          </p>
        </div>

        <MusicPlaylists />
      </div>
    </section>

    <!-- Benefits of Demo Section -->
    <section class="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          ¿Por qué probar nuestras playlists?
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div class="i-carbon-music text-4xl text-blue-500 mb-4"></div>
            <h3 class="text-xl font-bold font-second mb-3">Calidad Profesional</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Música producida específicamente para ambientes comerciales, con mezcla y masterización profesional.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div class="i-carbon-categories text-4xl text-blue-500 mb-4"></div>
            <h3 class="text-xl font-bold font-second mb-3">Diversidad de Géneros</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Desde música relajante para cafeterías hasta ritmos energéticos para gimnasios y ambient para restaurantes.
            </p>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <div class="i-carbon-checkmark-filled text-4xl text-blue-500 mb-4"></div>
            <h3 class="text-xl font-bold font-second mb-3">100% Legal</h3>
            <p class="text-slate-600 dark:text-slate-400">
              Todas las canciones incluyen licencias comerciales. Sin preocupaciones por derechos de autor.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          Música para Cada Tipo de Negocio
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-cafe text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Cafeterías</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Ambiente relajado y acogedor</p>
          </div>

          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-cyclist text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Gimnasios</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Energía y motivación constante</p>
          </div>

          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-restaurant text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Restaurantes</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Elegancia y sofisticación</p>
          </div>

          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-shopping-cart text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Tiendas</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Ambiente alegre para comprar</p>
          </div>

          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-hotel text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Hoteles</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Lujo y confort</p>
          </div>

          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-champagne text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Bares</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Vibra nocturna perfecta</p>
          </div>

          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-face-satisfied text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Spas</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Relajación total</p>
          </div>

          <div class="border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 hover:border-blue-500 transition-colors duration-300">
            <div class="i-carbon-building text-3xl text-blue-500 mb-3"></div>
            <h3 class="text-lg font-bold font-second mb-2">Oficinas</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">Productividad y concentración</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Web Player CTA Section -->
    <section class="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div class="container mx-auto max-w-4xl text-center text-white">
        <h2 class="text-3xl md:text-5xl font-bold font-second mb-6">
          ¿Listo para la experiencia completa?
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          Accede a nuestro reproductor web con catálogo completo de más de 10,000 canciones
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://play.muusica.com" target="_blank" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors duration-300 inline-flex items-center justify-center gap-2">
            <span class="i-carbon-play-filled text-2xl"></span>
            Abrir Reproductor Web
          </a>
          <a href="/#contacto" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors duration-300">
            Contactar Ventas
          </a>
        </div>
        <p class="mt-6 text-sm opacity-75">
          Prueba gratuita disponible. No se requiere tarjeta de crédito.
        </p>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="text-yellow-500 flex gap-1">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-slate-700 dark:text-slate-300 mb-4 italic">
              "La música ha transformado completamente el ambiente de nuestra cafetería. Los clientes se quedan más tiempo y las ventas han aumentado notablemente."
            </p>
            <p class="font-bold">María González</p>
            <p class="text-sm text-slate-500">Café La Esquina, CDMX</p>
          </div>

          <div class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="text-yellow-500 flex gap-1">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-slate-700 dark:text-slate-300 mb-4 italic">
              "Perfecto para nuestro gimnasio. La música mantiene a los clientes motivados y ya no nos preocupamos por problemas de licencias."
            </p>
            <p class="font-bold">Carlos Ramírez</p>
            <p class="text-sm text-slate-500">FitPower Gym, Monterrey</p>
          </div>

          <div class="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="text-yellow-500 flex gap-1">
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
                <span class="i-carbon-star-filled"></span>
              </div>
            </div>
            <p class="text-slate-700 dark:text-slate-300 mb-4 italic">
              "La calidad del servicio es excepcional. Tienen playlists perfectas para cada momento del día en nuestro restaurante."
            </p>
            <p class="font-bold">Ana Martínez</p>
            <p class="text-sm text-slate-500">Restaurante Sabor Latino, Guadalajara</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Preview -->
    <section class="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          Preguntas Frecuentes
        </h2>

        <div class="space-y-6">
          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <summary class="font-bold font-second cursor-pointer text-lg">
              ¿Puedo usar esta música en mi negocio legalmente?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí, absolutamente. Todas nuestras canciones incluyen licencias comerciales completas que te permiten reproducir la música en tu negocio sin preocuparte por regalías adicionales o problemas legales con SACM u otras entidades de gestión.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <summary class="font-bold font-second cursor-pointer text-lg">
              ¿Cuántas canciones hay en el catálogo completo?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Nuestro catálogo cuenta con más de 10,000 canciones de alta calidad, organizadas en cientos de playlists temáticas y por tipo de negocio. Añadimos nuevas canciones regularmente.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
            <summary class="font-bold font-second cursor-pointer text-lg">
              ¿Necesito conexión a Internet para reproducir la música?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Puedes reproducir música en streaming o descargar las playlists para reproducción offline, según tu plan. Ofrecemos ambas opciones para adaptarnos a tus necesidades.
            </p>
          </details>
        </div>

        <div class="text-center mt-8">
          <a href="/#faqs" class="text-blue-500 hover:text-blue-600 font-bold">
            Ver todas las preguntas frecuentes →
          </a>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-second mb-6">
          Comienza a transformar tu negocio hoy
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400 mb-8">
          Únete a cientos de negocios en México que ya confían en Muusica.com
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/planes" class="btn">
            Ver Planes y Precios
          </a>
          <a href="https://play.muusica.com" target="_blank" class="btn-calm">
            Probar Gratis
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: 'Escúchanos - Prueba Nuestra Música Comercial | Muusica.com',
  meta: [
    {
      name: 'description',
      content: 'Escucha demos de nuestra música comercial libre de regalías. Playlists profesionales para cafeterías, gimnasios, restaurantes, tiendas y más. Prueba gratis en nuestro reproductor web.'
    },
    {
      name: 'keywords',
      content: 'música comercial, música para negocios, playlist cafetería, música gimnasio, música restaurante, música tienda, licencias musicales, música libre de regalías, música sin derechos de autor'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Escúchanos - Prueba Nuestra Música Comercial | Muusica.com'
    },
    {
      property: 'og:description',
      content: 'Descubre cómo nuestra música puede transformar el ambiente de tu negocio. Escucha demos gratuitos de playlists profesionales.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://muusica.com/escuchanos'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Escúchanos - Prueba Nuestra Música Comercial | Muusica.com'
    },
    {
      name: 'twitter:description',
      content: 'Descubre cómo nuestra música puede transformar el ambiente de tu negocio. Escucha demos gratuitos de playlists profesionales.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
      <div class="container mx-auto max-w-4xl text-center">
        <h1 class="text-4xl md:text-6xl font-bold font-second mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 inline-block text-transparent bg-clip-text">
          Planes Simples y Transparentes
        </h1>
        <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4">
          Todo incluido en una sola suscripción
        </p>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Acceso ilimitado a más de 10,000 canciones con licencia comercial para hasta 3 sucursales.
        </p>
      </div>
    </section>

    <!-- Pricing Cards Section -->
    <section class="py-20 px-6" id="precios">
      <div class="container mx-auto max-w-5xl">
        <div class="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <!-- Plan Mensual -->
          <div class="border-2 border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:shadow-xl bg-white dark:bg-slate-800">
            <div class="text-center mb-6">
              <div class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-bold mb-4">
                FLEXIBLE
              </div>
              <h2 class="text-3xl font-bold font-second mb-2">Plan Mensual</h2>
              <div class="flex items-baseline justify-center gap-2 mb-4">
                <span class="text-5xl font-bold">$175</span>
                <span class="text-slate-600 dark:text-slate-400">MXN/mes</span>
              </div>
              <p class="text-sm text-slate-500">Cancela cuando quieras</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Hasta 3 sucursales incluidas</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Acceso a +10,000 canciones</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Licencias comerciales incluidas</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Playlists por giro y ambiente</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Streaming ilimitado</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Música para zonas públicas</span>
              </li>
            </ul>

            <a href="https://play.muusica.com" target="_blank" class="block w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white text-center py-3 rounded-lg font-bold transition-colors duration-300">
              Comenzar Prueba Gratis
            </a>
          </div>

          <!-- Plan Anual (Destacado) -->
          <div class="border-2 border-blue-500 rounded-2xl p-8 relative shadow-2xl transform md:scale-105 bg-white dark:bg-slate-800">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              MEJOR VALOR
            </div>

            <div class="text-center mb-6">
              <div class="inline-block bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-4 py-1 rounded-full text-sm font-bold mb-4">
                AHORRA 1 MES
              </div>
              <h2 class="text-3xl font-bold font-second mb-2">Plan Anual</h2>
              <div class="flex items-baseline justify-center gap-2 mb-4">
                <span class="text-5xl font-bold">$1,925</span>
                <span class="text-slate-600 dark:text-slate-400">MXN/año</span>
              </div>
              <p class="text-sm text-slate-500">Un solo pago anual, cero preocupaciones</p>
            </div>

            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span class="font-bold">Todo lo del plan mensual</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Precio preferencial congelado</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Facturación simplificada (1 vez al año)</span>
              </li>
               <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Hasta 3 sucursales incluidas</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="i-carbon-checkmark-filled text-green-500 text-xl flex-shrink-0 mt-1"></span>
                <span>Certificado de licencia anual</span>
              </li>
            </ul>

            <a href="https://play.muusica.com" target="_blank" class="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-bold transition-all duration-300 shadow-md">
              Contratar Anualidad
            </a>
          </div>
        </div>

        <!-- Money Back Guarantee -->
        <div class="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <div class="i-carbon-checkmark-filled text-4xl text-green-500 mx-auto mb-4"></div>
          <h3 class="text-2xl font-bold font-second mb-2">Garantía de satisfacción 30 días</h3>
          <p class="text-slate-700 dark:text-slate-300">
            Prueba nuestro servicio sin riesgo. Si no es lo que esperabas, te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </section>

    <!-- Savings Calculator -->
    <section class="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          El costo inteligente de la música legal
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-8">
            <h3 class="text-2xl font-bold font-second mb-6 text-red-700 dark:text-red-400">
              Método Tradicional
            </h3>
            <ul class="space-y-3 mb-6">
              <li class="flex justify-between">
                <span>SACM (derechos de autor)</span>
                <span class="font-bold">~$450/mes</span>
              </li>
              <li class="flex justify-between">
                <span>SOMEXFON (fonogramas)</span>
                <span class="font-bold">~$350/mes</span>
              </li>
              <li class="flex justify-between">
                <span>Servicio de streaming comercial</span>
                <span class="font-bold">~$500/mes</span>
              </li>
              <li class="flex justify-between border-t-2 border-red-300 dark:border-red-700 pt-3 text-xl font-bold">
                <span>Total aproximado</span>
                <span class="text-red-600 dark:text-red-400">~$1,300/mes</span>
              </li>
            </ul>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Costo elevado, trámites burocráticos y gestiones separadas.
            </p>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-8">
            <h3 class="text-2xl font-bold font-second mb-6 text-green-700 dark:text-green-400">
              Con Muusica.com
            </h3>
            <ul class="space-y-3 mb-6">
              <li class="flex justify-between">
                <span>Plan Mensual</span>
                <span class="font-bold">$175/mes</span>
              </li>
              <li class="flex justify-between">
                <span>Licencias incluidas</span>
                <span class="font-bold">$0</span>
              </li>
              <li class="flex justify-between">
                <span>Hasta 3 sucursales</span>
                <span class="font-bold">Incluido</span>
              </li>
              <li class="flex justify-between border-t-2 border-green-300 dark:border-green-700 pt-3 text-xl font-bold">
                <span>Total</span>
                <span class="text-green-600 dark:text-green-400">$175/mes</span>
              </li>
            </ul>
            <div class="bg-green-100 dark:bg-green-900/40 rounded-lg p-4 text-center">
              <p class="font-bold text-lg text-green-700 dark:text-green-300">
                Ahorro mensual: $1,125 MXN
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold font-second text-center mb-12">
          Preguntas frecuentes
        </h2>

        <div class="space-y-6">
          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700" open>
            <summary class="font-bold font-second cursor-pointer text-lg">
              ¿Qué incluye mi suscripción?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Tu suscripción te da acceso ilimitado a más de 10,000 canciones con licencia para uso comercial en zonas públicas y negocios. Incluye la cobertura legal necesaria para evitar pagos a sociedades de gestión (SACM, SOMEXFON, etc.) en hasta 3 sucursales por cada membresía.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <summary class="font-bold font-second cursor-pointer text-lg">
              ¿Cómo funcionan las playlists?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Nuestras playlists están clasificadas por giro de negocio (restaurantes, gimnasios, tiendas, etc.), ambiente y época. Son curadas profesionalmente para generar la atmósfera adecuada para tus clientes.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <summary class="font-bold font-second cursor-pointer text-lg">
              ¿Hay contratos forzosos?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              No. En el plan mensual puedes cancelar cuando quieras. El plan anual es un pago único que te cubre por 12 meses con un precio preferencial.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <summary class="font-bold font-second cursor-pointer text-lg">
              ¿Las licencias están realmente incluidas?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Trabajamos directamente con los autores y titulares de derechos para ofrecerte un catálogo 100% legal y libre de gestiones externas. Al contratar, estás cubierto legalmente para reproducir nuestra música en tu negocio.
            </p>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div class="container mx-auto max-w-4xl text-center text-white">
        <h2 class="text-3xl md:text-5xl font-bold font-second mb-6">
          Ambienta tu negocio hoy mismo
        </h2>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          Prueba 14 días gratis. Sin compromisos.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://play.muusica.com" target="_blank" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors duration-300 inline-flex items-center justify-center gap-2">
            <span class="i-carbon-play-filled text-2xl"></span>
            Probar Gratis 14 Días
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: 'Planes y Precios - Música Comercial sin Regalías | Muusica.com',
  meta: [
    {
      name: 'description',
      content: 'Plan mensual desde $175 MXN con licencias comerciales incluidas. Cubre hasta 3 sucursales. Música profesional sin pagar regalías adicionales. Prueba gratis 14 días.'
    },
    {
      name: 'keywords',
      content: 'precios música comercial, planes música negocio, licencias musicales México, música sin regalías precio, música para tiendas, música ambiental'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Planes y Precios - Música Comercial sin Regalías | Muusica.com'
    },
    {
      property: 'og:description',
      content: 'Todo incluido por $175 MXN/mes. Cobertura para 3 sucursales. Música profesional con licencias.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://muusica.com/planes'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Planes y Precios - Música Comercial sin Regalías | Muusica.com'
    },
    {
      name: 'twitter:description',
      content: 'Todo incluido por $175 MXN/mes. Cobertura para 3 sucursales. Música profesional con licencias.'
    }
  ]
})
</script>

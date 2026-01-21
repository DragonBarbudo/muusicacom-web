<template>
  <!-- Hero Banner -->
  <Banner />

  <!-- Playlists Introduction -->
  <section class="py-24 px-6" id="playlists">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center max-w-4xl mx-auto mb-16">
        <div class="inline-block mb-6">
          <span class="text-sm font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
            Más de 10,000 canciones profesionales
          </span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold font-second mb-6 leading-tight">
          Playlists diseñadas para tu industria
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Música curada por expertos, clasificada por giro y ambiente.
          <span class="font-semibold text-slate-900 dark:text-slate-100">Relájate, energiza o divierte</span> con sonido profesional creado específicamente para espacios comerciales.
        </p>
      </div>
      <MusicPlaylists />
    </div>
  </section>

  <!-- Features with modern spacing -->
  <section class="py-20 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
    <div class="container mx-auto max-w-7xl">
      <Features />
    </div>
  </section>

  <!-- Images Carousel -->
  <section class="py-16">
    <CarouselOfImages />
  </section>

  <!-- How It Works -->
  <section class="py-24 px-6 bg-slate-50 dark:bg-slate-900" id="como-funciona">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold font-second mb-4">
          Comienza en 3 simples pasos
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400">
          Empieza a reproducir música profesional en minutos
        </p>
      </div>
      <HowItWorks />
    </div>
  </section>

  <!-- Pricing CTA -->
  <section class="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden" id="precios">
    <!-- Decorative elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto max-w-5xl text-center relative z-10">
      <div class="mb-8">
        <span class="inline-block text-sm font-bold tracking-wider uppercase text-blue-100 bg-white/10 px-4 py-2 rounded-full mb-6">
          Sin contratos · Sin sorpresas
        </span>
      </div>
      <h2 class="text-4xl md:text-6xl font-bold font-second mb-6 text-white">
        Planes transparentes desde $175/mes
      </h2>
      <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
        Todo incluido: música profesional, licencias legales, y soporte dedicado.
        <span class="font-semibold text-white">Sin costos ocultos.</span>
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/planes" class="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
          Ver Todos los Planes
        </a>
        <a href="https://play.muusica.com" target="_blank" class="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
          Probar Gratis 14 Días →
        </a>
      </div>
      <p class="text-sm text-blue-100 mt-6">
        ✓ Sin tarjeta de crédito · ✓ Cancela cuando quieras · ✓ Soporte 24/7
      </p>
    </div>
  </section>

  <!-- FAQs -->
  <section class="py-24 px-6" id="faqs">
    <div class="container mx-auto max-w-4xl">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold font-second mb-4">
          Preguntas frecuentes
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400">
          Todo lo que necesitas saber sobre Muusica.com
        </p>
      </div>
      <Faqs />
    </div>
  </section>

  <!-- Social Proof / Ideas -->
  <section class="py-20 px-6 bg-slate-50 dark:bg-slate-900">
    <div class="container mx-auto max-w-7xl">
      <IdeaBullets />
    </div>
  </section>

  <!-- Contact Form -->
  <section class="py-24 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900" id="contacto">
    <div class="container mx-auto max-w-5xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold font-second mb-4">
          ¿Tienes preguntas? Contáctanos
        </h2>
        <p class="text-xl text-slate-600 dark:text-slate-400">
          Nuestro equipo está listo para ayudarte
        </p>
      </div>
      <ContactForm />
    </div>
  </section>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

// SEO Meta Tags
useHead({
  title: 'Muusica.com - Música Comercial para tu Negocio | Sin Regalías SACM',
  meta: [
    {
      name: 'description',
      content: 'Música profesional para restaurantes, cafeterías, gimnasios, tiendas y más. Licencias comerciales incluidas, sin pagar SACM ni SOMEXFON. +10,000 canciones libres de regalías desde $175/mes.'
    },
    {
      name: 'keywords',
      content: 'música comercial, música para negocios, música sin regalías, licencias musicales México, SACM, SOMEXFON, música restaurante, música tienda, música gimnasio, música cafetería, playlist comercial'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Muusica.com - Música Comercial para tu Negocio | Sin Regalías'
    },
    {
      property: 'og:description',
      content: 'Música profesional con licencias incluidas. Incrementa ventas hasta 15%. Sin pagar SACM. +10,000 canciones desde $175/mes.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://muusica.com'
    },
    {
      property: 'og:image',
      content: 'https://muusica.com/assets/banner/f1.webp'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Muusica.com - Música Comercial para tu Negocio'
    },
    {
      name: 'twitter:description',
      content: 'Música profesional con licencias incluidas. Sin pagar SACM. +10,000 canciones desde $175/mes.'
    },
    {
      name: 'twitter:image',
      content: 'https://muusica.com/assets/banner/f1.webp'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://muusica.com'
    }
  ]
})
</script>
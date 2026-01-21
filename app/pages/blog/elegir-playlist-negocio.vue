<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-4xl">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
        <span class="i-carbon-arrow-left"></span>
        Volver al blog
      </NuxtLink>

      <span class="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
        Tips de Negocio
      </span>

      <h1 class="text-5xl font-bold font-second mb-6">
        Cómo Elegir la Playlist Perfecta para tu Tipo de Negocio
      </h1>

      <div class="flex gap-4 text-slate-600 dark:text-slate-400 mb-8">
        <span>20 Dic 2025</span>
        <span>•</span>
        <span>5 min</span>
      </div>

      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p class="text-xl mb-8">
          La música perfecta depende de tu industria, clientela y objetivos. Guía práctica para acertar siempre.
        </p>

        <h2>Paso 1: Define tu Cliente Ideal</h2>
        <ul>
          <li><strong>Edad:</strong> Millennials prefieren indie/pop, Boomers jazz/clásica</li>
          <li><strong>Momento del día:</strong> Mañana = suave, Noche = energético</li>
          <li><strong>Objetivo de visita:</strong> Trabajo = concentración, Social = ambiente</li>
        </ul>

        <h2>Paso 2: Match Música con Industria</h2>

        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="border-2 p-6 rounded-xl">
            <h3>Cafetería</h3>
            <p><strong>Géneros:</strong> Jazz, bossa nova, indie pop</p>
            <p><strong>Tempo:</strong> 80-100 BPM</p>
            <p><strong>Objetivo:</strong> Permanencia larga, ambiente productivo</p>
          </div>

          <div class="border-2 p-6 rounded-xl">
            <h3>Gimnasio</h3>
            <p><strong>Géneros:</strong> EDM, hip hop, rock energético</p>
            <p><strong>Tempo:</strong> 120-140 BPM</p>
            <p><strong>Objetivo:</strong> Motivación, energía constante</p>
          </div>

          <div class="border-2 p-6 rounded-xl">
            <h3>Restaurante</h3>
            <p><strong>Géneros:</strong> Lounge, jazz suave, world music</p>
            <p><strong>Tempo:</strong> 70-90 BPM</p>
            <p><strong>Objetivo:</strong> Conversación, ambiente sofisticado</p>
          </div>

          <div class="border-2 p-6 rounded-xl">
            <h3>Tienda Retail</h3>
            <p><strong>Géneros:</strong> Pop actual, top 40, feel-good</p>
            <p><strong>Tempo:</strong> 100-120 BPM</p>
            <p><strong>Objetivo:</strong> Energía de compra, positividad</p>
          </div>
        </div>

        <h2>Paso 3: Considera el Contexto</h2>
        <ol>
          <li><strong>Ubicación:</strong> Zona corporativa vs. zona trendy</li>
          <li><strong>Concepto:</strong> Moderno vs. tradicional</li>
          <li><strong>Precio:</strong> Premium requiere música más sofisticada</li>
          <li><strong>Identidad de marca:</strong> La música refuerza tu branding</li>
        </ol>

        <h2>Paso 4: Prueba y Ajusta</h2>
        <p>No existe fórmula perfecta. Observa:</p>
        <ul>
          <li>¿Clientes se quejan del volumen?</li>
          <li>¿Personal está cómodo?</li>
          <li>¿Las ventas mejoraron?</li>
          <li>¿Tiempo de permanencia aumentó?</li>
        </ul>

        <div class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-xl mt-12 text-center">
          <h3 class="text-2xl font-bold mb-4">Playlists Pre-Curadas por Expertos</h3>
          <p class="mb-6">Ahorra tiempo con nuestras +100 playlists especializadas por industria</p>
          <a href="/escuchanos" class="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold inline-block">
            Escuchar Demos
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Cómo Elegir la Playlist Perfecta para tu Negocio | Guía Práctica 2025',
  meta: [
    { name: 'description', content: 'Guía paso a paso para elegir la música perfecta según tu tipo de negocio, clientela y objetivos. Tips prácticos y recomendaciones por industria.' },
    { name: 'keywords', content: 'elegir playlist negocio, música por industria, tempo playlist, géneros musicales comerciales' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/blog/elegir-playlist-negocio' }]
})
</script>

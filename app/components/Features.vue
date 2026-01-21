<template>
    <section id="beneficios" class="container mx-auto mt-40 px-10">
        <!-- Encabezado -->
        <header class="max-w-3xl mx-auto text-center">
            <h2 class="text-2xl md:text-4xl  font-second">
                Beneficios de usar <MuusicaLogo onlytxt /> en tu negocio
            </h2>
            <p class="mt-10 light:text-blue-900">
                Música con licencia comercial, lista para sonar y pensada para espacios públicos.
            </p>
        </header>

        <!-- Grid de tarjetas -->
        <div class="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
            <!-- Card 1 -->
            
            <article
                v-for="item in featuresList"
                class="group relative overflow-hidden rounded-2xl bg-gradient-to-rb from-blue-900/90 to-blue-900/50 ring-1 ring-white/10 hover:ring-cyan-400/40 transition-all duration-300">
                <div
                    class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400/70 via-blue-500/70 to-cyan-300/70" />
                <div class="p-6">
                    <div class="flex items-center gap-3">
                        <span :class="item.icon" class=" text-2xl text-cyan-300" aria-hidden="true"></span>
                        <h3 class="text-xl text-white font-second">{{ item.title }}</h3>
                    </div>
                    <p class="mt-3 text-xl">
                        {{ item.description }}
                    </p>
                </div>
            </article>
            
        </div>


        <div class="my-10 px-4 md:px-0 max-w-4xl mx-auto flex flex-col items-center gap-10 mt-20">
    <h2 class="text-3xl md:text-4xl font-second font-bold text-center">
      Ambienta tu negocio con música de calidad.
    </h2>
     
  </div>

    </section>
</template>







<script setup lang="ts">

const featuresList = [
    {
        title: 'Música lista para reproducir',
        description: 'Playlists creadas profesionalmente para distintos ambientes.',
        icon: 'i-carbon-headphones'
    },
    {
        title: 'Licencias comerciales incluidas',
        description: 'No pagues regalías, todo el contenido está autorizado para uso público.',
        icon: 'i-carbon-license'
    },
    {
        title: 'Streaming y descarga',
        description: 'Escucha online o descarga tus canciones en MP3.',
        icon: 'i-carbon-cloud-app'
    },
    {
        title: 'Diseñada para tu tipo de negocio',
        description: 'Cafeterías, gimnasios, spas, tiendas, restaurantes y más.',
        icon: 'i-carbon-idea'
    },
    {
        title: 'Aumenta la permanencia y ventas',
        description: 'La música adecuada mejora la experiencia del cliente.',
        icon: 'i-carbon-chart-line'
    },
    {
        title: 'Soporte dedicado',
        description: 'Nuestro equipo te ayuda a elegir la mejor opción para tu negocio.',
        icon: 'i-carbon-headset'
    }
]

</script>


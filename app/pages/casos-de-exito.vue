<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Hero -->
      <div class="text-center mb-16">
        <h1 class="text-6xl font-bold font-second mb-6">
          Casos de Éxito Reales
        </h1>
        <p class="text-2xl text-slate-600 dark:text-slate-400 mb-8">
          Historias verificadas de negocios que transformaron sus ventas con música profesional
        </p>
      </div>

      <!-- Stats Overview -->
      <div class="grid md:grid-cols-4 gap-6 mb-20">
        <div class="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
          <div class="text-4xl font-bold text-green-600">+23%</div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Promedio aumento ventas</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
          <div class="text-4xl font-bold text-blue-600">+18min</div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Más permanencia</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
          <div class="text-4xl font-bold text-purple-600">+32%</div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Retención clientes</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl">
          <div class="text-4xl font-bold text-orange-600">$8.4k</div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Ahorro anual vs. tradicional</p>
        </div>
      </div>

      <!-- Case Study 1: La Trattoria -->
      <article class="mb-20 border-2 border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden">
        <div class="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-8">
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">Restaurante Italiano</span>
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm">Polanco, CDMX</span>
          </div>
          <h2 class="text-4xl font-bold font-second">La Trattoria Italiana</h2>
          <p class="text-xl mt-2 text-green-100">Aumentó ventas 23% y permanencia 18 minutos en 3 meses</p>
        </div>
        
        <div class="p-8 bg-white dark:bg-slate-800">
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div class="text-3xl font-bold text-green-600">+23%</div>
              <p class="text-slate-600 dark:text-slate-400">Ventas totales</p>
            </div>
            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div class="text-3xl font-bold text-green-600">+18min</div>
              <p class="text-slate-600 dark:text-slate-400">Permanencia</p>
            </div>
            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div class="text-3xl font-bold text-green-600">+35%</div>
              <p class="text-slate-600 dark:text-slate-400">Ventas vino/postre</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-4">El Desafío</h3>
          <p class="mb-4 text-slate-600 dark:text-slate-400">
            Restaurante de 120 lugares con caída del 15% en ventas durante 6 meses. Usaban Spotify Premium con playlists genéricas. Los clientes comían rápido y se iban (promedio 52 minutos).
          </p>

          <h3 class="text-2xl font-bold mb-4">La Solución</h3>
          <ul class="mb-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>• Playlists por horario: Jazz italiano (brunch), Bossa nova (comidas), Ópera moderna (cenas)</li>
            <li>• Volumen optimizado: 65dB comidas, 62dB cenas</li>
            <li>• Sistema multi-zona: Terraza vs. salón principal</li>
            <li>• Tempo reducido a 70-85 BPM para extender permanencia</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4">Resultados en 3 Meses</h3>
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-6">
            <ul class="space-y-2">
              <li>• <strong>Permanencia:</strong> 52 min → 70 min (+18 min)</li>
              <li>• <strong>Ticket promedio:</strong> $485 → $595 (+23%)</li>
              <li>• <strong>Ventas complementarias:</strong> +35% en vino y postres</li>
              <li>• <strong>Clientes recurrentes:</strong> +28%</li>
              <li>• <strong>ROI:</strong> 7,067% (recuperaron inversión en 2 semanas)</li>
            </ul>
          </div>

          <blockquote class="border-l-4 border-green-500 pl-6 italic text-slate-600 dark:text-slate-400">
            "Nunca pensamos que la música haría tal diferencia. Ahora los clientes se quedan más, piden más vino, más postres. Varios nos han dicho que es su restaurante favorito por el 'ambiente perfecto'."
            <footer class="mt-2 font-bold not-italic text-slate-900 dark:text-slate-100">— Marco & Sofia, Propietarios</footer>
          </blockquote>

          <div class="mt-6">
            <NuxtLink to="/blog/caso-exito-restaurante-italiano" class="text-green-600 font-bold hover:underline">
              Leer caso completo →
            </NuxtLink>
          </div>
        </div>
      </article>

      <!-- Case Study 2: Café Nube -->
      <article class="mb-20 border-2 border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden">
        <div class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8">
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">Cafetería</span>
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm">Condesa, CDMX</span>
          </div>
          <h2 class="text-4xl font-bold font-second">Café Nube</h2>
          <p class="text-xl mt-2 text-cyan-100">De 15 minutos a 40+ minutos de permanencia promedio</p>
        </div>
        
        <div class="p-8 bg-white dark:bg-slate-800">
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div class="text-3xl font-bold text-blue-600">+25min</div>
              <p class="text-slate-600 dark:text-slate-400">Permanencia</p>
            </div>
            <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div class="text-3xl font-bold text-blue-600">+18%</div>
              <p class="text-slate-600 dark:text-slate-400">Ticket promedio</p>
            </div>
            <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div class="text-3xl font-bold text-blue-600">+32%</div>
              <p class="text-slate-600 dark:text-slate-400">Ventas repostería</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-4">El Problema</h3>
          <p class="mb-4 text-slate-600 dark:text-slate-400">
            Cafetería de especialidad enfocada en trabajo remoto. La música de YouTube (gratuita) tenía anuncios constantes que molestaban a clientes trabajando. Permanencia promedio de solo 15 minutos.
          </p>

          <h3 class="text-2xl font-bold mb-4">La Implementación</h3>
          <ul class="mb-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>• <strong>Mañanas:</strong> Acoustic indie, folk (energía suave para despertar)</li>
            <li>• <strong>Mediodía:</strong> Lo-fi, jazz instrumental (concentración sin distracción)</li>
            <li>• <strong>Tardes:</strong> Indie pop, chill (social y relajado)</li>
            <li>• Volumen: 62-65dB (no interrumpe conversaciones)</li>
            <li>• Cero anuncios, cero interrupciones</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4">Impacto</h3>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
            <ul class="space-y-2">
              <li>• Permanencia: 15 min → 40+ min</li>
              <li>• Ventas de segundas tazas: +45%</li>
              <li>• Ventas de repostería: +32%</li>
              <li>• Clientes nuevos por recomendación: +28%</li>
              <li>• Reseñas mencionando "ambiente perfecto": 67%</li>
            </ul>
          </div>

          <blockquote class="border-l-4 border-blue-500 pl-6 italic text-slate-600 dark:text-slate-400">
            "Antes los clientes tomaban su café y se iban en 15 minutos. Ahora se quedan 40+ minutos trabajando, piden segundas tazas, y compran más repostería. La música cambió todo nuestro negocio."
            <footer class="mt-2 font-bold not-italic text-slate-900 dark:text-slate-100">— Laura Martínez, Dueña</footer>
          </blockquote>
        </div>
      </article>

      <!-- Case Study 3: Iron Box CrossFit -->
      <article class="mb-20 border-2 border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden">
        <div class="bg-gradient-to-r from-red-600 to-orange-500 text-white p-8">
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">Gimnasio CrossFit</span>
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm">Monterrey, NL</span>
          </div>
          <h2 class="text-4xl font-bold font-second">Iron Box CrossFit</h2>
          <p class="text-xl mt-2 text-orange-100">Retención de miembros +27% gracias a música energética profesional</p>
        </div>
        
        <div class="p-8 bg-white dark:bg-slate-800">
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <div class="text-3xl font-bold text-red-600">+27%</div>
              <p class="text-slate-600 dark:text-slate-400">Retención miembros</p>
            </div>
            <div class="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <div class="text-3xl font-bold text-red-600">+12%</div>
              <p class="text-slate-600 dark:text-slate-400">Tiempo entrenamiento</p>
            </div>
            <div class="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <div class="text-3xl font-bold text-red-600">+35%</div>
              <p class="text-slate-600 dark:text-slate-400">Satisfacción NPS</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-4">El Reto</h3>
          <p class="mb-4 text-slate-600 dark:text-slate-400">
            Box de CrossFit con 180 miembros. Usaban radio FM con anuncios constantes y música inadecuada (baladas, anuncios). Quejas frecuentes sobre la música. Churn rate del 8% mensual.
          </p>

          <h3 class="text-2xl font-bold mb-4">La Transformación</h3>
          <ul class="mb-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>• Playlists de alta intensidad: Hip hop, trap, rock pesado</li>
            <li>• Tempo constante: 130-150 BPM (óptimo para HIIT)</li>
            <li>• Control por instructores: Cada coach cambia música de su clase desde app</li>
            <li>• Sin anuncios que interrumpan WODs</li>
            <li>• Builds y drops sincronizados con intervalos</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4">Resultados Medibles</h3>
          <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-6">
            <ul class="space-y-2">
              <li>• <strong>Retención:</strong> Churn bajó de 8% a 4.5% mensual</li>
              <li>• <strong>Satisfacción:</strong> NPS subió de 42 a 67</li>
              <li>• <strong>Tiempo entrenamiento:</strong> +12% promedio</li>
              <li>• <strong>Nuevos miembros:</strong> +18% por recomendaciones</li>
              <li>• <strong>Menciones en reseñas:</strong> 73% mencionan la música como factor positivo</li>
            </ul>
          </div>

          <blockquote class="border-l-4 border-red-500 pl-6 italic text-slate-600 dark:text-slate-400">
            "Nuestros miembros nos dicen que la música es una de las razones por las que aman venir. Desde que cambiamos a Muusica.com, la retención subió 27% y las quejas por música desaparecieron completamente."
            <footer class="mt-2 font-bold not-italic text-slate-900 dark:text-slate-100">— Carlos Hernández, Director</footer>
          </blockquote>
        </div>
      </article>

      <!-- Case Study 4: Boutique Verde -->
      <article class="mb-20 border-2 border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden">
        <div class="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-8">
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">Tienda de Ropa</span>
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm">Roma Norte, CDMX</span>
          </div>
          <h2 class="text-4xl font-bold font-second">Boutique Verde</h2>
          <p class="text-xl mt-2 text-emerald-100">Ventas +18% en 2 meses con música trendy y moderna</p>
        </div>
        
        <div class="p-8 bg-white dark:bg-slate-800">
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div class="text-3xl font-bold text-green-600">+18%</div>
              <p class="text-slate-600 dark:text-slate-400">Ventas totales</p>
            </div>
            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div class="text-3xl font-bold text-green-600">+8min</div>
              <p class="text-slate-600 dark:text-slate-400">Permanencia</p>
            </div>
            <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div class="text-3xl font-bold text-green-600">+22%</div>
              <p class="text-slate-600 dark:text-slate-400">Ticket promedio</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-4">Situación Inicial</h3>
          <p class="mb-4 text-slate-600 dark:text-slate-400">
            Boutique de ropa sostenible para mujeres 25-40 años. Usaban Spotify gratuito con anuncios. La música genérica no reflejaba la identidad de marca moderna y consciente.
          </p>

          <h3 class="text-2xl font-bold mb-4">La Estrategia Musical</h3>
          <ul class="mb-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>• Indie pop, electronic chill, female artists empoderadas</li>
            <li>• Tempo medio (100-115 BPM) para exploración sin prisa</li>
            <li>• Música actual que refleja los valores de la marca</li>
            <li>• Sin anuncios de fast fashion o competencia</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4">El Impacto</h3>
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl mb-6">
            <ul class="space-y-2">
              <li>• Ventas: +18% en 2 meses</li>
              <li>• Permanencia en tienda: 12 min → 20 min</li>
              <li>• Prendas probadas por visita: +35%</li>
              <li>• Ticket promedio: +22%</li>
              <li>• Clientes mencionan "ambiente" en 64% de reseñas positivas</li>
            </ul>
          </div>

          <blockquote class="border-l-4 border-green-500 pl-6 italic text-slate-600 dark:text-slate-400">
            "Nuestra tienda aumentó ventas 18% en 2 meses. Los clientes permanecen más tiempo, prueban más prendas, y varios nos han dicho que 'les encanta el ambiente'. La inversión se pagó sola en semanas."
            <footer class="mt-2 font-bold not-italic text-slate-900 dark:text-slate-100">— Ana Gutiérrez, Dueña</footer>
          </blockquote>
        </div>
      </article>

      <!-- Case Study 5: Serenity Spa -->
      <article class="mb-20 border-2 border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden">
        <div class="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-8">
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">Spa & Wellness</span>
            <span class="bg-white/20 px-4 py-2 rounded-full text-sm">Polanco, CDMX</span>
          </div>
          <h2 class="text-4xl font-bold font-second">Serenity Spa</h2>
          <p class="text-xl mt-2 text-pink-100">Satisfacción +45% con música terapéutica profesional</p>
        </div>
        
        <div class="p-8 bg-white dark:bg-slate-800">
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div class="text-3xl font-bold text-purple-600">+45%</div>
              <p class="text-slate-600 dark:text-slate-400">Percepción calidad</p>
            </div>
            <div class="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div class="text-3xl font-bold text-purple-600">+38%</div>
              <p class="text-slate-600 dark:text-slate-400">Reservas repetidas</p>
            </div>
            <div class="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div class="text-3xl font-bold text-purple-600">+28%</div>
              <p class="text-slate-600 dark:text-slate-400">Paquetes premium</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-4">El Desafío</h3>
          <p class="mb-4 text-slate-600 dark:text-slate-400">
            Spa de lujo con 8 cabinas. Usaban playlists genéricas de YouTube con música repetitiva y anuncios que rompían la experiencia de relajación. Volumen inconsistente entre pistas.
          </p>

          <h3 class="text-2xl font-bold mb-4">La Solución Implementada</h3>
          <ul class="mb-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>• Música terapéutica con frecuencias 432Hz para cabinas</li>
            <li>• Ambient y new age para sala de espera</li>
            <li>• Water sounds para área húmeda (jacuzzi, sauna)</li>
            <li>• Control multi-zona independiente por área</li>
            <li>• Volumen perfectamente balanceado y normalizado</li>
          </ul>

          <h3 class="text-2xl font-bold mb-4">Resultados Extraordinarios</h3>
          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl mb-6">
            <ul class="space-y-2">
              <li>• <strong>Percepción de calidad:</strong> +45% en encuestas</li>
              <li>• <strong>Clientes recurrentes:</strong> +38%</li>
              <li>• <strong>Ventas paquetes premium:</strong> +28%</li>
              <li>• <strong>Calificación Google:</strong> 4.2 → 4.8 estrellas</li>
              <li>• <strong>Reseñas mencionan ambiente:</strong> 82%</li>
            </ul>
          </div>

          <blockquote class="border-l-4 border-purple-500 pl-6 italic text-slate-600 dark:text-slate-400">
            "La música es ahora parte integral de nuestra experiencia. Clientes nos dicen que 'nunca se habían relajado tanto'. La retención subió 38% y las reseñas mencionan constantemente el 'ambiente perfecto'."
            <footer class="mt-2 font-bold not-italic text-slate-900 dark:text-slate-100">— Patricia Sánchez, Directora</footer>
          </blockquote>
        </div>
      </article>

      <!-- CTA Final -->
      <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl text-center">
        <h2 class="text-4xl font-bold font-second mb-6">
          ¿Listo para Transformar Tu Negocio?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Únete a cientos de negocios que ya aumentaron sus ventas, retención y satisfacción con música profesional
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="https://play.muusica.com" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors">
            Prueba Gratis 14 Días
          </a>
          <NuxtLink to="/planes" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
            Ver Planes
          </NuxtLink>
        </div>
        <p class="text-sm text-blue-100 mt-6">
          Sin tarjeta de crédito • Cancela cuando quieras • Soporte 24/7
        </p>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Casos de Éxito Reales: Negocios que Aumentaron Ventas con Música | Muusica.com',
  meta: [
    { name: 'description', content: 'Historias verificadas de restaurantes, cafeterías, gimnasios, tiendas y spas que aumentaron ventas hasta 23% con música profesional. Resultados medibles y testimonios reales.' },
    { name: 'keywords', content: 'casos éxito música comercial, testimonios muusica, resultados música negocios, ROI música restaurante' },
    { property: 'og:title', content: 'Casos de Éxito Reales | Muusica.com' },
    { property: 'og:description', content: 'Historias verificadas de negocios que aumentaron ventas hasta 23% con música profesional' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://muusica.com/casos-de-exito' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Casos de Éxito Reales | Muusica.com' },
    { name: 'twitter:description', content: 'Negocios que transformaron sus ventas con música profesional' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/casos-de-exito' }]
})
</script>

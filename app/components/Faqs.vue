<template>
  <div class="py-20 ">
    <div class="container mx-auto px-6">
      <!-- Title -->
      <h2 class="text-4xl md:text-5xl f text-center  mb-16 font-second">
        Preguntas frecuentes 
        <div class="text-2xl md:text-3xl">sobre música para negocios</div>
      </h2>

      <!-- FAQ Accordion -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class=" rounded-2xl shadow-lg overflow-hidden bg-white/10 transition-all duration-300 hover:shadow-xl"
        >
          <!-- Question Button -->
          <button
            @click="toggleFaq(index)"
            class="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer"
          >
            <span class="text-xl md:text-2xl  fpr-4">
              {{ faq.question }}
            </span>
            <div
              class="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300"
              :class="{ 'rotate-180': openFaqs.includes(index) }"
            >
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <!-- Answer Content -->
          <div
            v-show="openFaqs.includes(index)"
            class="px-8 pb-6 transition-all duration-300 ont-second "
          >
            <div class="pt-4 border-t border-slate-200">
              <p class=" leading-relaxed text-base md:text-lg">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FAQ {
  question: string
  answer: string
}

// FAQ Content - easily editable array
const faqs: FAQ[] = [
  {
    question: "¿Puedo usar Spotify, YouTube Music o Apple Music en mi negocio?",
    answer: "No. Estas plataformas son solo para uso personal y doméstico. Reproducir su contenido en un espacio comercial (restaurantes, gimnasios, tiendas, etc.) viola los términos de servicio y puede generar sanciones por uso no autorizado de obras protegidas."
  },
  {
    question: "¿Qué riesgos hay al usar música sin licencias comerciales?",
    answer: "Usar música sin licencias puede considerarse exhibición pública sin autorización. Las disqueras o asociaciones de derechos de autor pueden imponer multas, clausuras o demandas legales."
  },
  {
    question: "¿De cuánto pueden ser las multas por usar música sin licencia?",
    answer: "Depende del país y del tamaño del establecimiento. En México, por ejemplo, las sanciones pueden ir desde $30,000 hasta más de $200,000 MXN, además de requerir pagos retroactivos por uso indebido."
  },
  {
    question: "¿Qué diferencia hay entre música con licencia y sin licencia?",
    answer: "La música con licencia permite su uso en espacios públicos y comerciales. Muusica.com ofrece canciones libres de regalías y con autorización explícita para que puedas reproducirlas sin preocuparte por infracciones legales."
  },
  {
    question: "¿Por qué es importante usar música legal en mi negocio?",
    answer: "Porque te protege legalmente y mejora la percepción profesional de tu marca. Además, la música adecuada influye en el estado de ánimo de tus clientes, su permanencia y sus decisiones de compra."
  },
  {
    question: "¿Qué beneficios obtengo al usar Muusica.com?",
    answer: "• Acceso a playlists temáticas listas para reproducir. • Licencias incluidas, sin costos adicionales. • Streaming o descargas en MP3 con alta calidad. • Actualizaciones semanales y nuevos lanzamientos. • Contenido diseñado para tu tipo de negocio."
  },
  {
    question: "¿Puedo usar la misma música en varios locales?",
    answer: "Sí. Nuestros planes incluyen licencias multisucursal para que varios puntos de venta suenen con la misma identidad musical, sin pagar tarifas duplicadas."
  },
  {
    question: "¿La música está pensada para mi tipo de negocio?",
    answer: "Exactamente. Tenemos playlists creadas para cafeterías, restaurantes, gimnasios, spas, hoteles, tiendas y bares, con ambientes como Relax, Energía, Tropical, Lounge o Pop Moderno."
  },
  {
    question: "¿Puedo personalizar la música según mis clientes o marca?",
    answer: "Sí. Ofrecemos música personalizada que se adapta a la identidad de tu negocio: estilo, ritmo, energía, horarios o tipo de público. Ideal para marcas que buscan una experiencia sonora exclusiva."
  },
  {
    question: "¿Qué resultados puedo esperar al ambientar mi negocio con Muusica?",
    answer: "Estudios demuestran que la música adecuada aumenta el tiempo de permanencia, mejora el estado de ánimo y puede incrementar las ventas hasta un 15%. Con Muusica.com, tu ambiente sonoro se convierte en una herramienta de fidelización."
  }
]

// State for managing open/closed FAQs
const openFaqs = ref<number[]>([])

// Toggle FAQ open/close
const toggleFaq = (index: number) => {
  if (openFaqs.value.includes(index)) {
    // Close the FAQ
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    // Open the FAQ
    openFaqs.value.push(index)
  }
}
</script>

<style scoped>
/* Smooth transitions for accordion animation */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}


</style>
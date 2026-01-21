<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-6xl font-bold font-second mb-6 bg-gradient-to-r from-blue-600 to-purple-500 inline-block text-transparent bg-clip-text">
            Blog de Muusica.com
          </h1>
          <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Guías, consejos y noticias sobre música comercial para tu negocio
          </p>
        </div>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mb-12">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar artículos..."
              class="w-full px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <span class="i-carbon-search absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-slate-400"></span>
          </div>
        </div>

        <!-- Categories -->
        <div class="flex flex-wrap gap-3 justify-center mb-12">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all duration-300',
              selectedCategory === cat
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="py-12 px-6 bg-white dark:bg-slate-900">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-2xl font-bold font-second mb-8">Artículo Destacado</h2>
        <NuxtLink
          :to="featuredArticle.slug"
          class="block bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group"
        >
          <div class="grid md:grid-cols-2 gap-0">
            <div class="p-8 md:p-12 text-white flex flex-col justify-center">
              <div class="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-bold mb-4 w-fit">
                {{ featuredArticle.category }}
              </div>
              <h3 class="text-3xl md:text-4xl font-bold font-second mb-4 group-hover:text-blue-100 transition-colors">
                {{ featuredArticle.title }}
              </h3>
              <p class="text-blue-100 text-lg mb-6 leading-relaxed">
                {{ featuredArticle.excerpt }}
              </p>
              <div class="flex items-center gap-4 text-sm">
                <span class="flex items-center gap-2">
                  <span class="i-carbon-calendar"></span>
                  {{ featuredArticle.date }}
                </span>
                <span class="flex items-center gap-2">
                  <span class="i-carbon-time"></span>
                  {{ featuredArticle.readTime }} min lectura
                </span>
              </div>
            </div>
            <div class="relative h-64 md:h-auto bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
              <span class="i-carbon-document text-9xl text-white/30"></span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold font-second mb-12">Todos los Artículos</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="article in filteredArticles"
            :key="article.slug"
            :to="article.slug"
            class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
          >
            <!-- Image placeholder -->
            <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span class="i-carbon-document text-6xl text-white/40"></span>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
                {{ article.category }}
              </div>

              <h3 class="text-xl font-bold font-second mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {{ article.title }}
              </h3>

              <p class="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                {{ article.excerpt }}
              </p>

              <div class="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span class="flex items-center gap-2">
                  <span class="i-carbon-calendar"></span>
                  {{ article.date }}
                </span>
                <span class="flex items-center gap-2">
                  <span class="i-carbon-time"></span>
                  {{ article.readTime }} min
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- No results -->
        <div v-if="filteredArticles.length === 0" class="text-center py-12">
          <span class="i-carbon-document-blank text-6xl text-slate-300 dark:text-slate-600 mb-4"></span>
          <p class="text-xl text-slate-600 dark:text-slate-400">
            No se encontraron artículos con esos criterios
          </p>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA - HIDDEN -->
    <section v-if="false" class="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600">
      <div class="container mx-auto max-w-4xl text-center text-white">
        <span class="i-carbon-email text-5xl mx-auto mb-6"></span>
        <h2 class="text-3xl md:text-4xl font-bold font-second mb-4">
          Suscríbete a nuestro newsletter
        </h2>
        <p class="text-xl mb-8 opacity-90">
          Recibe consejos semanales sobre música para negocios directamente en tu inbox
        </p>
        <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            v-model="newsletterEmail"
            type="email"
            required
            placeholder="tu@email.com"
            class="flex-1 px-6 py-4 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const selectedCategory = ref('Todos')
const newsletterEmail = ref('')

const categories = [
  'Todos',
  'Guías Legales',
  'Tips de Negocio',
  'Música y Psicología',
  'Casos de Éxito',
  'Industria Musical'
]

interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: number
}

const featuredArticle: Article = {
  slug: '/blog/multas-sacm-mexico-2025',
  title: 'Guía Completa: Multas SACM en México 2025',
  excerpt: 'Todo lo que necesitas saber sobre las multas por uso indebido de música comercial, cómo evitarlas y proteger tu negocio legalmente.',
  category: 'Guías Legales',
  date: '30 Dic 2025',
  readTime: 8
}

const articles: Article[] = [
  {
    slug: '/blog/10-errores-musica-restaurantes',
    title: '10 Errores que Cometen los Restaurantes con la Música',
    excerpt: 'Descubre los errores más comunes que pueden estar costándote clientes y ventas, y cómo solucionarlos fácilmente.',
    category: 'Tips de Negocio',
    date: '28 Dic 2025',
    readTime: 6
  },
  {
    slug: '/blog/musica-aumenta-ventas-estudios',
    title: 'Cómo la Música Aumenta las Ventas: Estudios Científicos',
    excerpt: 'Investigaciones demuestran que la música correcta puede incrementar tus ventas hasta un 15%. Te explicamos cómo y por qué.',
    category: 'Música y Psicología',
    date: '25 Dic 2025',
    readTime: 10
  },
  {
    slug: '/blog/sacm-vs-somexfon-vs-muusica',
    title: 'SACM vs SOMEXFON vs Muusica.com: Comparativa 2025',
    excerpt: 'Comparamos costos, trámites y beneficios de cada opción para que tomes la mejor decisión para tu negocio.',
    category: 'Guías Legales',
    date: '22 Dic 2025',
    readTime: 7
  },
  {
    slug: '/blog/elegir-playlist-negocio',
    title: 'Cómo Elegir la Playlist Perfecta para tu Tipo de Negocio',
    excerpt: 'Guía práctica para seleccionar la música ideal según tu industria, clientela y objetivos comerciales.',
    category: 'Tips de Negocio',
    date: '20 Dic 2025',
    readTime: 5
  },
  {
    slug: '/blog/caso-exito-restaurante-italiano',
    title: 'Caso de Éxito: Cómo un Restaurante Italiano Aumentó Ventas 23%',
    excerpt: 'Historia real de La Trattoria y cómo la música correcta transformó su negocio en 3 meses.',
    category: 'Casos de Éxito',
    date: '18 Dic 2025',
    readTime: 8
  }
]

const filteredArticles = computed(() => {
  let filtered = [...articles]

  // Filter by category
  if (selectedCategory.value !== 'Todos') {
    filtered = filtered.filter(a => a.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(query) ||
      a.excerpt.toLowerCase().includes(query) ||
      a.category.toLowerCase().includes(query)
    )
  }

  return filtered
})

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log('Newsletter subscription:', newsletterEmail.value)
  alert('¡Gracias por suscribirte! Pronto recibirás nuestro contenido.')
  newsletterEmail.value = ''
}

// SEO Meta Tags
useHead({
  title: 'Blog de Música Comercial - Guías y Consejos para Negocios | Muusica.com',
  meta: [
    {
      name: 'description',
      content: 'Blog especializado en música comercial para negocios en México. Guías legales, tips para aumentar ventas, casos de éxito y todo sobre SACM, SOMEXFON y licencias musicales.'
    },
    {
      name: 'keywords',
      content: 'blog música comercial, guías SACM, música para negocios, licencias musicales México, tips restaurantes, aumentar ventas música, multas SACM'
    },
    // Open Graph
    {
      property: 'og:title',
      content: 'Blog de Música Comercial para Negocios | Muusica.com'
    },
    {
      property: 'og:description',
      content: 'Guías, consejos y casos de éxito sobre música comercial. Aprende a proteger tu negocio y aumentar ventas.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://muusica.com/blog'
    },
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Blog de Música Comercial para Negocios'
    },
    {
      name: 'twitter:description',
      content: 'Guías legales, tips y casos de éxito sobre música para tu negocio'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://muusica.com/blog'
    }
  ]
})
</script>

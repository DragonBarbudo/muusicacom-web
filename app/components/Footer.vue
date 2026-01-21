<template>
  <footer class="bg-slate-900 text-white py-16">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 items-start">

        <!-- Logo and Business Description -->
        <div class="md:col-span-2 space-y-6">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <MuusicaLogo class="h-8 w-auto" onlytxt />
          </div>
          
          <!-- SEO Business Description -->
          <div class="max-w-2xl">
            <p class="text-slate-300 leading-relaxed mb-4">
              <strong class="text-white">Muusica.com</strong> es la plataforma líder en México para música comercial libre de regalías. 
              Ofrecemos soluciones musicales profesionales para restaurantes, cafeterías, gimnasios, spas, hoteles, tiendas y bares 
              que buscan crear el ambiente perfecto para sus clientes.
            </p>
            <p class="text-slate-400 leading-relaxed mb-4">
              Nuestro catálogo cuenta con más de 10,000 pistas de alta calidad, organizadas por giro comercial y tipo de ambiente. 
              Todas nuestras canciones incluyen licencias comerciales pre-autorizadas, garantizando el cumplimiento legal y 
              evitando sanciones por uso indebido de música protegida por derechos de autor.
            </p>
            <p class="text-slate-400 leading-relaxed">
              Con Muusica.com, los negocios pueden reproducir música profesional sin preocuparse por regalías adicionales, 
              multas o problemas legales. Ayudamos a crear experiencias sonoras que incrementan la permanencia de clientes, 
              mejoran el ambiente comercial y potencian las ventas hasta un 15%.
            </p>
          </div>
        </div>

        <!-- Quick Links & Industries -->
        <div class="md:col-span-2 grid md:grid-cols-3 gap-8">
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4 font-second">Enlaces rápidos</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/escuchanos" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Escúchanos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/planes" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Planes y precios
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Blog
                </NuxtLink>
              </li>
              <li>
                <a href="/#como-funciona" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  ¿Cómo funciona?
                </a>
              </li>
            </ul>
          </div>

          <!-- Industries -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4 font-second">Soluciones</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/para/restaurantes" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Restaurantes
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/para/cafeterias" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Cafeterías
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/para/gimnasios" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Gimnasios
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/para/tiendas" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Tiendas
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/para/spas" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  Spas
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold text-white mb-4 font-second">Contacto</h3>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contacto@muusica.com" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  contacto@muusica.com
                </a>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zM6 4a1 1 0 011-1h6a1 1 0 011 1v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4z" clip-rule="evenodd" />
                </svg>
                <a href="tel:+525555123456" class="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                  +52 (55) 5512-3456
                </a>
              </div>
              <div class="flex items-start space-x-3">
                <svg class="w-5 h-5 text-blue-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <span class="text-slate-400">
                  Ciudad de México, México
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-slate-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <!-- Copyright -->
          <div class="text-slate-500 text-sm">
            © {{ currentYear }} Muusica.com. Todos los derechos reservados. 
            Música libre de regalías para uso comercial.
          </div>

          <!-- Legal Links -->
          <div class="flex space-x-6 text-sm">
            <a href="/privacidad" class="text-slate-500 hover:text-blue-400 transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="/terminos" class="text-slate-500 hover:text-blue-400 transition-colors duration-300">
              Términos de Uso
            </a>
            <a href="/licencias" class="text-slate-500 hover:text-blue-400 transition-colors duration-300">
              Licencias Musicales
            </a>
          </div>

          <!-- Social Media -->
          <div class="flex space-x-4">
            <a href="https://facebook.com/muusica" class="text-slate-500 hover:text-blue-400 transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://instagram.com/muusicacom" class="text-slate-500 hover:text-blue-400 transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C3.773 14.116 3.454 11.99 4.267 10.042c.814-1.948 2.320-3.478 4.133-4.2 1.813-.722 3.850-.722 5.663 0 1.813.722 3.319 2.252 4.133 4.2.813 1.948.494 4.074-.879 5.649-.875.807-2.026 1.297-3.323 1.297H8.449z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/muusica" class="text-slate-500 hover:text-blue-400 transition-colors duration-300">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Get current year for copyright
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Smooth hover transitions */
a {
  transition: all 0.3s ease;
}


</style>
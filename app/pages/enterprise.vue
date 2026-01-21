<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-6xl">

      <!-- Hero -->
      <div class="text-center mb-16">
        <div class="inline-block bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-6 py-3 rounded-full font-bold mb-6">
          🏢 Soluciones Enterprise
        </div>
        <h1 class="text-6xl font-bold font-second mb-6">
          Música Profesional para Cadenas y Corporativos
        </h1>
        <p class="text-2xl text-slate-600 dark:text-slate-400 mb-8">
          Gestión centralizada, control multi-sucursal, y soporte dedicado para empresas con 5+ ubicaciones
        </p>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="mailto:enterprise@muusica.com" class="btn-primary px-12 py-4 text-lg">
            Solicitar Demo Personalizada
          </a>
          <NuxtLink to="/planes" class="btn-secondary px-12 py-4 text-lg">
            Ver Planes
          </NuxtLink>
        </div>
      </div>

      <!-- Clientes Enterprise -->
      <section class="mb-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-12 rounded-3xl text-center">
        <p class="text-xl font-semibold mb-6">Confían en Nosotros</p>
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="text-4xl font-bold text-blue-600">50+</div>
            <p class="text-slate-600 dark:text-slate-400">Cadenas Enterprise</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-green-600">200+</div>
            <p class="text-slate-600 dark:text-slate-400">Sucursales Activas</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-purple-600">99.9%</div>
            <p class="text-slate-600 dark:text-slate-400">Uptime SLA</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-orange-600">2hrs</div>
            <p class="text-slate-600 dark:text-slate-400">Respuesta Soporte</p>
          </div>
        </div>
      </section>

      <!-- Características Enterprise -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-12 text-center">
          Características para Empresas
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div class="text-4xl mb-4">🎛️</div>
            <h3 class="text-2xl font-bold mb-4">Panel de Control Centralizado</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Gestiona todas tus sucursales desde un solo panel. Cambia música simultáneamente en 50+ ubicaciones con un click.
            </p>
            <ul class="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✅ Vista de todas las sucursales en tiempo real</li>
              <li>✅ Control remoto individual o masivo</li>
              <li>✅ Reportes de reproducción por ubicación</li>
              <li>✅ Gestión de permisos por rol (admin, gerente, staff)</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div class="text-4xl mb-4">🎵</div>
            <h3 class="text-2xl font-bold mb-4">Playlists Personalizadas por Marca</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Música curada específicamente para tu identidad de marca. Consistencia en todas las ubicaciones.
            </p>
            <ul class="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✅ Curadores dedicados a tu cuenta</li>
              <li>✅ Playlists exclusivas para tu cadena</li>
              <li>✅ Música que refleja tu branding</li>
              <li>✅ Actualizaciones mensuales según feedback</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div class="text-4xl mb-4">📊</div>
            <h3 class="text-2xl font-bold mb-4">Analytics y Reportes</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Data detallada sobre reproducción, preferencias, y correlación con ventas.
            </p>
            <ul class="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✅ Dashboard ejecutivo con KPIs</li>
              <li>✅ Reportes por sucursal y región</li>
              <li>✅ Análisis de horarios pico</li>
              <li>✅ Export a Excel/CSV</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div class="text-4xl mb-4">🔐</div>
            <h3 class="text-2xl font-bold mb-4">Seguridad y Compliance</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Cumplimiento legal garantizado para todas tus ubicaciones. Protección corporativa total.
            </p>
            <ul class="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✅ Licencias master para toda la cadena</li>
              <li>✅ Documentación legal completa</li>
              <li>✅ SSO / SAML 2.0 opcional</li>
              <li>✅ Auditorías de compliance trimestrales</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div class="text-4xl mb-4">👨‍💼</div>
            <h3 class="text-2xl font-bold mb-4">Account Manager Dedicado</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Un gerente de cuenta exclusivo que conoce tu negocio y responde en 2 horas.
            </p>
            <ul class="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✅ Onboarding personalizado</li>
              <li>✅ Llamadas trimestrales de revisión</li>
              <li>✅ Soporte prioritario 24/7</li>
              <li>✅ Línea directa de WhatsApp</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700">
            <div class="text-4xl mb-4">🔌</div>
            <h3 class="text-2xl font-bold mb-4">Integraciones y API</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Integra Muusica.com con tus sistemas existentes (POS, ERP, BI).
            </p>
            <ul class="space-y-2 text-slate-600 dark:text-slate-400">
              <li>✅ REST API documentada</li>
              <li>✅ Webhooks para eventos</li>
              <li>✅ SDKs para JavaScript/Python</li>
              <li>✅ Soporte técnico para integración</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Casos de Uso -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-12 text-center">
          Casos de Uso Enterprise
        </h2>
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">🍽️ Cadenas de Restaurantes</h3>
            <p class="text-blue-100 mb-4">
              Ejemplo: Cadena con 25 restaurantes en 8 ciudades
            </p>
            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Problema:</strong> Música inconsistente, cada sucursal usa su propio Spotify
              </div>
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Solución:</strong> Control centralizado, misma identidad musical en todas las ubicaciones
              </div>
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Resultado:</strong> +15% ventas promedio, brand consistency 100%
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">🏨 Cadenas Hoteleras</h3>
            <p class="text-green-100 mb-4">
              Ejemplo: Hotel boutique con 15 propiedades
            </p>
            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Problema:</strong> Diferentes zonas (lobby, spa, restaurant, gym) necesitan música diferente
              </div>
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Solución:</strong> Multi-zona por propiedad, playlists específicas por área
              </div>
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Resultado:</strong> +28% satisfacción huéspedes en encuestas
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-4">🛍️ Retail Multi-Marca</h3>
            <p class="text-purple-100 mb-4">
              Ejemplo: Grupo con 40 tiendas de 3 marcas diferentes
            </p>
            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Problema:</strong> Cada marca necesita música diferente según target
              </div>
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Solución:</strong> Perfiles musicales por marca, control centralizado
              </div>
              <div class="bg-white/10 p-4 rounded-lg">
                <strong>Resultado:</strong> +12% permanencia, identidad clara por marca
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Precios Enterprise -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Precios Enterprise
        </h2>
        <div class="max-w-3xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 text-white p-12 rounded-3xl">
          <div class="text-center mb-8">
            <h3 class="text-3xl font-bold mb-4">Desde $4,500 MXN/mes</h3>
            <p class="text-slate-300">Para 10 ubicaciones. Precio por ubicación disminuye con volumen.</p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex justify-between items-center border-b border-slate-700 pb-3">
              <span>10-25 ubicaciones</span>
              <span class="font-bold">$450/mes por ubicación</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-700 pb-3">
              <span>26-50 ubicaciones</span>
              <span class="font-bold">$400/mes por ubicación</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-700 pb-3">
              <span>51-100 ubicaciones</span>
              <span class="font-bold">$350/mes por ubicación</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-700 pb-3">
              <span>100+ ubicaciones</span>
              <span class="font-bold">Precio personalizado</span>
            </div>
          </div>

          <div class="bg-white/10 p-6 rounded-xl mb-8">
            <h4 class="font-bold mb-3">Incluido en Enterprise:</h4>
            <ul class="space-y-2 text-sm text-slate-200">
              <li>✅ Panel de control centralizado</li>
              <li>✅ Playlists personalizadas para tu marca</li>
              <li>✅ Account Manager dedicado</li>
              <li>✅ Analytics y reportes ejecutivos</li>
              <li>✅ API y webhooks</li>
              <li>✅ SLA 99.9% uptime</li>
              <li>✅ Soporte prioritario 24/7</li>
              <li>✅ Onboarding personalizado</li>
            </ul>
          </div>

          <div class="text-center">
            <a href="mailto:enterprise@muusica.com" class="bg-white text-slate-900 px-10 py-4 rounded-lg font-bold inline-block hover:bg-slate-100 transition-colors">
              Solicitar Cotización Personalizada
            </a>
          </div>
        </div>
      </section>

      <!-- Proceso de Implementación -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-12 text-center">
          Proceso de Implementación
        </h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 class="font-bold mb-2">Consultoría Inicial</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Llamada con tu Account Manager para entender necesidades
            </p>
            <p class="text-xs text-slate-500 mt-2">Semana 1</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 class="font-bold mb-2">Diseño de Solución</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Curadores crean playlists personalizadas para tu marca
            </p>
            <p class="text-xs text-slate-500 mt-2">Semana 2-3</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 class="font-bold mb-2">Implementación</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Rollout por fases en todas las ubicaciones
            </p>
            <p class="text-xs text-slate-500 mt-2">Semana 4-6</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">✓</div>
            <h3 class="font-bold mb-2">Optimización</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Ajustes basados en feedback y métricas
            </p>
            <p class="text-xs text-slate-500 mt-2">Continuo</p>
          </div>
        </div>
      </section>

      <!-- FAQ Enterprise -->
      <section class="mb-20">
        <h2 class="text-4xl font-bold font-second mb-8 text-center">
          Preguntas Frecuentes Enterprise
        </h2>
        <div class="max-w-3xl mx-auto space-y-4">
          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <summary class="font-bold cursor-pointer text-lg">
              ¿Cuál es el mínimo de ubicaciones para Enterprise?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Recomendamos Enterprise a partir de 5 ubicaciones, pero diseñamos soluciones desde 3. El plan Pro funciona bien para 1-4 ubicaciones.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <summary class="font-bold cursor-pointer text-lg">
              ¿Ofrecen contratos anuales con descuento?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Contratos anuales reciben 15% de descuento. Contratos bianuales 20%. Flexibilidad de facturación mensual, trimestral o anual.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <summary class="font-bold cursor-pointer text-lg">
              ¿Pueden integrarse con nuestro sistema POS?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Sí. Tenemos integraciones con los principales POS (Aloha, Oracle Micros, Toast, Square). Para sistemas custom, nuestra API REST permite integraciones personalizadas.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <summary class="font-bold cursor-pointer text-lg">
              ¿Qué incluye el SLA de 99.9%?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Garantizamos 99.9% de disponibilidad mensual. Si no cumplimos, recibes crédito proporcional. Incluye monitoreo 24/7, failover automático, y soporte prioritario.
            </p>
          </details>

          <details class="bg-white dark:bg-slate-800 p-6 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <summary class="font-bold cursor-pointer text-lg">
              ¿Puedo hacer un piloto antes de rollout completo?
            </summary>
            <p class="mt-4 text-slate-600 dark:text-slate-400">
              Absolutamente. Recomendamos pilotos de 30-60 días en 2-3 ubicaciones representativas. Medimos resultados antes de expandir a toda la cadena.
            </p>
          </details>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-16 rounded-3xl text-center">
        <h2 class="text-5xl font-bold font-second mb-6">
          Hablemos de Tu Proyecto
        </h2>
        <p class="text-2xl mb-8 max-w-2xl mx-auto">
          Agenda una demo personalizada con nuestro equipo Enterprise
        </p>
        <div class="flex gap-4 justify-center flex-wrap mb-6">
          <a href="mailto:enterprise@muusica.com" class="bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors">
            enterprise@muusica.com
          </a>
          <a href="tel:+525555123456" class="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
            +52 (55) 5512-3456
          </a>
        </div>
        <p class="text-blue-100">
          Respuesta en menos de 2 horas hábiles
        </p>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Soluciones Enterprise | Cadenas y Corporativos | Muusica.com',
  meta: [
    { name: 'description', content: 'Soluciones de música comercial para cadenas y corporativos. Gestión centralizada, control multi-sucursal, Account Manager dedicado. Desde $350/mes por ubicación.' },
    { name: 'keywords', content: 'música enterprise, soluciones corporativas música, música cadenas restaurantes, multi-sucursal música comercial' },
    { property: 'og:title', content: 'Soluciones Enterprise | Muusica.com' },
    { property: 'og:description', content: 'Gestión centralizada de música para cadenas y corporativos con 5+ ubicaciones' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://muusica.com/enterprise' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Soluciones Enterprise | Muusica.com' },
    { name: 'twitter:description', content: 'Música profesional para cadenas y corporativos' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/enterprise' }]
})
</script>

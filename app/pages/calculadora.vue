<template>
  <div class="min-h-screen pt-32 pb-16 px-6">
    <div class="container mx-auto max-w-4xl">

      <!-- Hero -->
      <div class="text-center mb-12">
        <h1 class="text-6xl font-bold font-second mb-6">
          Calculadora de Ahorros
        </h1>
        <p class="text-2xl text-slate-600 dark:text-slate-400">
          Descubre cuánto puedes ahorrar cambiando a Muusica.com
        </p>
      </div>

      <!-- Calculator -->
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-3xl mb-12">

        <!-- Tipo de negocio -->
        <div class="mb-8">
          <label class="block text-lg font-bold mb-4">1. ¿Qué tipo de negocio tienes?</label>
          <div class="grid md:grid-cols-3 gap-4">
            <button
              v-for="tipo in tiposNegocio"
              :key="tipo.value"
              @click="negocioSeleccionado = tipo.value"
              :class="[
                'p-4 rounded-xl border-2 transition-all',
                negocioSeleccionado === tipo.value
                  ? 'border-blue-600 bg-blue-100 dark:bg-blue-900/40'
                  : 'border-slate-300 dark:border-slate-600 hover:border-blue-400'
              ]"
            >
              <div class="text-3xl mb-2">{{ tipo.emoji }}</div>
              <div class="font-bold">{{ tipo.label }}</div>
            </button>
          </div>
        </div>

        <!-- Sistema actual -->
        <div class="mb-8">
          <label class="block text-lg font-bold mb-4">2. ¿Qué usas actualmente para música?</label>
          <div class="grid md:grid-cols-2 gap-4">
            <button
              v-for="sistema in sistemasActuales"
              :key="sistema.value"
              @click="sistemaActual = sistema.value"
              :class="[
                'p-4 rounded-xl border-2 transition-all text-left',
                sistemaActual === sistema.value
                  ? 'border-blue-600 bg-blue-100 dark:bg-blue-900/40'
                  : 'border-slate-300 dark:border-slate-600 hover:border-blue-400'
              ]"
            >
              <div class="font-bold mb-1">{{ sistema.label }}</div>
              <div class="text-sm text-slate-600 dark:text-slate-400">{{ sistema.costo }}</div>
            </button>
          </div>
        </div>

        <!-- Número de ubicaciones -->
        <div class="mb-8">
          <label class="block text-lg font-bold mb-4">3. ¿Cuántas ubicaciones/zonas tienes?</label>
          <input
            v-model.number="numeroUbicaciones"
            type="number"
            min="1"
            max="50"
            class="w-full p-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 dark:bg-slate-800 text-lg"
          />
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Ej: Si tienes múltiples zonas (pesas, cardio, terraza, salón) cuenta cada zona
          </p>
        </div>

      </div>

      <!-- Results -->
      <div v-if="negocioSeleccionado && sistemaActual" class="space-y-8">

        <!-- Comparación de Costos -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Costo Actual -->
          <div class="bg-red-50 dark:bg-red-900/20 p-8 rounded-3xl border-2 border-red-200 dark:border-red-800">
            <h3 class="text-2xl font-bold mb-6 text-red-600">Sistema Actual</h3>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-slate-600 dark:text-slate-400">{{ sistemasActuales.find(s => s.value === sistemaActual)?.label }}</span>
                <span class="font-bold">${{ costoSistemaActual.toLocaleString() }}/mes</span>
              </div>

              <div v-if="costoLicenciasSACM > 0" class="flex justify-between">
                <span class="text-slate-600 dark:text-slate-400">Licencias SACM</span>
                <span class="font-bold">${{ costoLicenciasSACM.toLocaleString() }}/mes</span>
              </div>

              <div v-if="costoLicenciasSOMEXFON > 0" class="flex justify-between">
                <span class="text-slate-600 dark:text-slate-400">Licencias SOMEXFON</span>
                <span class="font-bold">${{ costoLicenciasSOMEXFON.toLocaleString() }}/mes</span>
              </div>

              <div v-if="riesgoMulta > 0" class="flex justify-between text-red-600">
                <span>⚠️ Riesgo multa (amortizado)</span>
                <span class="font-bold">${{ riesgoMulta.toLocaleString() }}/mes</span>
              </div>
            </div>

            <div class="border-t-2 border-red-300 dark:border-red-700 pt-4">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold">Total Mensual</span>
                <span class="text-3xl font-bold text-red-600">${{ costoActualTotal.toLocaleString() }}</span>
              </div>
              <div class="text-right text-sm text-slate-500 mt-1">
                ${{ (costoActualTotal * 12).toLocaleString() }}/año
              </div>
            </div>
          </div>

          <!-- Costo con Muusica -->
          <div class="bg-green-50 dark:bg-green-900/20 p-8 rounded-3xl border-2 border-green-200 dark:border-green-800">
            <h3 class="text-2xl font-bold mb-6 text-green-600">Con Muusica.com</h3>

            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-slate-600 dark:text-slate-400">Plan {{ planRecomendado }}</span>
                <span class="font-bold">${{ costoMuusica.toLocaleString() }}/mes</span>
              </div>

              <div class="flex justify-between text-green-600">
                <span>✅ Música incluida</span>
                <span class="font-bold">$0</span>
              </div>

              <div class="flex justify-between text-green-600">
                <span>✅ Licencias incluidas</span>
                <span class="font-bold">$0</span>
              </div>

              <div class="flex justify-between text-green-600">
                <span>✅ Sin riesgo legal</span>
                <span class="font-bold">$0</span>
              </div>
            </div>

            <div class="border-t-2 border-green-300 dark:border-green-700 pt-4">
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold">Total Mensual</span>
                <span class="text-3xl font-bold text-green-600">${{ costoMuusica.toLocaleString() }}</span>
              </div>
              <div class="text-right text-sm text-slate-500 mt-1">
                ${{ (costoMuusica * 12).toLocaleString() }}/año
              </div>
            </div>
          </div>
        </div>

        <!-- Ahorro -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-3xl text-center">
          <h2 class="text-3xl font-bold mb-6">Tu Ahorro con Muusica.com</h2>

          <div class="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div class="text-5xl font-bold mb-2">${{ ahorroMensual.toLocaleString() }}</div>
              <div class="text-blue-100">Ahorro mensual</div>
            </div>
            <div>
              <div class="text-5xl font-bold mb-2">${{ ahorroAnual.toLocaleString() }}</div>
              <div class="text-blue-100">Ahorro anual</div>
            </div>
            <div>
              <div class="text-5xl font-bold mb-2">{{ porcentajeAhorro }}%</div>
              <div class="text-blue-100">Reducción de costos</div>
            </div>
          </div>

          <div class="bg-white/10 p-6 rounded-xl mb-8">
            <p class="text-xl">
              En 1 año ahorras <strong class="text-yellow-300">${{ ahorroAnual.toLocaleString() }} MXN</strong>
            </p>
            <p class="text-blue-100 mt-2">
              Eso equivale a {{ Math.round(ahorroAnual / 500) }} cenas, o {{ Math.round(ahorroAnual / 15000) }} meses de renta
            </p>
          </div>

          <div class="flex gap-4 justify-center flex-wrap">
            <a href="https://play.muusica.com" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors">
              Comenzar Prueba Gratis
            </a>
            <NuxtLink to="/planes" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
              Ver Planes Detallados
            </NuxtLink>
          </div>
        </div>

        <!-- Beneficios Adicionales -->
        <div class="bg-slate-100 dark:bg-slate-800 p-8 rounded-3xl">
          <h3 class="text-2xl font-bold mb-6 text-center">Además del ahorro, obtienes:</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-4xl mb-3">🎵</div>
              <h4 class="font-bold mb-2">+10,000 Canciones</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Biblioteca profesional sin repeticiones</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">📈</div>
              <h4 class="font-bold mb-2">Aumenta Ventas</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Hasta 23% más con música optimizada</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">⚖️</div>
              <h4 class="font-bold mb-2">100% Legal</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Evita multas de $20k-$100k MXN</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">⏰</div>
              <h4 class="font-bold mb-2">Programación Auto</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Música que cambia según la hora</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">📱</div>
              <h4 class="font-bold mb-2">Control Remoto</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Desde tu celular en cualquier momento</p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">💬</div>
              <h4 class="font-bold mb-2">Soporte 24/7</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Ayuda cuando la necesites</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Initial State -->
      <div v-else class="text-center p-12 bg-slate-100 dark:bg-slate-800 rounded-3xl">
        <p class="text-xl text-slate-600 dark:text-slate-400">
          👆 Completa los campos arriba para calcular tu ahorro
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const tiposNegocio = [
  { value: 'restaurante', label: 'Restaurante', emoji: '🍽️' },
  { value: 'cafeteria', label: 'Cafetería', emoji: '☕' },
  { value: 'gimnasio', label: 'Gimnasio', emoji: '💪' },
  { value: 'tienda', label: 'Tienda', emoji: '🛍️' },
  { value: 'spa', label: 'Spa', emoji: '🧘' },
  { value: 'hotel', label: 'Hotel', emoji: '🏨' },
]

const sistemasActuales = [
  { value: 'spotify', label: 'Spotify Premium', costo: '$199/mes', costoNum: 199 },
  { value: 'youtube', label: 'YouTube Premium', costo: '$129/mes', costoNum: 129 },
  { value: 'radio', label: 'Radio FM', costo: 'Gratis', costoNum: 0 },
  { value: 'sacm', label: 'SACM + SOMEXFON + Fuente', costo: '$1,200-1,800/mes', costoNum: 1500 },
  { value: 'ilegal', label: 'Spotify/YouTube gratis (ilegal)', costo: 'Gratis pero ilegal', costoNum: 0 },
]

const negocioSeleccionado = ref('')
const sistemaActual = ref('')
const numeroUbicaciones = ref(1)

// Calcular costos actuales
const costoSistemaActual = computed(() => {
  const sistema = sistemasActuales.find(s => s.value === sistemaActual.value)
  return (sistema?.costoNum || 0) * numeroUbicaciones.value
})

const costoLicenciasSACM = computed(() => {
  if (sistemaActual.value === 'sacm') return 0 // Ya incluido
  if (['spotify', 'youtube', 'radio', 'ilegal'].includes(sistemaActual.value)) {
    return 600 * numeroUbicaciones.value // SACM promedio
  }
  return 0
})

const costoLicenciasSOMEXFON = computed(() => {
  if (sistemaActual.value === 'sacm') return 0 // Ya incluido
  if (['spotify', 'youtube', 'radio', 'ilegal'].includes(sistemaActual.value)) {
    return 450 * numeroUbicaciones.value // SOMEXFON promedio
  }
  return 0
})

const riesgoMulta = computed(() => {
  if (['spotify', 'youtube', 'ilegal'].includes(sistemaActual.value)) {
    // Riesgo de multa $50k promedio, amortizado en 12 meses
    return Math.round(50000 / 12)
  }
  return 0
})

const costoActualTotal = computed(() => {
  return costoSistemaActual.value + costoLicenciasSACM.value + costoLicenciasSOMEXFON.value + riesgoMulta.value
})

// Calcular costo Muusica
const planRecomendado = computed(() => {
  if (numeroUbicaciones.value === 1) return 'Básico'
  if (numeroUbicaciones.value <= 3) return 'Profesional'
  return 'Enterprise'
})

const costoMuusica = computed(() => {
  if (numeroUbicaciones.value === 1) return 299
  if (numeroUbicaciones.value <= 3) return 599
  return 599 + ((numeroUbicaciones.value - 3) * 150) // $150 por ubicación extra
})

// Calcular ahorros
const ahorroMensual = computed(() => {
  return Math.max(0, costoActualTotal.value - costoMuusica.value)
})

const ahorroAnual = computed(() => {
  return ahorroMensual.value * 12
})

const porcentajeAhorro = computed(() => {
  if (costoActualTotal.value === 0) return 0
  return Math.round((ahorroMensual.value / costoActualTotal.value) * 100)
})

useHead({
  title: 'Calculadora de Ahorros | Ahorra hasta $8,400/año | Muusica.com',
  meta: [
    { name: 'description', content: 'Calcula cuánto puedes ahorrar cambiando a Muusica.com. Compara costos de SACM, Spotify, YouTube vs. música profesional todo incluido. Ahorra hasta $8,400 MXN/año.' },
    { name: 'keywords', content: 'calculadora ahorros música comercial, comparar precios SACM, costo música negocio, ahorro Muusica' },
    { property: 'og:title', content: 'Calculadora de Ahorros | Muusica.com' },
    { property: 'og:description', content: 'Descubre cuánto puedes ahorrar con música profesional todo incluido' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://muusica.com/calculadora' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Calculadora de Ahorros | Muusica.com' },
    { name: 'twitter:description', content: 'Calcula tu ahorro con música profesional' }
  ],
  link: [{ rel: 'canonical', href: 'https://muusica.com/calculadora' }]
})
</script>

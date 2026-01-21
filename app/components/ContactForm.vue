<template>
  <section class="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
      <div class="absolute bottom-10 right-10 w-48 h-48 bg-purple-300 rounded-full blur-xl"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full blur-xl"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 font-second">
            ¡Transforma tu negocio con música profesional!
          </h2>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Únete a miles de negocios que ya confían en nosotros. Obtén acceso inmediato a nuestra biblioteca de música libre de regalías y dale a tu negocio el ambiente perfecto.
          </p>
        </div>

        <!-- Contact Form -->
        <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Form Grid -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-semibold text-white mb-2">
                  Nombre completo *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre completo"
                />
              </div>

              <!-- Business Type -->
              <div>
                <label for="business" class="block text-sm font-semibold text-white mb-2">
                  Tipo de negocio *
                </label>
                <select
                  id="business"
                  v-model="form.businessType"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="" disabled class="text-gray-900">Selecciona tu giro</option>
                  <option value="restaurant" class="text-gray-900">Restaurante</option>
                  <option value="cafe" class="text-gray-900">Cafetería</option>
                  <option value="gym" class="text-gray-900">Gimnasio</option>
                  <option value="spa" class="text-gray-900">Spa & Wellness</option>
                  <option value="hotel" class="text-gray-900">Hotel</option>
                  <option value="store" class="text-gray-900">Tienda/Retail</option>
                  <option value="bar" class="text-gray-900">Bar/Cantina</option>
                  <option value="office" class="text-gray-900">Oficina</option>
                  <option value="other" class="text-gray-900">Otro</option>
                </select>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold text-white mb-2">
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="tu@negocio.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-semibold text-white mb-2">
                  Teléfono
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="+52 (555) 123-4567"
                />
              </div>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-semibold text-white mb-2">
                Cuéntanos sobre tu proyecto
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="¿Qué ambiente buscas crear? ¿Cuántas sucursales tienes? ¿Alguna preferencia musical específica?"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div class="flex items-center text-blue-100 text-sm">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                Sin compromiso • Respuesta en 24hrs
              </div>
              
              <button
                type="submit"
                :disabled="isSubmitting"
                class="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-[200px]"
              >
                <span v-if="!isSubmitting" class="flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  ¡Quiero empezar ya!
                </span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
            <div class="flex items-center text-green-100">
              <svg class="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <p class="font-semibold">¡Mensaje enviado con éxito!</p>
                <p class="text-sm">Te contactaremos en las próximas 24 horas para ayudarte a transformar tu negocio.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div class="text-blue-100">
            <div class="text-2xl font-bold text-white">500+</div>
            <div class="text-sm">Negocios confían en nosotros</div>
          </div>
          <div class="text-blue-100">
            <div class="text-2xl font-bold text-white">10,000+</div>
            <div class="text-sm">Pistas libres de regalías</div>
          </div>
          <div class="text-blue-100">
            <div class="text-2xl font-bold text-white">24/7</div>
            <div class="text-sm">Soporte técnico</div>
          </div>
          <div class="text-blue-100">
            <div class="text-2xl font-bold text-white">15%</div>
            <div class="text-sm">Aumento promedio en ventas</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ContactForm {
  name: string
  email: string
  phone: string
  businessType: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  businessType: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form.value)
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      businessType: '',
      message: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    // Handle error here
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Custom styles for glassmorphism effect */
input::placeholder,
textarea::placeholder {
  color: rgb(191 219 254 / 0.7);
}

select option {
  background-color: white;
  color: #1f2937;
}

/* Smooth focus transitions */
input:focus,
textarea:focus,
select:focus {
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
}
</style>
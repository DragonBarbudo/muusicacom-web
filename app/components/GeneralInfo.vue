<template>
  <section
    id="info"
    class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-base-content"
  >
    <!-- ¿Por qué elegir Muusica? -->
    
    <div class="divider my-12 opacity-60">⸻</div>

    <!-- CTA final -->
    <div id="cta" class="card bg-gradient-to-br from-info/20 via-base-200 to-primary/20 shadow-2xl">
      <div class="card-body items-center text-center">
        <h3 class="text-2xl md:text-3xl font-semibold tracking-tight">
          Tu negocio merece una mejor experiencia sonora
        </h3>
        <p class="mt-3 max-w-2xl text-base md:text-lg text-base-content/85">
          Haz que tus clientes recuerden tu lugar por lo bien que se siente estar ahí.
        </p>

        <div class="mt-7 flex flex-col sm:flex-row gap-3">
          <NuxtLink to="#" class="btn btn-outline btn-warning btn-xl">
            Comenzar!
          </NuxtLink>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const props = defineProps<{
  oneTimePrice?: string
  subscriptionPrice?: string
}>()

const oneTimePrice = computed(() => props.oneTimePrice ?? '$XX USD')
const subscriptionPrice = computed(() => props.subscriptionPrice ?? '$XX USD')
</script>

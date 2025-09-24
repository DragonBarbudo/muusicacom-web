<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const online = useOnline()
</script>

<template>
  <div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mx-auto max-w-2xl">
    <MuusicaLogo />
    <WelcomeHero />
    <div class="p-5 text-center md:col-span-2">
        <div class="px-6 py-2 mx-auto rounded-md text-lg  text-sky-300 w-fit">Canciones con licencia para ambientar tu negocio, sin pagar cuotas excesivas a disqueras o asociaciones de gestión.</div>
    </div>
</div>
  
     <!-- Music Flow Player -->
    <MusicFlowPlayer />
    
    <PorQue />

    <PricingInfo />
    
    <GeneralInfo />

    
    <!--
      <SpotifyAudioPlayer />
    
    <ClientOnly>
      <Suspense>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
        <template #fallback>
          <div op50 italic>
            <span animate-pulse>Loading...</span>
          </div>
        </template>
      </Suspense>
      <template #fallback>
        <div op50>
          <span animate-pulse>...</span>
        </div>
      </template>
    </ClientOnly>



    <InputEntry />

-->


  </div>
</template>

<template>

  <div text-center mx-auto :class="horizontal?'flex justify-center items-center gap-2':''">
    
    <div aspect-ratio-square relative w-76 max-w-full max-h-full :class="horizontal?'':'mx-auto'" v-if="!onlytxt">
      <img src="/assets/muu1.png" relative z-20 w-full class="animate-breath" >
      <div class="vinyl" absolute z-10 top-0>
        <img src="/assets/muu2.png"  animate-spin w-full>
      </div>
    </div>

    <div font-sans text-4xl text-main  :class="horizontal?'':'w-full'" v-if="!onlylogo">
      <div flex items-end justify-center>
        <div relative pr-3>Muusica
          <div class="-rotate-90 -right-2" block  text-base  w-6 h-6 px-1 absolute  bottom-0>.com</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  horizontal: Boolean,
  onlylogo: Boolean,
  onlytxt: Boolean
})
</script>

<style scoped>
.vinyl {
      mask-image: linear-gradient(to bottom, black 50%, transparent 70%);
      -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 70%);
    }
@keyframes breathAnimation {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(0.9); }
}
.animate-breath {
  animation: breathAnimation 3s ease-in-out infinite;
}
</style>
<template>

  <div text-center mx-auto :class="horizontal?'flex justify-center items-center gap-2':''">
    <div aspect-ratio-square relative w-48 max-w-full max-h-full :class="horizontal?'':'mx-auto'">
      <img src="/assets/muu1.png" relative z-1 w-full>
      <img src="/assets/muu2.png" absolute z-0 top-0 animate-spin w-full>
    </div>
    <div font-sans text-5xl text-main mt-2 :class="horizontal?'':'w-full'" v-if="!onlylogo">
      <div flex items-end justify-center>
        <div relative pr-3>Muusica
          <div block -rotate-90 text-base  w-6 h-6 px-1 absolute -right-2 bottom-0>.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  horizontal: Boolean,
  onlylogo: Boolean
})
</script>
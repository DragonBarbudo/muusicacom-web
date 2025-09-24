<template>
<div>
    <div class="text-center mx-auto w-fit relative z-10">
        <img :src="tracks[0]?.artwork" class="w-40 -mb-4" ref="animElem">
    </div>

  <div class="mockup-browser bg-[#181c24] rounded-2xl shadow-lg w-full max-w-sm md:max-w-2xl mx-auto p-4 flex flex-col items-center border-2 border-[#1d2627] z-0">
    <div class="mockup-browser-toolbar"></div>
    <ul class="w-full">
      <li
        v-for="(track, idx) in tracks"
        :key="track.id"
        class="flex items-center gap-4 mb-2 p-4 rounded-xl bg-[#1a1e27] hover:bg-[#23283a] transition cursor-pointer"
        :class="isTrackPlaying(track.id) ? 'ring-2 ring-amber-400 bg-[#23283a]' : ''"
        @click="handlePlayClick(track, tracks)"
      >
        <div class="text-gray-400 font-bold w-10 text-center">#{{ idx + 1 }}</div>
        <img :src="track.artwork" alt="artwork" class="w-20 h-20 rounded-lg  object-cover " :class="isTrackPlaying(track.id)?'animate-spin':''" />
        <button
          type="button"
          class="ml-2 text-2xl text-white flex items-center justify-center pointer-events-none"
          tabindex="-1"
        >
          <span v-if="isTrackPlaying(track.id)" class="i-carbon-pause-filled"></span>
          <span v-else class="i-carbon-play-filled-alt"></span>
        </button>
        <div class="flex flex-col gap-1 w-full items-start text-left">
          <div class="font-bold text-white truncate">{{ track.title }}</div>
          <div class="text-xs text-gray-400">{{ track?.original?.genre }}</div>
        </div>
        <span class="ml-auto text-xs text-gray-400">{{ track?.original?.duration }}</span>
      </li>
    </ul>
  </div>
  </div>
</template>

<script setup lang="ts">
import type { TMusicFlow } from "vue-music-flow";
const props = defineProps<{
  tracks: TMusicFlow[]
  isTrackPlaying: (id: number) => boolean
  handlePlayClick: (track: TMusicFlow, tracks: TMusicFlow[]) => void,
  title: string
}>()

const animElem = ref<HTMLElement|null>(null);

onMounted(() => {
  if (animElem.value) {
    const animation = animElem.value.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' },
    ], {
      duration: 2400,
      iterations: Infinity
    });
    animation.finish = () => {
      // Animation finished (one cycle)
      // You can add custom logic here, e.g. console.log('Animation finished')
      console.log('Animation finished');
    };
  }
})
</script>

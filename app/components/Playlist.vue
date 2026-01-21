<template>
<div>
    <div class="text-center mx-auto w-fit relative z-10">
        <img :src="artwork" class="w-40 -mb-4" ref="animElem">
    </div>

  <div class="bg-gradient-to-rb from-blue-900/80 to-blue-400 dark:from-blue-900/10 dark:to-blue-400/30 rounded-2xl shadow-lg w-full max-w-sm md:max-w-2xl mx-auto p-4 flex flex-col items-center border-2 border-cyan/20 z-0">

    <ul class="w-full">


      <li
        v-for="(track, idx) in tracks"
        :key="track.id"
        class="mb-2 p-4 rounded-xl ring-1 ring-white transition"
        :class="isTrackPlaying(track.id) ? 'bg-blue-900/60 ' : ''"
      >
        <!-- Track Info Row -->
        <div class="flex items-center gap-4 cursor-pointer" @click="handlePlayClick(track)">
          <img :src="artwork" alt="artwork" class="hidden md:block w-20 h-20 rounded-lg object-cover" :class="isTrackPlaying(track.id)?'animate-spin':''" />
          <div class="ml-2 text-center">
            <button
              type="button"
              class=" text-2xl text-white flex items-center justify-center "
              tabindex="-1"
            >
              <span v-if="isTrackPlaying(track.id)" class="i-carbon-pause-filled"></span>
              <span v-else class="i-carbon-play-filled-alt"></span>
            </button>
            <span class="ml-auto text-xs text-white">{{ track?.duration }}</span>
          </div>

          <div class="flex flex-col gap-1 w-full items-start text-left">
            <div class="font-bold text-lg font-second text-white truncate">{{ track.title }}</div>
            <div class="text-sm text-white/80">{{ track?.description }}</div>
          </div>
        </div>

        <!-- Inline Waveform Player (appears when playing) -->
        <div v-show="isTrackPlaying(track.id)" class="mt-4 pt-4 ">
          <div :ref="el => setWaveformRef(track.id, el)" class="w-full h-16  rounded"></div>
        </div>
      </li>

    </ul>
  </div>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '~/composables/musicPlayer'

const props = defineProps<{
  tracks: Track[],
  title: string,
  artwork: string
}>()

const animElem = ref<HTMLElement|null>(null)
const { setCurrentTrack, isTrackPlaying, createWaveSurfer, stopCurrentTrack } = useMusicPlayer()
const waveformRefs = ref<Record<number, HTMLElement>>({})

const handlePlayClick = (track: Track) => {
  const currentlyPlaying = isTrackPlaying(track.id)
  
  if (currentlyPlaying) {
    // If this track is playing, stop it
    stopCurrentTrack()
  } else {
    // Set this track as current and initialize
    setCurrentTrack(track.id)
    nextTick(() => {
      const container = waveformRefs.value[track.id]
      if (container) {
        createWaveSurfer(container, track)
      }
    })
  }
}

const setWaveformRef = (trackId: number, el: any) => {
  if (el) {
    waveformRefs.value[trackId] = el
  }
}

onMounted(() => {
  if (animElem.value) {
    animElem.value.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' },
    ], {
      duration: 2400,
      iterations: Infinity
    })
  }
})
</script>

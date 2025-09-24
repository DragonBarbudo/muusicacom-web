<template>
  <div class="bg-black rounded-2xl shadow-lg w-[400px] mx-auto p-6 flex flex-col items-center">
    <img
      :src="currentSong.thumbnail"
      alt="Album Art"
      class="w-48 h-48 rounded-xl mb-6 object-cover border-4 border-gray-800"
    />
    <div class="w-full mb-4">
      <div v-for="(song, idx) in songs" :key="song.title" class="flex items-center mb-2">
        <button
          class="flex-1 text-left px-4 py-2 rounded-lg transition bg-gray-900 hover:bg-gray-800 text-white"
          :class="{'bg-green-700': idx === currentIndex}"
          @click="playSong(idx)"
        >
          <span class="font-bold">{{ song.title }}</span>
          <span class="ml-2 text-gray-400 text-sm">{{ song.artist }}</span>
        </button>
        <span v-if="idx === currentIndex && isPlaying" class="ml-2 text-green-400 animate-pulse">● Playing</span>
      </div>
    </div>
    <div class="w-full flex items-center gap-4 mb-2">
      <button @click="togglePlay" class="text-white bg-gray-800 rounded-full p-2 hover:bg-green-700 transition">
        <span v-if="isPlaying">⏸️</span>
        <span v-else>▶️</span>
      </button>
      <div class="flex-1">
        <div class="h-2 bg-gray-700 rounded-full relative cursor-pointer" @click="seek($event)">
          <div
            class="h-2 bg-green-500 rounded-full absolute top-0 left-0"
            :style="{ width: progressPercent + '%' }"
          ></div>
        </div>
      </div>
      <span class="text-gray-400 text-xs w-12 text-right">{{ formatTime(currentTime) }} / {{ formatTime(duration) }}</span>
    </div>
    <audio
      ref="audioRef"
      :src="currentSong.src"
      @timeupdate="onTimeUpdate"
      @ended="onEnded"
      @loadedmetadata="onLoadedMetadata"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const songs = [
  {
    title: 'Dreams',
    artist: 'Fleetwood Mac',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    thumbnail: 'https://i.scdn.co/image/ab67616d0000b273e0e0e0e0e0e0e0e0e0e0e0e0',
  },
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    thumbnail: 'https://i.scdn.co/image/ab67616d0000b273c0c0c0c0c0c0c0c0c0c0c0c0',
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    thumbnail: 'https://i.scdn.co/image/ab67616d0000b273b0b0b0b0b0b0b0b0b0b0b0b0',
  },
]

const currentIndex = ref(0)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const audioRef = ref<HTMLAudioElement | null>(null)

const currentSong = computed(() => songs[currentIndex.value])
const progressPercent = computed(() =>
  duration.value ? (currentTime.value / duration.value) * 100 : 0
)

function playSong(idx: number) {
  currentIndex.value = idx
  currentTime.value = 0
  if (audioRef.value) {
    audioRef.value.currentTime = 0
    audioRef.value.src = songs[idx].src
    audioRef.value.play()
    isPlaying.value = true
  }
}

function togglePlay() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
    isPlaying.value = false
  } else {
    audioRef.value.play()
    isPlaying.value = true
  }
}

function onTimeUpdate() {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime
  }
}

function onLoadedMetadata() {
  if (audioRef.value) {
    duration.value = audioRef.value.duration
  }
}

function onEnded() {
  isPlaying.value = false
}

function seek(e: MouseEvent) {
  if (!audioRef.value || !duration.value) return
  const bar = (e.target as HTMLElement).getBoundingClientRect()
  const clickX = e.clientX - bar.left
  const percent = clickX / bar.width
  audioRef.value.currentTime = percent * duration.value
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

watch(currentIndex, () => {
  if (audioRef.value) {
    audioRef.value.src = songs[currentIndex.value].src
    audioRef.value.currentTime = 0
    if (isPlaying.value) audioRef.value.play()
  }
})
</script>

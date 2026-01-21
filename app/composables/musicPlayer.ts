import WaveSurfer from 'wavesurfer.js'

export interface Track {
  id: number
  title: string
  audio: string
  artwork: string
  artist?: string
  album?: string
  duration?: string
  description?: string
}

const currentPlayingId = ref<number | null>(null)
const globalWaveSurfer = ref<WaveSurfer | null>(null)
const isPlaying = ref(false)

export const useMusicPlayer = () => {
  const setCurrentTrack = (trackId: number | null) => {
    // Clean up any existing WaveSurfer when switching tracks
    if (globalWaveSurfer.value && currentPlayingId.value !== trackId) {
      globalWaveSurfer.value.destroy()
      globalWaveSurfer.value = null
      isPlaying.value = false
    }
    currentPlayingId.value = trackId
  }

  const createWaveSurfer = async (container: HTMLElement, track: Track) => {
    // Clean up existing instance
    if (globalWaveSurfer.value) {
      globalWaveSurfer.value.destroy()
    }

    const wavesurfer = WaveSurfer.create({
      container,
      waveColor: 'rgba(0,0,0,0.6)',
      progressColor: '#ffffff',
      height: 48,
      barAlign: 'bottom',
      barGap: 2,
      barWidth: 3,
      barRadius: 2,
    })

    globalWaveSurfer.value = wavesurfer
    
    try {
      await wavesurfer.load(track.audio)
      wavesurfer.play()
      isPlaying.value = true
    } catch (e) {
      console.error('Load error:', e)
      globalWaveSurfer.value = null
      currentPlayingId.value = null
      isPlaying.value = false
    }
  }

  const pauseCurrentTrack = () => {
    if (globalWaveSurfer.value) {
      globalWaveSurfer.value.pause()
      isPlaying.value = false
    }
  }

  const stopCurrentTrack = () => {
    if (globalWaveSurfer.value) {
      globalWaveSurfer.value.destroy()
      globalWaveSurfer.value = null
    }
    currentPlayingId.value = null
    isPlaying.value = false
  }

  const isTrackPlaying = (trackId: number) => {
    return currentPlayingId.value === trackId
  }

  return {
    currentPlayingId: readonly(currentPlayingId),
    isPlaying: readonly(isPlaying),
    setCurrentTrack,
    createWaveSurfer,
    pauseCurrentTrack,
    stopCurrentTrack,
    isTrackPlaying
  }
}
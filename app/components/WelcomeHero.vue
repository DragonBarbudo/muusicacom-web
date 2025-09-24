<template>
    <div class="hero text-white ">
        <div class="hero-content text-center ">
            <div class="">


                <h1 class="text-4xl text-center font-serif flex flex-col gap-5 leading-4">
                    <div class="text-[4rem] leading-10 tracking-widest">Múusica</div>
                    <div class="text-[2rem]">sin complicaciones,</div>
                    <div  class="text-[2.8rem] tracking-widest">para que tu</div>
                    <div class="relative my-4 text-[4rem]" id="yourbusiness">
                        <div v-for="(item, idx) in businessList" :key="item.text"
                            :ref="el => elRefs[idx].value = el"
                            :class="item.class + ' absolute w-full opacity-0'"
                            :style="{ zIndex: idx === currentBusiness ? 20 : (idx === previousBusiness ? 10 : 0) }"
                        >{{ item.text }}</div>
                        <div class="opacity-0 w-full">restaurante</div>
                    </div>
                    <div class="text-[2.5rem]">suene sin parar.</div>
                </h1>

                
                
                
            </div>
        </div>
    </div>

</template>



<script setup lang="ts">
import { transform } from 'typescript'


const keyframesEnter = [
    { clipPath: 'circle(0% at 50% 50%)', opacity:0 },
    { clipPath: 'circle(100% at 50% 50%)', opacity:1 },
]
const keyframesExit = [
    { clipPath: 'circle(100% at 50% 50%)', opacity:1 },
    { clipPath: 'circle(0% at 50% 50%)', opacity:0},
]

const businessList = [
        { text: 'negocio', class: 'text-sky-400 tracking-widest' },
        { text: 'restaurante', class: 'text-amber-400 tracking-tighter' },
        { text: 'bar', class: 'text-pink-400 tracking-widest' },
        { text: 'cafetería', class: 'text-cyan-400' },
        { text: 'hotel', class: 'text-red-400 tracking-widest' },
        { text: 'consultorio', class: 'text-green-400 tracking-tighter' },
        { text: 'spa', class: 'text-purple-400 tracking-widest' },
        { text: 'tienda', class: 'text-orange-400 tracking-widest' },
        { text: 'gym', class: 'text-lime-400 tracking-widest' },
        { text: 'evento', class: 'text-teal-200 tracking-widest' },
]

const currentBusiness = ref(0)
const previousBusiness = ref(-1)
const elRefs = Array.from({ length: businessList.length }, () => ref(null))
    
    function sleep(ms: number) {
        return new Promise((r) => setTimeout(r, ms))
    }

    async function playSequence() {
        const len = businessList.length

        // Pre-enter first item
        const firstEl = elRefs[0].value as HTMLElement | null
        if (firstEl) {
            firstEl.style.clipPath = 'circle(0% at 50% 50%)'
            await useAnimate(firstEl, keyframesEnter, { duration: 400, fill: 'forwards' })
        }

        // Start loop
        while (true) {
            const idx = currentBusiness.value

            // Stay still for 500ms
            await sleep(500)

            // Start exit for current (400ms)
            const el = elRefs[idx].value as HTMLElement | null
            previousBusiness.value = idx
            const exitPromise = el ? useAnimate(el, keyframesExit, { duration: 500, fill: 'forwards' }) : Promise.resolve()

            // Schedule next enter to start after 300ms (so it overlaps last 100ms)
            await sleep(300)
            const nextIdx = (idx + 1) % len
            currentBusiness.value = nextIdx
            await nextTick()
            const nextEl = elRefs[nextIdx].value as HTMLElement | null
            if (nextEl) {
                nextEl.style.clipPath = 'circle(0% at 50% 50%)'
                // start enter (400ms)
                useAnimate(nextEl, keyframesEnter, { duration: 400, fill: 'forwards' })
            }

            // wait for exit to finish
            await exitPromise
            previousBusiness.value = -1
        }
    }

    onMounted(() => {
        // start the sequence
        playSequence()
    })

// ...existing code...


</script>
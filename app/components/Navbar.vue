<template>
<div class="fixed top-0 left-0 w-full gradient-to-b from-white/70 to-white/0 dark:from-black/70 dark:to-black/0 backdrop-blur z-50 border-b border-slate-200 dark:border-slate-700">
    <div class="container mx-auto py-4 gap-5 px-6 flex flex-wrap justify-between items-center">
        <NuxtLink to="/" >
            <MuusicaLogo onlytxt />
        </NuxtLink>
        <nav class="ml-auto flex gap-4 font-sans justify-center items-center font-second">
            <NuxtLink v-for="link in links" :key="link.label" :to="link.href" :target="link.external?'_blank':'_self'" :class="link.class">
                {{ link.label }}
            </NuxtLink>

            <DarkToggle />
        </nav>
    </div>
</div>
</template>



<script setup lang="ts">
const links = [
  { href: '/escuchanos', label: 'Escúchanos', class: 'link' },
  { href: '/planes', label: 'Planes', class: 'link' },
  { href: '/blog', label: 'Blog', class: 'link' },
  { href: 'https://play.muusica.com', label: 'Play', external: true, class: 'btn' },
]
</script>
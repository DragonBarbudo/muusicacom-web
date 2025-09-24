<template>
  <main class="px-10 py-20 text-center bg-radial-[at_25%_25%] from-sky-800 to-zinc-900 to-75% min-h-screen pb-32">
    <slot />

    <div class="text-sm mx-auto mt-5 text-center opacity-25 pt-20">
      Muusica.com {{ new Date().getFullYear() }}
    </div>
  </main>
</template>

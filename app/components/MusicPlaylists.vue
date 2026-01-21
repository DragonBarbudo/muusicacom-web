<template>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-20 w-full ">

        <div flex flex-col justify-center items-center>
            <div class="text-center mx-auto w-fit relative z-10">
                <img src="/music/playlist.png" class="w-40 -mb-4" >
            </div>
            <div
                class="bg-gradient-to-rb from-blue-900/80 to-blue-400 dark:from-blue-900/10 dark:to-blue-400/30  rounded-2xl shadow-lg w-full max-w-sm md:max-w-2xl mx-auto p-4 flex flex-col items-center border-2 border-cyan/20 z-0">

                <div class="w-full h-full text-lg md:text-2xl p-10 text-white text-center">
                    <div class="font-second">
                        Explora nuestras listas de reproducción demo para diferentes ambientes y tipos de negocios.
                    </div>
                    <div class="hidden md:block i-carbon-arrow-down-right mx-auto mt-10 text-4xl"></div>
                    <div class="md:hidden i-carbon-arrow-down  mx-auto mt-10 text-4xl"></div>

                </div>
            </div>
        </div>

        <ClientOnly>
            <div v-for="(item, idx) in playlists" :key="idx">
                <Playlist :tracks="item.songs" :title="item.album" :artwork="item.artwork" />
            </div>
        </ClientOnly>


        <div flex flex-col justify-center items-center>
            <div class="text-center mx-auto w-fit relative z-10 h-36">
                
            </div>
            <div
                class="bg-gradient-to-rb from-blue-900/80 to-blue-400 dark:from-blue-900/10 dark:to-blue-400/30  rounded-2xl shadow-lg w-full max-w-sm md:max-w-2xl mx-auto p-2 flex flex-col items-center border-2 border-cyan/20 z-0">

                <div class="w-full h-full text-lg md:text-2xl py-5 px-10 text-white text-center">
                    <div class="font-second font-bold text-3xl mb-3">
                        ¿Tienes dudas?
                    </div>
                    <div class="font-second">
                        ¡Prueba la experiencia completa <strong>GRATIS</strong> en nuestro reproductor web!
                    </div>

                    <a href="https://play.muusica.com/" class="btn-calm mt-6 light:bg-white light:text-blue-500 my-6">
                        Probar Reproductor Web
                    </a>

                    <div class="text-base">
                    Si necesitas una asesoría personalizada, contáctanos y conóce más sobre nuestros planes y cómo podemos ayudarte a ambientar tu negocio con música
                de calidad y sin complicaciones.
                    </div>
                </div>
            </div>
        </div>

        
    </div>



</template>




<script setup lang="ts">
import type { Track } from '~/composables/musicPlayer'

const tracks: Track[] = [
    {
        id: 1,
        audio: "/music/CoffeeKiss.mp3",
        title: "Coffee kiss",
        artwork: "/music/cafeteria.png",
        artist: "Muusica.com",
        duration: "02:05",
        description: "Ideal para crear un ambiente relajado y moderno. Los sintetizadores suaves y las voces etéreas se mezclan perfectamente con el aroma del café."
    },
    {
        id: 2,
        audio: "/music/PassportStamps.mp3",
        title: "Passport Stamps",
        artwork: "/music/cafeteria.png",
        artist: "Muusica.com",
        duration: "02:53",
        description: "Perfecta para un fondo agradable que no distrae. Su ritmo suave y guitarras acústicas invitan a una charla tranquila y relajada."
    },
    {
        id: 3,
        audio: "/music/FriendsforLife.mp3",
        title: "Friends for Life",
        artwork: "/music/cafeteria.png",
        artist: "Muusica.com",
        duration: "02:10",
        description: "Una melodía optimista y acogedora. La guitarra acústica y las voces femeninas añaden un toque de calidez, haciendo que los clientes se sientan como en casa."
    },
    {
        id: 4,
        audio: "/music/gymPedalToTheMetal.mp3",
        title: "Pedal to the metal",
        artwork: "/music/gym.png",
        artist: "Muusica.com",
        duration: "01:30",
        description: "Energía pura y ritmo incesante. El bajo potente y los sintetizadores motivadores son perfectos para mantener alta la adrenalina durante el ejercicio."
    },
    {
        id: 5,
        audio: "/music/gymBuildItUp.mp3",
        title: "Build it up",
        artwork: "/music/gym.png",
        artist: "Muusica.com",
        duration: "02:55",
        description: "Ritmo progresivo y enérgico que se construye para el clímax del entrenamiento. Ideal para la parte más intensa de la rutina."
    },
    {
        id: 6,
        audio: "/music/gymAGanar.mp3",
        title: "A ganar",
        artwork: "/music/gym.png",
        artist: "Muusica.com",
        duration: "02:08",
        description: "Una melodía vibrante y motivacional. Su ritmo constante y su toque de indie pop son un gran impulso para alcanzar tus metas de fitness."
    },
    {
        id: 7,
        audio: "/music/restauranteUnaNocheMas.mp3",
        title: "Una Noche Más",
        artwork: "/music/restaurante.png",
        artist: "Muusica.com",
        duration: "02:01",
        description: "Un toque de elegancia y pasión latina. Su ritmo lento y sensual crea un ambiente íntimo y sofisticado, perfecto para una cena romántica."
    },
    {
        id: 8,
        audio: "/music/restauranteLateNight.mp3",
        title: "Late Night",
        artwork: "/music/restaurante.png",
        artist: "Muusica.com",
        duration: "03:55",
        description: "Sonido lounge y sofisticado, ideal para cenas tardías. Crea una atmósfera relajada y chic, permitiendo a los clientes disfrutar de una experiencia memorable."
    },
    {
        id: 9,
        audio: "/music/restauranteLaConoci.mp3",
        title: "La Conocí",
        artwork: "/music/restaurante.png",
        artist: "Muusica.com",
        duration: "02:25",
        description: "Una balada acústica suave y melódica. Perfecta para un ambiente tranquilo, facilitando la conversación mientras los clientes disfrutan de la comida."
    },
    {
        id: 10,
        audio: "/music/tiendaVamosDeCompras.mp3",
        title: "Vamos de Compras",
        artwork: "/music/tienda.png",
        artist: "Muusica.com",
        duration: "02:34",
        description: "Múltiples géneros, alegre, ritmo bailable. Música refrescante y versátil que saca lo positivo de tus clientes."
    },
    {
        id: 11,
        audio: "/music/tiendaCasaNueva.mp3",
        title: "Casa Nueva",
        artwork: "/music/tienda.png",
        artist: "Muusica.com",
        duration: "03:01",
        description: "Contemplativa y moderna de ritmo suave, que invita a pasar el tiempo en tu negocio, no sólo disfrutando de tus productos sino también del ambiente."
    },
    {
        id: 12,
        audio: "/music/tiendaTardeDeAmigos.mp3",
        title: "Tarde de Amigos",
        artwork: "/music/tienda.png",
        artist: "Muusica.com",
        duration: "02:47",
        description: "Alegría que se traduce en buen ánimo para tus clientes. Ritmo suave y melodías amigables que crean un ambiente acogedor."
    }
]

const cafeteria = {
    artwork: "/music/cafeteria.png",
    album: "Relax en la Cafetería",
    songs: tracks.slice(0, 3)
}

const gym = {
    artwork: "/music/gym.png",
    album: "Energía para el Gym",
    songs: tracks.slice(3, 6)
}

const restaurante = {
    artwork: "/music/restaurante.png",
    album: "Ritmos suaves para Restaurante",
    songs: tracks.slice(6, 9)
}

const tienda = {
    artwork: "/music/tienda.png",
    album: "De compras en la Tienda",
    songs: tracks.slice(9, 12)
}

const playlists = [cafeteria, gym, restaurante, tienda]
</script>
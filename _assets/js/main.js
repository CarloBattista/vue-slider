const { createApp } = Vue

createApp({
    data() {
        return {

            movies: {
                title: [
                    "Marvel\'s Spiderman Miles Morale",
                    "Ratchet & Clank: Rift Apart",
                    "Fortnite",
                    "Stray",
                    "Marvels Avengers",
                ],
                description: [
                    "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                    "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
                    "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                ],
                image: [
                    './_assets/_resources/imgs/01.webp',
                    './_assets/_resources/imgs/02.webp',
                    './_assets/_resources/imgs/03.webp',
                    './_assets/_resources/imgs/04.webp',
                    './_assets/_resources/imgs/05.webp'
                ],
            },

            indexActive: 0,

        }
    }
}).mount('#app')
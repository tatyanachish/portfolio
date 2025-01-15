import photoAlbum from './assets/photoAlbum.jpg'
import meditation from './assets/meditation.jpg'
import quiz from './assets/quiz.jpg'
import recipe from './assets/recipe.jpg'
import weather from './assets/weather.jpg'
import dailyPlanner from './assets/dailyplanner.jpg'
import bakery from './assets/bakery.jpg'
import makeup from './assets/makeup.jpg'
import month from './assets/month.jpg'

export const data = [
    {
        id:1,
        image: dailyPlanner,
        name: "Daily Planner",
        searchTerm: "react",
        title:"dailyPlanner",
        description: "A daily planner is an easy-to-use tool for organizing your daily tasks. At the top, enter the date or day. In the first field, write the task name, and in the second, provide a detailed description. Your notes will be saved for future reference.",
        tech: 'Technologies used: React with localStorage/CSS',
        url: 'https://flourishing-belekoy-e6bc0a.netlify.app/'
    },
    {
        id:2,
        image: meditation,
        name: "Meditation",
        searchTerm: "js",
        title: "meditation",
        tech: 'Technologies used: HTML/CSS/JS/animation GSAP',
        description: "The nature sounds meditation app is a tool for relaxation, concentration, and achieving inner balance. The sounds of rain, rustling leaves, birds singing, or the ocean create an atmosphere of comfort and peace.",
        url: 'https://developing-dynamic-thrush.glitch.me/'

    },
    {
        id:3,
        image: bakery,
        name: "Bakery",
        searchTerm:"react",
        title: 'bakery',
        tech:'Technologies used: Redux',
        description:'A case study of using the Redux library for an online store',
        url:'https://lively-shortbread-3f65f2.netlify.app/'
    },
    {
        id:4,
        image: recipe,
        name: "Recipes",
        title:"recipe",
        searchTerm: ["API", "react"],
        description: "The recipe search app is a handy tool for quick meal selection. It lets you find recipes by ingredients and explore dishes from various cuisines around the world. Perfect for culinary inspiration and menu planning",
        tech: 'Technologies used: React/CSS/API',
        url: 'https://astounding-bavarois-62447e.netlify.app/'
    },
    {
        id:5,
        image: weather,
        name: "The Weather",
        searchTerm: ["API", "react"],
        title:"weather",
        description: 'The weather app is a convenient tool for getting up-to-date forecasts. It displays the current temperature, precipitation, and humidity in your city',
        tech: 'Technologies used: React/CSS/API',
        url: 'https://lustrous-parfait-f7f029.netlify.app/'
    },
    {
        id:6,
        image: photoAlbum,
        name: "Photo Album",
        searchTerm: "js",
        title:"photoAlbum",
        description: "JCapture and cherish your travel memories with a photo album app. Featuring a built-in slideshow function, it brings your favorite moments to life.",
        tech: 'Technologies used: HTML/CSS/JS/animation GSAP',
        url:'https://velvety-choux-57e3c6.netlify.app/'
    },
    {
        id:7,
        image: quiz,
        name: "Quiz",
        searchTerm: "js",
        title:"quiz",
        description: "The Multiplication and Division Quiz app is a simple and easy-to-use tool for practicing math skills. It offers challenges, tracks your progress, and is great for kids.",
        tech: 'Technologies used: HTML/CSS/JS/animation GSAP',
        url: 'https://buttercup-diamond-polonium.glitch.me/'
    },
    {
        id:8,
        image:makeup,
        name:'Avoir.Studio',
        searchTerm: 'js',
        title:'makeup',
        description: 'Makeup studio website created with the help of Bootstrap framework',
        tech: 'Technologies used: HTML/CSS/Bootstrap',
        url: 'https://cold-massive-axolotl.glitch.me/'
    },
    {
        id:9,
        image:month,
        name:  "Guess the date",
        searchTerm: 'js',
        title:'month',
        description:'"Guess the Date" is an interactive game application in which users are invited to play with the computer and guess the date. You need to choose a month and then guess the day',
        tech: 'Technologies used: HTML/CSS/JS',
        url:'https://aesthetic-sprite-ec7d33.netlify.app/'
    }
]

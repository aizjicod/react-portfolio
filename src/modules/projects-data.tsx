import pokemon from "./../assets/projects-ss/pokemon.png";
import calculator from "./../assets/projects-ss/calculator.png";
import bike_rental from "./../assets/projects-ss/bike-rental.png";
import space_traveler from "./../assets/projects-ss/space-travelers.png";
import todo_list from "./../assets/projects-ss/todo-list.png";
import weather from "./../assets/projects-ss/weather.png";

export type project = { name: string, description: string, techUsed: string[], cardImg: string, codeLive: string, codeSource: string }

// search how to do it in a better way
const projectsData: project[] = [
  {
    name: 'Pokemon',
    description: 'Pokemon is a web-app that simulates a Pokedex showing the pokemon of a certain type. The user can choose the type of pokemon they want to see. The app will show the pokemon of that type. The user can see the name, type, and image of the pokemon. The user can also see the games the pokemon is in.',
    techUsed: ['javascript', 'jest', 'Webpack', 'css', 'html'],
    cardImg: pokemon,
    codeLive: 'https://fourteen98.github.io/Pokemon/dist/',
    codeSource: 'https://github.com/Fourteen98/Pokemon',
  },
  {
    name: 'To-do List',
    description: 'on this project, I will be doing a to-do list. this project will be done with a template for webpack and with the following languages: CSS, HTML, and JavaScript',
    techUsed: ['JavaScript', 'css', 'html'],
    cardImg: todo_list,
    codeLive: 'https://aizjicod.github.io/to-do-list/dist/',
    codeSource: 'https://github.com/aizjicod/to-do-list',
  },
  {
    name: 'Math-Magicians',
    description: 'On this app, I will be using react to create a single web page which will include a calculator as well as quotes on another instance of the page',
    techUsed: ['JavaScript', 'React', 'css'],
    cardImg: calculator,
    codeLive: 'https://calculatorapp-aiziji.netlify.app/',
    codeSource: 'https://github.com/aizjicod/math-magicians',
  },
  {
    name: 'Space Travelers Hub',
    description: ' It was done using the SpaceEx API. On this website, you can check SpaceEx rockets and missions, and book them so they appear on the My Profile tab, on the profile you can follow links directly to their respective Wikipedia page.',
    techUsed: ['React', 'Redux', 'Javascript', 'css', 'html', 'Jest'],
    cardImg: space_traveler,
    codeLive: 'https://stellular-kataifi-d33ffc.netlify.app/',
    codeSource: 'https://github.com/lucas-crodrigues/space-trav-hub',
  },
  {
    name: 'Weather app',
    description: 'This app was created using an API. the user can search for a certain location. after the location is fetch it will return a list of different location that matches the input.',
    techUsed: ['Redux', 'React', 'JavaScript', 'API'],
    cardImg: weather,
    codeLive: 'https://weather-aiziji.netlify.app/',
    codeSource: 'https://github.com/aizjicod/weather-app-react',
  },
  {
    name: 'Bike rental',
    description: 'A Rails API as a backend, and React front-end project. The user can signup or log in, then it will be redirected to the home page after a successful login. The user can see all the models of bikes on the page, after clicking them the user can add a reservation to a specific bike and if the user wants to add or delete a reservation.',
    techUsed: ['React', 'Redux', 'HTML', 'CSS', 'API', 'Ruby on Rails'],
    cardImg: bike_rental,
    codeLive: 'https://ducati-rentals.netlify.app/',
    codeSource: 'https://github.com/AbrahaKahsay/final-capstone-frontend',
  },
]
export default projectsData
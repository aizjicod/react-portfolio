import reactIcon from "../assets/projects-tech/React.png"
import rubyOnRailsIcon from "../assets/projects-tech/Ruby-on-rails.png"
import cssIcon from "../assets/projects-tech/CSS.png"
import htmlIcon from "../assets/projects-tech/HTML.png"
import javaScriptIcon from "../assets/projects-tech/JavaScript.png"
import rubyIcon from "../assets/projects-tech/Ruby.png"
import reduxIcon from "../assets/projects-tech/Redux.png"
import jestIcon from "../assets/projects-tech/Jest.png"
import webpackIcon from "../assets/projects-tech/Webpack.png"
import apiIcon from "../assets/projects-tech/Api.png"

const getIcon = (img: string) => {
  switch (img) {
  case "React":
    return reactIcon
  case "CSS":
    return cssIcon
  case "HTML":
    return htmlIcon
  case "JavaScript":
    return javaScriptIcon
  case "Ruby":
    return rubyIcon
  case "Redux":
    return reduxIcon
  case "Jest":
    return jestIcon
  case "Webpack":
    return webpackIcon
  case "API":
    return apiIcon
  default: 
    return rubyOnRailsIcon
  }
}

export default getIcon

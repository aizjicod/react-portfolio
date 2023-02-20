import reactIcon from "../assets/projects-tech/React.png"
import rubyOnRailsIcon from "../assets/projects-tech/Ruby-on-rails.png"
import cssIcon from "../assets/projects-tech/CSS.png"
import htmlIcon from "../assets/projects-tech/HTML.png"
import javaScriptIcon from "../assets/projects-tech/JavaScript.png"
import rubyIcon from "../assets/projects-tech/Ruby-on-rails.png"
import reduxIcon from "../assets/projects-tech/Redux.png"
import jestIcon from "../assets/projects-tech/Jest.png"
import webpackIcon from "../assets/projects-tech/Webpack.png"
import apiIcon from "../assets/projects-tech/Api.png"

const getIcon = (img: string) => {
  switch (img) {
    case "React":
    return <img src={reactIcon}/>
    case "CSS":
    return <img src={cssIcon}/>
    case "HTML":
    return <img src={htmlIcon}/>
    case "JavaScript":
    return <img src={javaScriptIcon}/>
    case "Ruby":
    return <img src={rubyIcon}/>
    case "Redux":
    return <img src={reduxIcon}/>
    case "Jest":
    return <img src={jestIcon}/>
    case "Webpack":
    return <img src={webpackIcon}/>
    case "API":
    return <img src={apiIcon}/>
    default: 
    return <img src={rubyOnRailsIcon}/>
  }
}

export default getIcon
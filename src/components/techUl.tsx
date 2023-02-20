import getIcon from "../modules/get-icon-tech"

const TechUl = (props: string[]) => {
  return (
    <ul id="tech-ul">
      {Object.entries(props).map(([key,value]) => {
        return (
          <li key={key} className="tech-li">
            {value}
            <img src={getIcon(value)} alt={value} className="tech-icons"/>
          </li>
        )
      })}
    </ul>
  )
}
export default TechUl
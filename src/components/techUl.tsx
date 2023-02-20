import getIcon from "../modules/get-icon-tech"

const TechUl = (props: string[]) => {
  return (
    <ul id="tech-ul">
      <h3>Tech used for this project</h3>
      {Object.entries(props).map(([key,value]) => {
        return (
          <li key={key} className="tech-li">
            <p>{value}</p>
            <img src={getIcon(value)} alt={value} className="tech-icons"/>
          </li>
        )
      })}
    </ul>
  )
}
export default TechUl
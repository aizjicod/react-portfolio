const TechUl = (props: { name: string, description: string, techUsed: string[], cardImg: string, codeLive: string, codeSource: string }) => {
  return (
    <ul>
      {props.techUsed.map(tech => {
        return <li key={tech}>{tech}</li>
      })}
    </ul>
  )
}
export default TechUl
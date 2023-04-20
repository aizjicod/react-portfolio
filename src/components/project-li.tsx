type props = { name: string, description: string, techUsed: string[], cardImg: string, codeLive: string, codeSource: string, position:boolean }

const ProjectLi = (projectdata:props) => (
  <li className={`project-card ${projectdata.position ? 'hidden' : ''}`.trim()}>
    <img src={projectdata.cardImg} alt={projectdata.name} className='card-img' />
    <div className='content'>
      <h3>{projectdata.name}</h3>
      <p>{projectdata.description}</p>
      <button type='button' className='card-button'> <a href={projectdata.codeLive} target="_blank">See Live</a></button>
      <button type='button' className='card-button'> <a href={projectdata.codeSource} target="_blank">See source</a></button>
    </div>
  </li>
)

export default ProjectLi
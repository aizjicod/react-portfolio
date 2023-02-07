import { project as project_type } from '../modules/projects-data'
const ProjectLi = (projectdata: project_type) => (
  <li className='project-card'>
    <img src={projectdata.cardImg} alt={projectdata.name} className='card-img' />
    <div className='content'>
      <h3>{projectdata.name}</h3>
      <p>{projectdata.description}</p>
      <button type='button' className='card-button'> <a href={projectdata.codeLive}>See Live</a></button>
      <button type='button' className='card-button'> <a href={projectdata.codeSource}>See source</a></button>
    </div>
  </li>
)

export default ProjectLi
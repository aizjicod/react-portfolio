import { project as project_type } from '../modules/projects-data'
const ProjectLi = (projectdata: project_type) => (
  <li>
    <p>{projectdata.name}</p>
    <p>{projectdata.description}</p>
    <img src={projectdata.cardImg} alt={projectdata.name}/>
    <p>{projectdata.codeLive}</p>
    <p>{projectdata.codeSource}</p>
  </li>
)

export default ProjectLi
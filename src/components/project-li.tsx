import  { project as project_type }  from '../modules/projects-data'
const ProjectLi = (projectdata:project_type ) => (
  <li>
    <p>{projectdata.name}</p>
  </li>
)

export default ProjectLi
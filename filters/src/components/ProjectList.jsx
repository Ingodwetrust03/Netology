export default function projectList ({projects}) {

  return (
      projects.map(project => <div className="card"><img src={project.img} alt={project.category} /></div>)
  )

}


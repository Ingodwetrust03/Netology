export default function projectList ({projects}) {

  return (
      projects.map((project, index) => <div className="card" key={index}><img src={project.img} alt={project.category} /></div>)
  )

}


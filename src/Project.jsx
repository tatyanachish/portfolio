import { useState} from "react";
import { data } from './data'
import Buttons from "./Buttons";
import { Link } from "react-router-dom";



function Project(){
 const [project,setProject] = useState(data)


 const chosenProject = (searchTerm) => {
  const newProject = data.filter((element)=> element.searchTerm.includes(searchTerm))
  setProject(newProject)
 }
 
    return(
      <div>
        <Buttons setProject={setProject} chosenProject={chosenProject}/>
        <div className="project">
          {project.map((element) => {
            const { id, image, name,searchTerm} = element
            return (
              <div key={id} className="card">
                <Link to={`/about/${element.title}`}>
                  <img src={image} alt="site" width='500'/>
                </Link>
                <p className="title">{name}</p>
              </div>
            )
          })}
      </div>
        </div>
    )
}
export default Project;
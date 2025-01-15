import { data } from './data'

function Buttons({setProject,chosenProject}){
    return(
        <div className="btn-container">           
            <button onClick={()=>chosenProject('js')}>HTML/CSS/<br/>JavaScript</button>
            <button onClick={()=>chosenProject('react')}>React/<br/>Redux/Node</button>
            <button onClick={()=>chosenProject('API')}>API</button>
            <button onClick={()=>setProject(data)}>All</button>            
        </div>
    )
}
export default Buttons;
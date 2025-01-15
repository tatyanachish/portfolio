import { useNavigate, useParams } from "react-router-dom";
import { data } from './data'

function AboutProject(){
    const navigate = useNavigate()
    const { title } = useParams()
    return(
        <div>
            {data.filter((item)=>item.title===title).map((element,index)=>{
                return(
                    <div key={index} className="card-project">
                        <div className="title-project">
                            <h2 className="title">{element.name}</h2>
                        </div>
                        <div className="container">                            
                            <img src={element.image} alt='site' width='800'/>               
                            <div className="info">                   
                                <h2>{element.description}</h2>
                                <h2>{element.tech}</h2>
                                <p>{element.url}</p>
                                <button onClick={()=>navigate(-1)}>Go Back</button>
                            </div>  
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}
export default AboutProject;
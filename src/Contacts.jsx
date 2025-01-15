
import newYork from './NewYork.jpg'
function Contact(){
    return(
        <div className='contact'>        
            <h2 className='headContact'>My email: tat.chi.web@gmail.com</h2>
            <div className='contactPic'>              
                <img src={newYork} width='400'/>             
            </div>
        </div>
    )
}
export default Contact;
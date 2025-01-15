
import myPhoto from './assets/comp3.jpg'

function About(){
    return(
        <div className='App'>
            <div className='about'>             
                <p className='text'>Hello there,<br/>
                    My name is Tatiana Chishkina, and I’m a New York City-based developer.
                    I am a graduate of the Canadian school CanSheCode and I am passionate about 
                    continuously developing my skills and expanding my knowledge. 
                    This portfolio showcases my journey as a developer and is constantly evolving. 
                    While I am proficient in foundational tools like HTML, CSS, and the Bootstrap 
                    framework, my true passion lies in working with JavaScript libraries such as 
                    React and Redux, as well as exploring cross-platform development with Node.js.
                </p><br/>
                <p className='text'>My path to becoming a web developer was not an easy one. I tried 
                    myself in other fields, but always came back to technology. The ability to take 
                    an idea and turn it into something tangible is incredibly satisfying. 
                    Designing a user-friendly interface or optimizing internal systems - 
                    every step of the process feels meaningful.</p> <br/>
                <p className='text'>Like many others in this field, I build websites for individuals 
                    and businesses, helping them bring their ideas to life online. But there’s more 
                    to this story than just building websites. What many people don’t talk about is 
                    how the code is created. Sometimes it can be very difficult to figure out why 
                    a piece of code isn’t working. Debugging can seem like solving a complex puzzle 
                    that requires patience, logic, and a little creativity. But there’s nothing like 
                    the moment when everything clicks and the code starts working as intended.</p>
                
            </div>
            <div className='image'>
                <img src={myPhoto} alt=''/>
            </div>
        </div>
    )
}
export default About;
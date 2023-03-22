import './Developers.scss';
import { Typewriter } from "react-simple-typewriter";

const Developers = () => {
    
    return (
        <div>
            <div className="devHead">
                <h1>
                    <Typewriter 
                        cursor
                        cursorStyle='_'
                        typeSpeed={60}
                        deleteSpeed={30}
                        delaySpeed={1000}
                        loop={1}
                        words={['Meet the developer']}
                    />
                </h1>
            </div>
            <div className="devContainer">
                <div className="devCard">
                    <div className="content">
                        <div className="imgBx"><img src="assets/jayesh.jpg" width="250px"></img></div>
                        <div className="contentBx">
                            <h3>Jayesh Harlalka<br></br><span>Frontend Developer</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a href="https://github.com/Jayesh0704"><img src="assets/GitLogo.png" width="32px"></img></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jayesh-harlalka-6b226221b/"><img src="assets/image 11.png" width="32px"></img></a>
                        </li>
                    </ul>
                </div>

               
            </div>
        </div>
    );
};

export default Developers;
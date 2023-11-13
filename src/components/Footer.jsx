import Email from '../images/icon-email.svg'
import Logo from '../images/logo-footer.svg';
import Phone from '../images/icon-phone.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () =>
{

    const handleHover = (index) =>
    {
        let elements = document.getElementsByClassName('round-container');
        let container =  elements[index-1];
        let image = container.children[0];
        container.style.borderColor = 'hsl(224, 93%, 58%)';
        image.style.color = 'hsl(224, 93%, 58%)';
    }

    const handleLeftHover = (index) =>
    {
        let elements = document.getElementsByClassName('round-container');
        let container =  elements[index-1];
        let image = container.children[0];
        container.style.borderColor = 'white';
        image.style.color = 'white';
    }

    return (
        <>
            <div 
            className="footer-component"
            >
                <img 
                alt="logo"
                src={Logo}  
                />
                <div 
                className="flex-container"
                >  

                    <div 
                    className="container"
                    >
                        <div 
                        className="text-container"
                        >
                            <img
                            alt="icon"
                            src={Phone} 
                            />
                            <p 
                            className="body"
                            >
                                Phone: +1-543-123-4567
                            </p>
                        </div>
                        <div 
                        className="text-container"
                        >
                            <img
                            alt="icon"
                            src={Email} 
                            />
                            <p 
                            className="body"
                            >
                                example@fylo.com
                            </p>
                        </div>
                    </div>
                    <div 
                    className="container"
                    >
                        <p 
                        className="heading"
                        >
                            About Us
                        </p>
                        <div 
                        className="body"
                        >
                            Jobs
                        </div>
                        <div 
                        className="body"
                        >
                            Press
                        </div>
                        <div 
                        className="body"
                        >
                            Blog
                        </div>
                    </div>
                    <div 
                    className="container"
                    >
                        <div 
                        className="heading"
                        >
                            Contact Us
                        </div>
                        <div 
                        className="body"
                        >
                            Terms
                        </div>
                        <div 
                        className="body"
                        >
                            Privacy
                        </div>
                    </div>
                    <div 
                    className="flex-container"
                    >
                        <div 
                        className="round-container"
                        onMouseEnter={() => handleHover(1)}
                        onMouseLeave={() => handleLeftHover(1)}
                        >
                            <FontAwesomeIcon 
                            icon={faFacebookF} 
                            style={{color: "#ffffff",}} 
                            />
                        </div>
                        <div 
                        className="round-container"
                        onMouseEnter={() => handleHover(2)}
                        onMouseLeave={() => handleLeftHover(2)}
                        >
                            <FontAwesomeIcon 
                            icon={faTwitter} 
                            style={{color: "#ffffff",}} 
                            />
                        </div>
                        <div 
                        className="round-container"
                        onMouseEnter={() => handleHover(3)}
                        onMouseLeave={() => handleLeftHover(3)}
                        >
                            <FontAwesomeIcon 
                            icon={faInstagram} 
                            style={{color: "#ffffff",}} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
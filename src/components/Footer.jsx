import Email from '../images/icon-email.svg'
import Logo from '../images/logo-footer.svg';
import Phone from '../images/icon-phone.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () =>
{

    /*
    Handle the styling for the on mouse enter event
    @param index the index of the round container being hovered
    @return void
    */
    const handleHover = (index) =>
    {

        // Hold the round container elements
        let elements = document.getElementsByClassName('round-container');

        // Retrieve the right container
        let container =  elements[index-1];

        // Get the image from the container
        let image = container.children[0];

        // Set the border color
        container.style.borderColor = 'hsl(224, 93%, 58%)';

        // Set the image color
        image.style.color = 'hsl(224, 93%, 58%)';
    }

    /*
    Handle the styling for the on mouse leave event
    @param index the index of the round container being left
    @return void
    */
    const handleLeftHover = (index) =>
    {

        // Hold the round container elements
        let elements = document.getElementsByClassName('round-container');

        // Retrieve the right containe
        let container =  elements[index-1];

        // Get the image from the container
        let image = container.children[0];

        // Set the border color
        container.style.borderColor = 'white';

        // Set the image color
        image.style.color = 'white';
    }

    return (
        <>

            {/* Hold the footer component */}
            <div 
            className="footer-component"
            >

                {/* Hold the logo image */}
                <img 
                alt="logo"
                src={Logo}  
                />

                {/* Hold the flex container */}
                <div 
                className="flex-container"
                >  

                    {/* Hold the container for the flex element */}
                    <div 
                    className="container"
                    >

                        {/* Hold the text container */}
                        <div 
                        className="text-container"
                        >

                            {/* Hold the icon for the text */}
                            <img
                            alt="icon"
                            src={Phone} 
                            />

                            {/* Hold the body text */}
                            <p 
                            className="body"
                            >
                                Phone: +1-543-123-4567
                            </p>
                        </div>
                        
                        {/* Hold the text container */}
                        <div 
                        className="text-container"
                        >

                            {/* Hold the icon for the text */}
                            <img
                            alt="icon"
                            src={Email} 
                            />

                            {/* Hold the body text */}
                            <p 
                            className="body"
                            >
                                example@fylo.com
                            </p>
                        </div>
                    </div>

                    {/* Hold the container for the flex element */}
                    <div 
                    className="container"
                    >

                        {/* Hold the heading text */}
                        <p 
                        className="heading"
                        >
                            About Us
                        </p>

                        {/* Hold the body text */}
                        <div 
                        className="body"
                        >
                            Jobs
                        </div>

                        {/* Hold the body text */}
                        <div 
                        className="body"
                        >
                            Press
                        </div>

                        {/* Hold the body text */}
                        <div 
                        className="body"
                        >
                            Blog
                        </div>
                    </div>

                    {/* Hold the container for the flex element */}
                    <div 
                    className="container"
                    >

                        {/* Hold the heading text */}
                        <div 
                        className="heading"
                        >
                            Contact Us
                        </div>

                        {/* Hold the body text */}
                        <div 
                        className="body"
                        >
                            Terms
                        </div>

                        {/* Hold the body text */}
                        <div 
                        className="body"
                        >
                            Privacy
                        </div>
                    </div>

                    {/* Hold the flex container for the media containers */}
                    <div 
                    className="flex-container"
                    >

                        {/* Hold the container for the media */}
                        <div 
                        className="round-container"
                        onMouseEnter={() => handleHover(1)}
                        onMouseLeave={() => handleLeftHover(1)}
                        >

                            {/* Render the facebook icon */}
                            <FontAwesomeIcon 
                            icon={faFacebookF} 
                            style={{color: "#ffffff",}} 
                            />
                        </div>

                        {/* Hold the container for the media */}
                        <div 
                        className="round-container"
                        onMouseEnter={() => handleHover(2)}
                        onMouseLeave={() => handleLeftHover(2)}
                        >

                            {/* Render the twitter icon */}
                            <FontAwesomeIcon 
                            icon={faTwitter} 
                            style={{color: "#ffffff",}} 
                            />
                        </div>

                        {/* Hold the contaienr for the media */}
                        <div 
                        className="round-container"
                        onMouseEnter={() => handleHover(3)}
                        onMouseLeave={() => handleLeftHover(3)}
                        >

                            {/* Render the instagram icon */}
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
import BackgroundDesktop from '../images/bg-curve-desktop.svg'
import BackgroundMobile from '../images/bg-curve-mobile.svg';
import Illustration1 from '../images/illustration-1.svg';
import Illustration2 from '../images/illustration-2.svg'
import {EarlyAccess} from '../components/EarlyAccess';
import {Footer} from '../components/Footer';
import {GetStarted} from '../components/GetStarted';
import {Image} from '../components/Image';
import {Navbar} from '../components/Navbar';
import {Testimonials} from '../components/Testimonials'

export const Home = () =>
{
    return (
        <>

            {/* Render the navbar component */}
            <Navbar />

            {/* Hold the container for the get started section */}
            <section 
            className="get-started"
            >
                <Image 
                imageSource={Illustration1}
                />
                <GetStarted />
            </section>

            {/* Hold the bg pattern to divide the sections */}
            <img 
            alt="background-pattern"
            className="pattern-mobile" 
            src={BackgroundMobile} 
            />

            {/* Hold the bg pattern to divide the sections */}
            <img 
            alt="background-pattern"
            className="pattern-desktop" 
            src={BackgroundDesktop} 
            />

            {/* Hold the container for the testimonial */}
            <div 
            className="testimonials-wrapper"
            >
                <section 
                className="testimonials"
                >

                    <Image 
                    imageSource={Illustration2}
                    />
                    <Testimonials />
                </section>
            </div>

            <div className="early-access-wrapper">

                <EarlyAccess />
            </div>

            <div 
            className="footer-wrapper"
            >
                <Footer />
            </div>
        </>
    )
}
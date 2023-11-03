import BackgroundMobile from '../images/bg-curve-mobile.svg';
import Illustration1 from '../images/illustration-1.svg';
import Illustration2 from '../images/illustration-2.svg'
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

            {/* Hold the container for the testimonial */}
            <section 
            className="testimonials"
            >

                <Image 
                imageSource={Illustration2}
                />
                <Testimonials />
            </section>
        </>
    )
}
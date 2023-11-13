import Arrow from '../images/icon-arrow.svg';
import {TestimonialCard} from './TestimonialCard';

export const Testimonials = () =>
{
    return (
        <>

            {/* Hold the testimonials component */}
            <div 
            className="testimonials-component"
            >

                {/* Hold the heading text */}
                <p 
                className="heading"
                >
                    Stay productive, wherever you are
                </p>

                {/* Hold the body text */}
                <p 
                className="body"
                >
                    Never let location be an issue when accessing your files. Fylo has you 
                    covered for all of your file storage needs.
                </p>

                {/* Hold the body text */}
                <p 
                className="body"
                >
                    Securely share files and folders with friends, family and colleagues for 
                    live collaboration. No email attachments required!
                </p>

                {/* Hold the flex container */}
                <div 
                className="flex-container"
                >

                    {/* Hold the link text */}
                    <p 
                    className="link"
                    >
                        See how Fylo works
                    </p>

                    {/* Hold the arrow image */}
                    <img  
                    alt="arrow"
                    className="arrow" 
                    src={Arrow}
                    />
                </div>

                {/* Render the testimonial card */}
                <TestimonialCard />
            </div>
        </>
    )
}
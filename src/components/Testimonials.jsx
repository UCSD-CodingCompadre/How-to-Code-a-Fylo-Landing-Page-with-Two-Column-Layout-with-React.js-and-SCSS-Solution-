import Arrow from '../images/icon-arrow.svg';
import {TestimonialCard} from './TestimonialCard';

export const Testimonials = () =>
{
    return (
        <>
            <div 
            className="testimonials-component"
            >
                <p 
                className="heading"
                >
                    Stay productive, wherever you are
                </p>

                <p 
                className="body"
                >
                    Never let location be an issue when accessing your files. Fylo has you 
                    covered for all of your file storage needs.
                </p>

                <p 
                className="body"
                >
                    Securely share files and folders with friends, family and colleagues for 
                    live collaboration. No email attachments required!
                </p>

                <div 
                className="flex-container"
                >
                    <p 
                    className="link"
                    >
                        See how Fylo works
                    </p>
                    <img  
                    alt="arrow"
                    className="arrow" 
                    src={Arrow}
                    />
                </div>

                <TestimonialCard />
            </div>
        </>
    )
}
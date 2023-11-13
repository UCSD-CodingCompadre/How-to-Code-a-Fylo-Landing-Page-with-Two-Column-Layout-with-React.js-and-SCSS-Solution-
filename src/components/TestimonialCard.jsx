import Avatar from '../images/avatar-testimonial.jpg'
import  Quotes from '../images/icon-quotes.svg'

export const TestimonialCard = () =>
{
    return (
        <>

            {/* Hold the card for the testimonial */}
            <div 
            className="card"
            >

                {/* Hold the quotes image */}
                <img  
                alt="quotes"
                className="quotes" 
                src={Quotes}
                />

                {/* Hold the body text */}
                <div 
                className="body"
                >
                    Fylo has improved our team productivity by an order of magnitude. Since 
                    making the switch our team has become a well-oiled collaboration machine.
                </div>

                {/* Hold the flex container for the card */}
                <div 
                className="card-flex-container"
                >

                    {/* Hold the avatar image */}
                    <img 
                    alt="avatar"
                    className="avatar" 
                    src={Avatar} 
                    />

                    {/* Hold the container for the avatar details */}
                    <div 
                    className="container"
                    >

                        {/* Hold the name */}
                        <p 
                        className="name"
                        >
                            Kyle Burton
                        </p>

                        {/* Hold the title */}
                        <p 
                        className="title"
                        >
                            Founder & CEO, Huddle    
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
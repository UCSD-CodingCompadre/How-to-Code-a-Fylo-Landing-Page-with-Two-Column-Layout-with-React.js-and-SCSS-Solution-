import Avatar from '../images/avatar-testimonial.jpg'
import  Quotes from '../images/icon-quotes.svg'

export const TestimonialCard = () =>
{
    return (
        <>
            <div 
            className="card"
            >
                <img  
                alt="quotes"
                className="quotes" 
                src={Quotes}
                />
                <div 
                className="body"
                >
                    Fylo has improved our team productivity by an order of magnitude. Since 
                    making the switch our team has become a well-oiled collaboration machine.
                </div>

                <div 
                className="card-flex-container"
                >
                    <img 
                    alt="avatar"
                    className="avatar" 
                    src={Avatar} 
                    />
                    <div 
                    className="container"
                    >
                        <p 
                        className="name"
                        >
                            Kyle Burton
                        </p>
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
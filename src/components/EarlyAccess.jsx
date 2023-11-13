import {useState} from 'react';
import validator from 'validator';

export const EarlyAccess = () =>
{

    // Hold the state of the email being entered
    const [email, setEmail] = useState('');

    // Hold the state if the email was invalid
    const [isEmailValid, setEmailIsValid] = useState(true);

    /*
    Check if the email is valid
    @param none
    @return void
    */
    const checkEmail = () =>
    {

        // Use the validator to check if the email is valid
        setEmailIsValid(validator.isEmail(email));
    }

    return(
        <>

            {/* Hold the early access component */}
            <div 
            className="early-access-component"
            >

                {/* Hold the left container */}
                <div 
                className="left-container"
                >

                    {/* Hold the heading text */}
                    <p 
                    className="heading"
                    >                              
                        Get early access today
                    </p>

                    {/* Hold the body text */}
                    <p 
                    className="body"
                    >
                        It only takes a minute to sign up and our free starter tier is extremely generous. 
                        If you have any questions, our support team would be happy to help you.
                    </p>
                </div>

                {/* Hold the right container */}
                <div 
                className="right-container"
                >

                    {/* Hold the container for the input and error */}
                    <div 
                    className="container"
                    >

                        {/* Hold the container for the input */}
                        <div 
                        className="input-container"
                        >

                            {/* Hold the input */}
                            <input  
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@example.com"
                            type="text"
                            value={email}
                            />
                        </div>

                        {/* Check if the email is valid */}
                        {!isEmailValid &&

                            // Render the error text
                            <p 
                            className="error-text"
                            >
                                Please check your email
                            </p>
                        }
                    </div>

                    {/* Hold the button that checks if the email is valid */}
                    <button
                    onClick={checkEmail}
                    >
                        Get Started For Free
                    </button>
                </div>
            </div>
        </>
    )
}
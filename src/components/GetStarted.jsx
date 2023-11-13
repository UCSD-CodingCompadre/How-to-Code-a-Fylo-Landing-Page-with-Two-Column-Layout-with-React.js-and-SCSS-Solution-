import {useState} from 'react';
import validator from 'validator';

export const GetStarted = () =>
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

    return (
        <>

            {/* Hold the get started component */}
            <div 
            className="get-started-component"
            >

                {/* Hold the heading text */}
                <p 
                className="heading"
                >
                    All your files in one secure location, accessible anywhere.
                </p>

                {/* Hold the body text */}
                <p 
                className="body"
                >
                    Fylo stores your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends, 
                    family, and co-workers.   
                </p>

                {/* Hold the flex container for the input and butotn */}
                <div 
                className="flex-container"
                >

                    {/* Hold the container for the input and error message */}
                    <div 
                    className="container"
                    >

                        {/* Hold the input container */}
                        <div 
                        className="input-container"
                        >

                            {/* Hold the input */}
                            <input  
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
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
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}
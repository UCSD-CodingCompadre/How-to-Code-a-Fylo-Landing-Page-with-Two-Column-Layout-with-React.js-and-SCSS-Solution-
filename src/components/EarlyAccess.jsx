import {useState} from 'react';
import validator from 'validator';

export const EarlyAccess = () =>
{

    const [email, setEmail] = useState('');

    const [isEmailValid, setEmailIsValid] = useState(true);

    const checkEmail = () =>
    {
        setEmailIsValid(validator.isEmail(email));
    }

    return(
        <>
            <div 
            className="early-access-component"
            >
                <div 
                className="left-container"
                >
                    <p 
                    className="heading"
                    >                              
                        Get early access today
                    </p>
                    <p 
                    className="body"
                    >
                        It only takes a minute to sign up and our free starter tier is extremely generous. 
                        If you have any questions, our support team would be happy to help you.
                    </p>
                </div>
                <div 
                className="right-container"
                >
                    <div 
                    className="container"
                    >
                        <div 
                        className="input-container"
                        >
                            <input  
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@example.com"
                            type="text"
                            value={email}
                            />
                        </div>
                        {!isEmailValid &&
                            <p 
                            className="error-text"
                            >
                                Please check your email
                            </p>
                        }
                    </div>
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
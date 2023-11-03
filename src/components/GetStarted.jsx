import {useState} from 'react';
import validator from 'validator';

export const GetStarted = () =>
{

    const [email, setEmail] = useState('');

    const [isEmailValid, setEmailIsValid] = useState(true);

    const checkEmail = () =>
    {
        setEmailIsValid(validator.isEmail(email));
    }

    return (
        <>
            <div 
            className="get-started-component"
            >
                <p 
                className="heading"
                >
                    All your files in one secure location, accessible anywhere.
                </p>

                <p 
                className="body"
                >
                    Fylo stores your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends, 
                    family, and co-workers.   
                </p>

                <div 
                className="flex-container"
                >
                    <div 
                    className="container"
                    >
                        <div 
                        className="input-container"
                        >
                            <input  
                            onChange={(e) => setEmail(e.target.value)}
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
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}
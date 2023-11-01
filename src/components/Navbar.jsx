import Logo from '../images/logo.svg';

export const Navbar = () =>
{
    return (
        <>

            {/* Hold the component */}
            <div 
            className="navbar-component"
            >

                {/* Hold the logo */}
                <img 
                alt="logo" 
                src={Logo} 
                />

                {/* Hold the flex container */}
                <div 
                className="flex-container"
                >

                    {/* Hold the nav link */}
                    <p>
                        Features
                    </p>

                    {/* Hold the nav link */}
                    <p>
                        Team
                    </p>

                    {/* Hold the nav link */}
                    <p>
                        Sign In
                    </p>
                </div>
            </div>
        </>
    )
}
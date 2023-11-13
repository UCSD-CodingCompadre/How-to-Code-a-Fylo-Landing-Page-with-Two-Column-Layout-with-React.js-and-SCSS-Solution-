export const Image = (props) =>
{

    // Deconstruct the props
    const {imageSource} = props;

    return(
        <>

            {/* Hold the image */}
            <img 
            alt="image-component"
            className="image-component" 
            src={imageSource} 
            />
        </>
    )
}
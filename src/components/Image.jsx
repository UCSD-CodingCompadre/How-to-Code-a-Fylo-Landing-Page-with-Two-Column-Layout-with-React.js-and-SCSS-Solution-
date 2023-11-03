export const Image = (props) =>
{

    const {imageSource} = props;

    return(
        <>
            <img 
            alt="image-component"
            className="image-component" 
            src={imageSource} 
            />
        </>
    )
}

const Main = (props) => {

    //Accessing data prop from parent
    const { data } = props;

    return (
        <div className="imgContainer">
            <img className="bgImage" src={data?.hdurl} alt={data?.title || 'background image'} />
        </div>
    )
}

export default Main
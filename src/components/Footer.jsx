

//Use props as argument to receive the props from the parent component
const Footer = (props) => {
    //This is grabbing the variables from App which is the parent component
    const { showModal, handleToggleModal, data } = props;

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                {/* If data is available then show title */}
                <h2>{data?.title}</h2>
                <h1>NASA APOD API</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer
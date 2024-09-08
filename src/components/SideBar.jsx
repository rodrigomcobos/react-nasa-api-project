

//Receive props from parent component
const SideBar = (props) => {

    //Receiving variables from props
    const { handleToggleModal, data } = props;


    return (
        <div className="sidebar">

            {/* adding handleToggleModal to overlay so when clicked outside it will close */}
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                {/* If data is available then show title */}
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    {/* Changing to date instead */}
                    <p className="descriptionTitle">{data?.date}</p>
                    {/* If data is available then show explanation */}
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"> Close</i>
                </button>
            </div>
        </div>
    )
}

export default SideBar
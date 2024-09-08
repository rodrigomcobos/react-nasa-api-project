

//Receive props from parent component
const SideBar = (props) => {

    //Receiving variables from props
    const { handleToggleModal } = props;


    return (
        <div className="sidebar">

            {/* adding handleToggleModal to overlay so when clicked outside it will close */}
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam accusantium odit unde aliquid quae praesentium! Consectetur vel voluptatum impedit. Officia corporis laudantium, eos consequuntur eum consequatur dolorem tenetur quisquam.</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"> Close</i>
                </button>
            </div>
        </div>
    )
}

export default SideBar
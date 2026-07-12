import "./Container.css";

function Container({ 
    children, 
    className = "", 
    content = false 
}) {

    return (

        <div
            className={
                content
                    ? `container-content ${className}`
                    : `container ${className}`
            }
        >

            {children}

        </div>

    );

}

export default Container;
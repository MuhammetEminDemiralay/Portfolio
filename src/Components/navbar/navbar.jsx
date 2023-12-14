import './navbar.css'


function Navbar(){
    return (
        <>
            <div className="wrapper-navbar">
                <div className="logo-box">
                    <i class='bx bxl-gmail logo'></i>
                </div>
                <span>Portfolio</span>
                <span>About</span>
                <span>Albums</span>
                <span>Contact</span>
            </div>
        </>
    )
}

export {Navbar}
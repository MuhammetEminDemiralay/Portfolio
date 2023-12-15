import './navbar.css'


function Navbar(){
    return (
        <>
            <div className="navbar">
                <div className="logo-box">
                    <i class='bx bxl-gmail' ></i>
                </div>
                <h1>Portfolio</h1>
                <div className="contact">
                     <i class='bx bxl-instagram-alt instagram'></i>
                     <i class='bx bxl-twitter twitter' ></i>
                </div>
            </div>
        </>
    )
}

export {Navbar}
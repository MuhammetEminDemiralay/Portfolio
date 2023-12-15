import './about.css'

function About(){
    return (
        <>
            <div className="wrapper-about">
                    <div className="lamp-box">
                        <span className='light-stick'></span>
                        <i class='bx bxs-bulb light'></i>
                    </div>
                    <div className='light-box'> 
                        <div className="light-shadow">
                            <div className="text">
                                Hello, I am Muhammet. I am a full-stack software developer. 
                                I can produce great projects for you. Contact me.
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}



export {About}
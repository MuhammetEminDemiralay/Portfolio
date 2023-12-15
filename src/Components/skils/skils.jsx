import './skils.css'

function Skil(){
    return (
        <>
            <div className="wrapper-skils">
                <div className='skill'>Skills</div>
                <div className="skil-box">
                    <i class='bx bxl-html5 icon html'></i>
                </div>
                <div className="skil-box">
                    <i class='bx bxl-css3 icon css' ></i>
                </div>
                <div className="skil-box">
                    <i class='bx bxl-javascript icon javascript' ></i>
                </div>
                <div className="skil-box">
                    <i class='bx bxl-angular icon angular' ></i>
                </div>
                <div className="skil-box">
                    <i class='bx bxl-react icon react' ></i>
                </div>
                <div className="skil-box">
                    <i class='bx bxl-bootstrap icon bootstrap'></i>
                </div>
                <div className="skil-box">
                    <i class='bx bxl-sass icon sass' ></i>
                </div>
                <div className="skil-box">
                    <span className='c icon'>C#</span>
                </div>
            </div>
        </>
    )
}



export {Skil}
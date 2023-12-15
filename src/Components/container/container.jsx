import { About } from '../about/about'
import { Footer } from '../footer/footer'
import { Navbar } from '../navbar/navbar'
import { Skil } from '../skils/skils'
import './container.css'

function Container(){
    return (
        <>  
            <div className="wrapper">
                <div className="wrapper-content">
                    <Navbar/>
                    <div className="wrapper-body">
                        <About/>
                        <Skil/>
                    </div>   
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export {Container}
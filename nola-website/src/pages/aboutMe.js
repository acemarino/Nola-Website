
import React from 'react';
import { Junior} from './images';
import portrait from "./images/Senior/SrSelfPortrait.jpg"
import insta from "./images/Other/insta.png"
import insta2 from "./images/Other/insta2.png"
import inprint from "./images/Other/inprnt.svg"
function About(){
    return(

        <div className="aboutPage">
          
            
            <div className="pictSide">
                
                <img src={portrait} alt="Logo" className='aboutImg'></img>
                <div>
                    
                </div>
            </div>
            <div className="txtSide">
                <div id='header'>
                    About the Artist
                </div>
                <div id='bulk'>
                    Nola (they/them) is a 18-year-old artist with an interest in illustration and design. They primarily work digitally (Procreate and Clip Studio Paint) or use acrylic paint for their work. Their recent work focuses on storytelling and illustration through the use of their original characters. In the past, they’ve explored childhood and nostalgia in their work, still drawing from those inspirations today.
                
                </div>
                <div className='Links'>
                    <div>
                        <a href="https://www.instagram.com/art.by.granola/?hl=en" target="_blank" >
                            <img src={insta} alt="Logo" className='insta2Icon'></img>
                        </a>
                        <a href="https://www.instagram.com/art.by.granola/?hl=en" target="_blank" className='tag' >@art.by.granola</a>
                    </div>  
                    <div>
                        <a href="https://www.inprnt.com/gallery/art.by.granola/" target="_blank" >
                            <img src={inprint} alt="Logo" className='inprintIcon'></img>
                        </a>
                        <a href="https://www.inprnt.com/gallery/art.by.granola/" target="_blank" className='tag' >@art.by.granola</a>
                        </div> 
                </div>
            </div>
        </div>
    );
        
}
export default About;
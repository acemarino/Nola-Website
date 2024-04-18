
import React from 'react';
import { Junior} from './images';
function About(){
    return(

        <div className="aboutPage">
            <div className="txtSide">
                <div id='header'>
                    About the Artist
                </div>
                <div id='bulk'>
                    Nola (they/them) is a 18-year-old artist with an interest in illustration and design. They primarily work digitally (Procreate and Clip Studio Paint) or use acrylic paint for their work. Their recent work focuses on storytelling and illustration through the use of their original characters. In the past, they’ve explored childhood and nostalgia in their work, still drawing from those inspirations today.
                </div>
            </div>
            <div className="pictSide">
                <img src={Junior[6].img} alt="Logo" className='aboutImg'></img>
                <img src={Junior[2].img} alt="Logo" className='aboutImg'></img>
            </div>
        </div>
    );
        
}
export default About;
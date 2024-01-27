
import React from 'react';
import { Junior} from './images';
function About(){
    return(

        <div className="aboutPage">
            <div className="pictSide">
                <img src={Junior[9].img} alt="Logo" className='aboutImg'></img>
            </div>
            <div className="txtSide">
                <div id='header'>
                    About the Artist
                </div>
                <div id='bulk'>
                Nola (they/them) is a 17-year-old artist with an interest in illustration and design. They primarily work digitally (Procreate and Clip Studio Paint) or use acrylic paint for their work. Their recent work focuses on storytelling and illustration through the use of their original characters. In the past, they’ve explored childhood and nostalgia in their work, still drawing from those inspirations today.
                </div>

                <div id='header'>
                    Artist Statement
                </div>
                <div id='bulk'>
                My artwork focuses on developing an original world of my imagination. Through my character designs, storytelling, and use of imagery from different time periods, I aim to build my own fantastical world within my art that will captivate the viewer. I’ve always loved reading stories, with a particular love of those that have illustrations alongside them, like graphic novels and comics. The combination of writing and illustration allows one to convey deep emotions and depict complex relationships, something that has always fascinated me when reading. The awe of discovering more about a completely unique and imaginative world alongside watching the characters’ stories unfold is a feeling I strive to achieve with my own art.

    
                </div>
            </div>
        </div>
        
    );
        
}
export default About;

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
                Nola (they/them) is a 17-year-old artist. Currently a senior at an arts high school, they are an aspiring illustrator and graphic designer. Nola’s recent work discusses themes of childhood, nostalgia, original stories, and more.
                </div>

                <div id='header'>
                    Artist Statement
                </div>
                <div id='bulk'>
                 artist stament here 
    
                </div>
            </div>
        </div>
        
    );
        
}
export default About;

import React from 'react';
import { Home } from './images';
function About(){
    return(

        <div className="aboutPage">
            <div className="pictSide">
                <img src={Home[2].img} alt="Logo" className='aboutImg'></img>
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
                La la la artist stament here yadada yadada lalalalalala text text text paragraph here lots of words brrr.
    wowwww lots of words so crazy so amazing wowo so cool. so many words.
                </div>
            </div>
        </div>
        
    );
        
}
export default About;
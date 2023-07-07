
function Gallery(){
    return(
        <>
       <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
        <div >
            <div id='header'>
                This is the Gallery
            </div>
            
        </div>
        
        <div class="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 160 }'>
        <div class="grid-sizer"></div>
            <div class="grid-item">
            <img src="./20230707_112047.jpg" alt="bug"  />
            </div> 
            <div class="grid-item">
            <img src="./20230701_194324.jpg" alt="bug"  />
            </div>   
            <div class="grid-item">
            <img src="./20230706_163905.jpg" alt="bug" />
            </div>  
            <div class="grid-item">
            <img src="./20230706_163907.jpg" alt="bug" />
            </div> 
            <div class="grid-item">
            <img src="./20230704_222926.jpg" alt="bug" />
            </div>     
        </div>
       </> 
    );
        
}
export default Gallery;


import ImageGallery from 'react-image-gallery';
import "./SlideShow.scss"
import { Typewriter } from "react-simple-typewriter";

const images = [
  {
    original: '/assets/cdyp1.jpg',
  },
  {
    original: '/assets/cdyp2.jpg',
  },
  {
    original: '/assets/cdyp3.jpg',
  },
  {
    original: '/assets/cdyp4.jpg',
  }
];

const SlideShow = () => (
    <div className="slideshow-container" id="gallery">
        <h1 className='m-3'>
          <Typewriter 
                cursor
                cursorStyle='_'
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1000}
                loop={1}
                words={['Gallery']}
            />
        </h1>
        <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            originalWidth={"100%"}
            autoPlay={true}
        />    
    </div>
);

export default SlideShow;
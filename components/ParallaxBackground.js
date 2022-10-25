
import { ParallaxBanner } from 'react-scroll-parallax';

export default function ParallaxBackground({children, id, imgPath, height}) {

    console.log("Using parallax background ",)

    return (
        <ParallaxBanner id={id}
                layers={[ { image: imgPath, speed: -100 } ]}
                style={{ 
                    minHeight: height || 400
                }}>
            {children}
        </ParallaxBanner>
    );
  };
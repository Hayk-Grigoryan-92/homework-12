import { useState } from 'react';
import './App.scss';
import { SliderComponent } from './components/sliderComponent';
import img1 from './assets/images/1.webp'
import img2 from './assets/images/2.webp'
import img3 from './assets/images/3.jpg'
import img5 from './assets/images/5.jpg'
import img6 from './assets/images/6.jpg'
import { Template1 } from './components/template-1';

function App() {

  const [sliderImage, useSliderImage] = useState([
    img1,img2,img3,img5,img6
  ])

  return (
    <div className="App">
      {/* <SliderComponent slide={sliderImage}/> */}
       <Template1/> 

    </div>
  );
}

export default App;

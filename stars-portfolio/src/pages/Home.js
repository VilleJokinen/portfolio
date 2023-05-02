
import React from 'react';
import Element from './Element.js';
import FluidGrid from 'react-fluid-grid';

const Home = () => {
    return (

        <div class="fluid_container">
        <FluidGrid>
          <Element projekti="Testiprojekti" 
          image="https://th.bing.com/th/id/R.36f48cd10760e0f221c710c44b272d41?rik=SLJzO2HyYv154A&pid=ImgRaw&r=0"
          text="Testi teksti"
          link="https://google.com"
          />
          <Element projekti="Testiprojekti 2.0" 
          image="https://th.bing.com/th/id/OIP.mK6NOZ7T-_KawDMWj5MVCwHaEK?pid=ImgDet&rs=1"
          text="YEES YEES"
          link="https://youtube.com"
          />
      </FluidGrid>
    </div>

    )
}

export default Home;
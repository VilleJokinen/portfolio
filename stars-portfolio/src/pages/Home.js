
import React from 'react';
import Element from './Element.js';
import FluidGrid from 'react-fluid-grid';
const Home = () => {
    return (

        <div class="fluid_container">
        <FluidGrid>
          <Element projekti="Online jalkapallopeli" 
          image="https://img.itch.zone/aW1nLzEzMjAyMTI0LnBuZw==/315x250%23c/gK5Ndb.png"
          text="Unity 3d projekti"
          link="https://villej.itch.io/villen-jalkapallopeli"
          />
          <Element projekti="Forest runner" 
          image="https://img.itch.zone/aW1nLzEzMjAyMjAzLnBuZw==/315x250%23c/v1Fm5K.png"
          text="Godot 3d infinite runner"
          link="https://github.com/VilleJokinen/Infinite_runner"
          />
          <Element projekti="Space invader" 
          image="https://cdn.discordapp.com/attachments/1063486083050000426/1143568175640875118/Screenshot_2023-08-22_183103.png"
          text="Unity 2d peli, tehty TET-jaksolla"
          link="https://github.com/VilleJokinen/space_invader"
          />
          <Element projekti="Villebot 2.0"
            image="https://cdn.discordapp.com/attachments/1063486083050000426/1143568175640875118/Screenshot_2023-08-22_183103.png"
            text="Discord botti Pythonilla"
            link="https://discord.gg/q7ykGQ2Kgj"
          />
          <Element projekti="Snake"
            image="https://cdn.discordapp.com/attachments/1063486083050000426/1154796555535134730/image.png"
            text="Matopeli"
            link="https://github.com/VilleJokinen/matopeli"
          />
      </FluidGrid>
    </div>

    )
}

export default Home;


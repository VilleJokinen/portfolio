
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
          image="https://cdn.discordapp.com/attachments/1063486083050000426/1196899136507740221/image.png?ex=65b94e2f&is=65a6d92f&hm=924f443fe9a4a5f4448a0cfefdd0d89bfce3e0d403b137801f79203ac37fcff3&"
          text="Unity 2d peli, tehty TET-jaksoilla"
          link="https://github.com/VilleJokinen/space_invader"
          />
          <Element projekti="Villebot 2.0"
            image="https://cdn.discordapp.com/attachments/1063486083050000426/1196881166242955405/image.png?ex=65b93d73&is=65a6c873&hm=02888f887d426f722c0b8c3390f38cd4aac9704d8dd42d33073a4a98a129f8fb&"
            text="Discord botti Pythonilla"
            link="https://replit.com/@Villeboifirst/VilleBOT-20?v=1"
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


import React from 'react';
import Element from './Element.js';
import FluidGrid from 'react-fluid-grid';
import spaceInvaderImage from '../images/space_invader.png';
import villebotImage from '../images/villebot2ss.png';
import snakeImage from '../images/matopeli.png';
import AntackImage from '../images/antack_logo.png';
const Home = () => {
    return (

        <div className="fluid_container">
        <FluidGrid>
            <Element projekti="Antack"
                     image={AntackImage}
                text="Antack is a 2D rouge-lite game game made with Unity. In Antack, your goal is to fight agains waves of ants, gathering upgrades and loot along the way. It was made by the Kodarit Stars group, including me. The game is available on itch.io from the link below."
                link="https://mattidragon.itch.io/antack"
            />
          <Element projekti="Online socker game"
            image="https://img.itch.zone/aW1nLzEzMjAyMTI0LnBuZw==/315x250%23c/gK5Ndb.png"
            text="A 3D socker game made in a Kodarit Black Belt course. The game is made with Unity and it's playable from the link below."
            link="https://villej.itch.io/villen-jalkapallopeli"
          />
          <Element projekti="Forest runner" 
            image="https://img.itch.zone/aW1nLzEzMjAyMjAzLnBuZw==/315x250%23c/v1Fm5K.png"
            text="Forest runner is a 3D infinite runner game made with the Godot engine in a Kodarit Black Belt course. It is no longer playable due to Godot engine updates."
            link="https://github.com/VilleJokinen/Infinite_runner"
          />
          <Element projekti="Space Iinvader"
            image={spaceInvaderImage}
            text="Space Invader is a 2D game made with Unity. It was made during two internships at Playsome Games and Metaplay. The game utilizes the Metaplay SDK. It is no longer playable due to not keeping up with the SDK updates."
            link="https://github.com/VilleJokinen/space_invader"
          />
          <Element projekti="Villebot 2.0"
            image={villebotImage}
            text="Villebot is a Discord bot that I made with discord.py. Due to changes in the discord.py library, Villebot is no longer functional. The code is still available from the link below."
            link="https://replit.com/@Villeboifirst/VilleBOT-20?v=1"
          />
          <Element projekti="Snake"
            image={snakeImage}
            text="It's a simple snake game. It was made many years ago on a Kodarit Black Belt course. It's no longer playable."
            link="https://github.com/VilleJokinen/matopeli"
          />
      </FluidGrid>
    </div>

    )
}

export default Home;


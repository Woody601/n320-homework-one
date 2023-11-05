import React from "react";
import styles from "@/styles/styles.module.css";
import Hero from "@/components/Hero";
import GameContainer from "@/components/GameContainer";

export default function Home() {
  return (
    <>
      <div className={styles.navHolder}>
        <div className={styles.bars}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.links}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#products">PRODUCTS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>

      <div className={styles.pagescroll}>
        <div className={styles.app}>
          <Hero heroImage="/hero.jpg" height="200px" header="Main Header" />
          <h1 className={styles.bigRedFont}>Home</h1>
          <p>This is the landing page for our Next.js app.</p>
          <p className={styles.blueFont}>This should be blue font.</p>
          <p>
            Here are some of my favorite video games down below! Take a look to
            see what selection of games are my type!
          </p>
          <div className={styles.gameContainer}>
            <GameContainer
              gameImage="/mario_150.png"
              gameTitle="Super Mario Odyssey"
              gameBriefDescription="Join Mario on a globe-trotting adventure to save Princess Peach from Bowser."
              gameRating="E"
            />
            <GameContainer
              gameImage="/botw_150.png"
              gameTitle="The Legend of Zelda: Breath of the Wild"
              gameBriefDescription="Explore a vast open world, solve puzzles, and battle foes in this critically acclaimed action-adventure game."
              gameRating="E10+"
            />
            <GameContainer
              gameImage="/minecraft_150.jpg"
              gameTitle="Minecraft"
              gameBriefDescription="Build, explore, and survive in a blocky world of limitless creativity."
              gameRating="E"
            />
            <GameContainer
              gameImage="/fortnite_150.jpg"
              gameTitle="Fortnite"
              gameBriefDescription="Drop into a battle royale and outlast your opponents in a colorful world."
              gameRating="M"
            />
            <GameContainer
              gameImage="/gta5_150.jpg"
              gameTitle="Grand Theft Auto V"
              gameBriefDescription="Explore the fictional city of Los Santos and get involved in criminal activities."
              gameRating="M"
            />
            <GameContainer
              gameImage="/skyrim_150.jpg"
              gameTitle="The Elder Scrolls V: Skyrim"
              gameBriefDescription="Embark on an epic fantasy adventure as the Dragonborn in the land of Skyrim."
              gameRating="M"
            />
          </div>
        </div>
      </div>
    </>
  );
}

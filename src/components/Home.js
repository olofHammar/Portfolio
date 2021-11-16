import React from "react";
import styled from "styled-components";
import Section from "./Section";
import ProjectSection from "./ProjectSection";
import pizzaBirdDescription from "../descriptions";

function Home() {
  const pbImgList = [
    "images/screenshots/pb-ss-1.png",
    "images/screenshots/pp-ss-2.png",
    "images/screenshots/pp-ss-4.png",
    "images/screenshots/pp-ss-5.png",
    "images/screenshots/pp-ss-6.png",
    "images/screenshots/pp-ss-8.png",
  ];

  const bbImgList = [
    "images/screenshots/bb-ss-1.png",
    "images/screenshots/bb-ss-2.png",
    "images/screenshots/bb-ss-3.png",
    "images/screenshots/bb-ss-4.png",
    "images/screenshots/bb-ss-5.png",
    "images/screenshots/bb-ss-6.png",
  ];

  const cnImgList = [
    "images/screenshots/cn-ss-1.png",
    "images/screenshots/cn-ss-2.png",
    "images/screenshots/cn-ss-3.png",
    "images/screenshots/cn-ss-4.png",
    "images/screenshots/cn-ss-5.png",
    "images/screenshots/cn-ss-6.png",
  ];

  const pbDescription = "Ett spel skapat med SwiftUI och SpriteKit. I spelet är du en fågel" +
  " som flyger genom olika världar och äter pizza. För varje bit du äter blir du större och tyngre, vilket " +
  "gör det svårare att ta sig genom hinder. Skulle du bli alltför tung kan du försöka flyga in i en broccoli." +
  "Dessa har nämligen motsatt effekt."

  const bpDescription = "En task-manager skapad åt företaget byBrick. Appen hjälper företaget " +
  "i processerna kring On/Offboarding. I appen kan du hantera dina egna arbetsuppgifter kring detta samt få en överblick " +
  "över andra anställdas arbetsuppgifter. Du kan även redigera mallar och arbetsuppgifter samt skapa nya onboarders." +
  "Appen hämtar all data från ett internt API, denna data sparas sedan i en lokal databas. På detta sätt kan appen " +
  "användas offline." +
  "Denna app gjorde jag under min första LIA-period tillsammans med en klasskamrat. Jag kan tyvärr inte länka " +
  "till något repository då företaget äger appen."

  const cnDescription = "En mobil kokbok skriven i SwiftUI. Appen använder sig av " +
  "Firebase som databas för att spara användare och recept. Som användare kan du skapa egna recept, " +
  "antingen genom appens mallar eller genom att scanna recept från bilder. Alla recept du skapar sparas i din " +
  "lokala kokbok. I denna bok kan du även spara favorit-recept från andra användare. Du kan även lägga till ingredienser från recept " +
  "i din shoppinglista som du senare kan checka av när du handlar till receptet."

  const msDescription = "En webbapplikation skriven i React. Denna app var ett grupparbete. Uppgiften var att " + 
  "bygga en hemsida som hämtar data från Omdb:s API. " +
  "Jag ansvarade för Home-sidan och Cart-sidan. Jag gjorde även designen på allt utom Family-sidan. Kolla gärna in hemsidan på länken nedan. " +
  "Vill du logga in kan du använda Olle@mail.com med lösenord 123456."


  return (
    <Container>
      <Section id="profile" />
      <ProjectSection
        id="pizza-bird"
        title="PIZZA BIRD"
        description={pbDescription}
        backgroundImg="bg-pizza-bird.png"
        leftBtnText="Repository"
        rightBtnText="Screen Shots"
        icon="images/icons/swift-icon.png"
        images={pbImgList}
        link="https://github.com/olofHammar/PizzaBird"
        arrow={true}
      />
      <ProjectSection
        id="onboarder"
        title="ONBOARDING MANAGER"
        description={bpDescription}
        backgroundImg="bg-by-process.png"
        leftBtnText="bybrick website"
        rightBtnText="Screen Shots"
        icon="images/icons/kotlin-icon.png"
        images={bbImgList}
        link="https://www.bybrick.se/en/"
        arrow={true}
      />
      <ProjectSection
        id="chef-notes"
        title="CHEF NOTES"
        description={cnDescription}
        backgroundImg="bg-chef-notes.png"
        leftBtnText="Repository"
        rightBtnText="Screen Shots"
        icon="images/icons/swift-icon.png"
        images={cnImgList}
        link="https://github.com/olofHammar/Chefnotes"
        arrow={true}
      />
      <ProjectSection
        id="movie-store"
        title="MOVIE STORE"
        description={msDescription}
        backgroundImg="bg-moviestore-small.png"
        leftBtnText="Website"
        icon="images/icons/react-icon.png"
        images={pbImgList}
        link="https://olofhammar.github.io/MovieStore/#/"
        arrow={false}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

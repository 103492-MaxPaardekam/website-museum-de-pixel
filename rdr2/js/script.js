let currentLang = "nl";

const languageData = {
  // title
  "doc-title": {
    nl: "Red Dead Redemption 2: Museum De Pixel",
    en: "Red Dead Redemption 2: Museum De Pixel",
  },
  // header
  "lang-text": { nl: "English", en: "Nederlands" },
  "back-to-overview": {
    nl: "Terug naar Overzicht",
    en: "Back to Overview",
  },
  // nav
  "nav-world": { nl: "De Wereld & Verhaal", en: "The World & Story" },
  "nav-characters": {
    nl: "De Van der Linde Gang",
    en: "The Van der Linde Gang",
  },
  "nav-details": {
    nl: "Creatieve Keuzes & Details",
    en: "Creative Choices & Details",
  },
  // wereld pagina
  "world-title": {
    nl: "Een Einde aan het Wilde Westen",
    en: "An End to the Wild West",
  },
  "world-premise-title": {
    nl: "De Premisse: 1899",
    en: "The Premise: 1899",
  },
  "world-premise-p1": {
    nl: "Red Dead Redemption 2 werpt ons in 1899, het onvermijdelijke einde van het Wilde Westen. De tijd van de outlaws loopt op zijn einde; beschaving, wetgeving en industrialisatie nemen de overhand. Het verhaal volgt Arthur Morgan, een ervaren lid van de Van der Linde Gang, die na een mislukte overval in Blackwater op de vlucht is.",
    en: "Red Dead Redemption 2 throws us into 1899, the inevitable end of the Wild West. The era of outlaws is drawing to a close; civilization, legislation, and industrialization are taking over. The story follows Arthur Morgan, a seasoned member of the Van der Linde Gang, who is on the run after a botched robbery in Blackwater.",
  },
  "world-premise-p2": {
    nl: "De game is een emotioneel zware reis over loyaliteit, verraad en de vraag of een mens kan veranderen. Arthur moet de strijd aangaan met oprukkende autoriteiten, rivaliserende bendes én zijn eigen morele kompas. Het is de ultieme saga van overleven in een wereld die geen plaats meer heeft voor hen.",
    en: "The game is an emotionally heavy journey about loyalty, betrayal, and the question of whether a person can change. Arthur must contend with advancing authorities, rival gangs, and his own moral compass. It is the ultimate saga of survival in a world that no longer has a place for them.",
  },
  "world-img-caption": {
    nl: "De uitgestrekte, adembenemende wereld van 'Ambarino' en 'New Hanover'.",
    en: "The vast, breathtaking world of 'Ambarino' and 'New Hanover'.",
  },
  "world-did-you-know-title": { nl: "Wist je dat?", en: "Did you know?" },
  "world-did-you-know-content": {
    nl: "RDR2 is een prequel op Red Dead Redemption (2010). Hoewel Arthur Morgan het nieuwe hoofdpersonage is, krijgen we te zien hoe de jongere John Marston (de hoofdpersoon uit de eerste game) lid was van de gang en wat leidde tot de gebeurtenissen in zijn verhaal.",
    en: "RDR2 is a prequel to Red Dead Redemption (2010). Although Arthur Morgan is the new protagonist, we get to see how the younger John Marston (the protagonist of the first game) was a member of the gang and what led to the events in his story.",
  },
  "world-video-title": {
    nl: "De Sfeer van de Wereld",
    en: "The Vibe of the World",
  },
  "world-video-desc": {
    nl: "Een officiële trailer die de sfeer en de uitgestrekte wereld van Red Dead Redemption 2 laat zien.",
    en: "An official trailer showing the atmosphere and the vast world of Red Dead Redemption 2.",
  },
  // karakter pagina
  "characters-title": {
    nl: "Loyaliteit en Verraad",
    en: "Loyalty and Betrayal",
  },
  "char-arthur-role": {
    nl: "De Loyale Handhaver",
    en: "The Loyal Enforcer",
  },
  "char-arthur-desc": {
    nl: "De protagonist en de speler's blik op de veranderende wereld. Arthur is een pragmatische outlaw die worstelt met de idealen van zijn leider.",
    en: "The protagonist and the player's view of the changing world. Arthur is a pragmatic outlaw who struggles with the ideals of his leader.",
  },
  "char-dutch-role": {
    nl: "De Charismatische Leider",
    en: "The Charismatic Leader",
  },
  "char-dutch-desc": {
    nl: "De leider van de bende, een man van visie en retoriek die droomt van een leven buiten de greep van de overheid.",
    en: "The gang's leader, a man of vision and rhetoric who dreams of a life free from government grasp.",
  },
  "char-john-role": { nl: "De Ex-Zwerver", en: "The Ex-Wanderer" },
  "char-john-desc": {
    nl: "De hoofdpersoon van de eerste game en Arthurs protégé. Zijn relatie met de bende is gespannen.",
    en: "The protagonist of the first game and Arthur's protégé. His relationship with the gang is strained.",
  },
  "char-more-details": {
    nl: "MEER DETAILS (Tikken)",
    en: "MORE DETAILS (Tap)",
  },
  "char-family-title": {
    nl: "De Bende als Familie",
    en: "The Gang as Family",
  },
  "char-family-desc": {
    nl: "De Van der Linde Gang bestaat uit meer dan 20 unieke karakters, elk met hun eigen verhaal, taak en relatie met Arthur. Hun kamp fungeert als een dynamisch thuisbasis dat evolueert op basis van de donaties van de speler en de voortgang van het verhaal.",
    en: "The Van der Linde Gang consists of over 20 unique characters, each with their own story, task, and relationship with Arthur. Their camp acts as a dynamic home base that evolves based on player donations and story progress.",
  },
  "char-family-quote": {
    nl: '"Wij zijn spoken die proberen een vuur te stoken in een koudgemaakte wereld." - Dutch',
    en: '"We’re ghosts trying to light a fire in a world that’s been made cold." - Dutch',
  },
  // details pagina
  "details-title": {
    nl: "Ongeëvenaard Realisme",
    en: "Unrivaled Realism",
  },
  "det-immersion-title": {
    nl: "Focus op Immersie",
    en: "Focus on Immersion",
  },
  "det-immersion-p1": {
    nl: "Rockstar Games heeft RDR2 ontworpen met een obsessie voor detail. Vrijwel elk systeem draagt bij aan de immersie en het gevoel van leven in de wereld van 1899. Dit omvat:",
    en: "Rockstar Games designed RDR2 with an obsession for detail. Virtually every system contributes to the immersion and the feeling of living in the 1899 world. This includes:",
  },
  "det-immersion-li1": {
    nl: "Gedetailleerde Animatie: Arthur pakt elk object, bergt wapens individueel op, en deelt gesprekken terwijl hij te paard rijdt.",
    en: "Detailed Animation: Arthur picks up every object, holsters weapons individually, and shares conversations while riding horseback.",
  },
  "det-immersion-li2": {
    nl: "Haar- en Baardgroei: Arthurs haar groeit in realtime en kan alleen worden geknipt/geschoren.",
    en: "Hair and Beard Growth: Arthur's hair grows in real-time and can only be cut/shaved.",
  },
  "det-immersion-li3": {
    nl: "Het Paard: Jouw paard is niet alleen transport, maar een levend wezen dat verzorging en voeding nodig heeft.",
    en: "The Horse: Your horse is not just transportation, but a living creature that needs care and nourishment.",
  },
  "det-immersion-li4": {
    nl: "Klimaatbeïnvloeding: Kledingkeuzes beïnvloeden je statistieken bij koud of warm weer.",
    en: "Climate Influence: Clothing choices affect your stats in cold or warm weather.",
  },
  "det-honor-title": {
    nl: "Het Eer (Honor) Systeem",
    en: "The Honor System",
  },
  "det-honor-p1": {
    nl: "Een cruciaal mechanisme is het 'Honor'-systeem, dat Arthurs reputatie weerspiegelt. Goede daden (mensen helpen, groeten) verhogen je eer; slechte daden (diefstal, willekeurige moorden) verlagen deze.",
    en: "A crucial mechanism is the 'Honor' system, which reflects Arthur's reputation. Good deeds (helping people, greeting) increase your honor; bad deeds (theft, random murders) decrease it.",
  },
  "det-honor-p2": {
    nl: "De eer-stand heeft directe gevolgen voor het spel: de prijzen bij winkeliers, de reacties van NPC's, de muziek die speelt, en, cruciaal, de cinematische scènes en het einde van het verhaal. Het dwingt de speler na te denken over zijn morele keuzes in de chaos van de bende.",
    en: "The honor level has direct consequences for the game: prices at shopkeepers, the reactions of NPCs, the music that plays, and, crucially, the cinematic scenes and the end of the story. It forces the player to consider their moral choices in the chaos of the gang.",
  },
  "det-trivia-title": { nl: "Productie Weetje", en: "Production Fact" },
  "det-trivia-content": {
    nl: "Het spel bevat meer dan 500.000 regels dialoog. NPC's (niet-speelbare personages) reageren dynamisch op jouw handelingen en uiterlijk: als je bloed op je kleding hebt, kan dit paniek veroorzaken in de stad!",
    en: "The game contains over 500,000 lines of dialogue. NPCs (non-playable characters) react dynamically to your actions and appearance: if you have blood on your clothes, it can cause panic in town!",
  },
  "footer-text": {
    nl: "&copy; 2025 Museum De Pixel - RDR2 Exhibit (Door: [Jouw Naam] | GLR Project)",
    en: "&copy; 2025 Museum The Pixel - RDR2 Exhibit (By: [Your Name] | GLR Project)",
  },
  "gallery-modal-title": {
    nl: "Landschaps Galerij",
    en: "Landscape Gallery",
  },
};

// data voor karakter pop-up
const characterData = {
  arthur: {
    name: "Arthur Morgan",
    role: {
      nl: "De Loyale Handhaver en Protagonist",
      en: "The Loyal Enforcer and Protagonist",
    },
    summary: {
      nl: "Arthur is de meest ervaren schutter en de 'rechterhand' van Dutch.",
      en: "Arthur is the most seasoned gunfighter and Dutch's 'right-hand man'.",
    },
    details: {
      nl: "Arthur is in conflict met zichzelf en de idealen van de bendeleider. Zijn reis draait om het vinden van verlossing in een meedogenloze tijd. Hij is een pragmatische man, maar zijn eergevoel (Honor) bepaalt uiteindelijk zijn pad.",
      en: "Arthur is in conflict with himself and the ideals of the gang leader. His journey revolves around finding redemption in a ruthless time. He is a pragmatic man, but his sense of honor ultimately determines his path.",
    },
    quote: {
      nl: '"Ik ben een overlever, denk ik. Ik probeer het te redden, en te doen wat juist is."',
      en: '"I\'m a survivor, I guess. I’m just trying to make it, and do what’s right."',
    },
    image: "media/arthur.jpg",
  },
  dutch: {
    name: "Dutch van der Linde",
    role: {
      nl: "De Charismatische, maar Instabiele Leider",
      en: "The Charismatic, but Unstable Leader",
    },
    summary: {
      nl: "Dutch's filosofie is om vrij te zijn van de wet. Hij is de vaderfiguur van de bende.",
      en: "Dutch's philosophy is to be free from the law. He is the father figure of the gang.",
    },
    details: {
      nl: "Zijn idealisme brokkelt af onder druk, wat leidt tot catastrofale keuzes. Hij is een meester in manipulatie en overreding, constant op zoek naar 'nog één grote slag' die de bende financieel onafhankelijk moet maken. Zijn beroemde uitspraak is: 'Ik heb een plan.'",
      en: "His idealism crumbles under pressure, leading to catastrophic choices. He is a master of manipulation and persuasion, constantly seeking 'one more big score' to make the gang financially independent. His famous saying is: 'I have a plan.'",
    },
    quote: {
      nl: '"Ik heb een plan, Arthur! We hebben alleen wat tijd nodig... en wat geld."',
      en: '"I have a plan, Arthur! We just need some time... and some money."',
    },
    image: "media/dutch.png",
  },
  john: {
    name: "John Marston",
    role: {
      nl: "De Ex-Zwerver en Toekomstige Protagonist",
      en: "The Ex-Wanderer and Future Protagonist",
    },
    summary: {
      nl: "John is Arthurs protégé en de hoofdpersoon van de eerste Red Dead Redemption.",
      en: "John is Arthur's protégé and the protagonist of the first Red Dead Redemption.",
    },
    details: {
      nl: "John probeert zijn verleden als outlaw achter zich te laten om een rustig leven met Abigail en Jack te leiden. Hij is een bekwame schutter, maar in RDR2 nog jonger en onervarener. Arthur heeft een complexe, broederlijke relatie met hem.",
      en: "John tries to leave his outlaw past behind to lead a quiet life with Abigail and Jack. He is a skilled gunfighter but younger and less experienced in RDR2. Arthur has a complex, fraternal relationship with him.",
    },
    quote: {
      nl: '"Ik ben nergens trots op. Helemaal nergens."',
      en: '"I ain\'t proud of nothing. Nothing at all."',
    },
    image: "media/john.jpg",
  },
};

// data voor galerij pop-up
const galleryImages = [
  {
    url: "media/mountains.jpg",
    caption: {
      nl: "De besneeuwde, gevaarlijke bergen van Ambarino.",
      en: "The snowy, dangerous mountains of Ambarino.",
    },
  },
  {
    url: "media/valley.jpg",
    caption: {
      nl: "Een zonnige, uitgestrekte vallei in New Hanover.",
      en: "A sunny, expansive valley in New Hanover.",
    },
  },
  {
    url: "media/swamps.jpg",
    caption: {
      nl: "De sinistere en mistige moerassen van Lemoyne.",
      en: "The sinister and misty swamps of Lemoyne.",
    },
  },
  {
    url: "media/desert.png",
    caption: {
      nl: "De dorre, roodgekleurde woestijn van New Austin.",
      en: "The arid, red-colored desert of New Austin.",
    },
  },
];
let currentImageIndex = 0;

// vertaal functie
function updateTextContent(lang) {
  // update alle elementen
  document
    .querySelectorAll(
      '[id^="nav-"], [id^="world-"], [id^="characters-"], [id^="details-"], [id^="det-"], #main-title, #lang-text, #back-to-overview, #footer-text, [data-key]'
    )
    .forEach((el) => {
      const key = el.id || el.getAttribute("data-key");
      if (languageData[key] && languageData[key][lang]) {
        el.innerHTML = languageData[key][lang];
      }
    });

  // losse updates
  document.getElementById("doc-title").textContent =
    languageData["doc-title"][lang];

  // headings
  const btnText = lang === "nl" ? "English" : "Nederlands";
  document.getElementById("lang-text").textContent = btnText;

  // update de karakter pop-ups
  document.querySelectorAll(".character-card").forEach((card) => {
    const charId = card.getAttribute("data-character");
    if (characterData[charId]) {
      const descElement = card.querySelector(
        `[data-key="char-${charId}-desc"]`
      );
      if (descElement) {
        descElement.textContent = characterData[charId].summary[lang];
      }
    }
  });

  // update de galerij pop-up
  document.getElementById("gallery-title").textContent =
    languageData["gallery-modal-title"][lang];
  updateGalleryCaption();
}

// pagina nav
function switchPage(targetPageId) {
  const contents = document.querySelectorAll(".page-content");
  const buttons = document.querySelectorAll(".nav-button");

  contents.forEach((content) => content.classList.add("hidden"));

  const targetContent = document.getElementById(`page-${targetPageId}`);
  if (targetContent) {
    targetContent.classList.remove("hidden");
    targetContent.scrollTop = 0;
  }

  buttons.forEach((button) => {
    const buttonPage = button.getAttribute("data-page");
    if (buttonPage === targetPageId) {
      button.classList.add("nav-active");
      button.classList.remove("nav-inactive");
    } else {
      button.classList.remove("nav-active");
      button.classList.add("nav-inactive");
    }
  });
}

// karakter pop-up code
const charModal = document.getElementById("character-modal");
function showModal(characterId) {
  const data = characterData[characterId];
  if (!data) return;

  // popup vullen
  document.getElementById("modal-name").textContent = data.name;
  document.getElementById("modal-role").textContent = data.role[currentLang];
  document.getElementById("modal-summary").textContent =
    data.summary[currentLang];
  document.getElementById("modal-details").textContent =
    data.details[currentLang];
  document.getElementById("modal-quote").textContent = data.quote[currentLang];
  document.getElementById("modal-image").src = data.image;

  charModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  charModal.classList.add("hidden");
  document.body.style.overflow = "initial";
}

// galerij pop-up code
const galleryModal = document.getElementById("gallery-modal");
const galleryImageElement = document.getElementById("current-gallery-image");
const galleryCaptionElement = document.getElementById("gallery-caption");

function updateGalleryCaption() {
  const currentCaption = galleryImages[currentImageIndex].caption[currentLang];
  galleryCaptionElement.textContent = `${currentCaption} (${
    currentImageIndex + 1
  } van ${galleryImages.length}).`;
}

function changeGalleryImage(direction) {
  galleryImageElement.style.opacity = 0;

  setTimeout(() => {
    currentImageIndex =
      (currentImageIndex + direction + galleryImages.length) %
      galleryImages.length;
    galleryImageElement.src = galleryImages[currentImageIndex].url;
    updateGalleryCaption();
    galleryImageElement.style.opacity = 1;
  }, 300); // fade out tijd
}

function showGallery() {
  currentImageIndex = 0; // begin bij de eerste foto
  galleryImageElement.src = galleryImages[currentImageIndex].url;
  galleryImageElement.style.opacity = 1;
  updateGalleryCaption();

  galleryModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideGallery() {
  galleryModal.classList.add("hidden");
  document.body.style.overflow = "initial";
}

// event listeners
document.addEventListener("DOMContentLoaded", () => {
  // start instellingen
  updateTextContent(currentLang);
  switchPage("world");

  document.getElementById("translate-button").addEventListener("click", () => {
    currentLang = currentLang === "nl" ? "en" : "nl";
    updateTextContent(currentLang);

    if (!charModal.classList.contains("hidden")) {
      hideModal();
    }
  });

  // nav buttons
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      switchPage(e.currentTarget.getAttribute("data-page"));
    });
  });

  // karakter pop-up events
  document.querySelectorAll(".character-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const charId = e.currentTarget.getAttribute("data-character");
      showModal(charId);
    });
  });

  // swipe nav
  const contentContainer = document.getElementById("content-container");
  let touchStartX = 0;
  let touchEndX = 0;
  const threshold = 100;
  const pageOrder = ["world", "characters", "details"];

  function checkDirection() {
    const deltaX = touchEndX - touchStartX;
    const activePageButton = document.querySelector(".nav-button.nav-active");
    if (!activePageButton) return;

    let currentPageIndex = pageOrder.indexOf(
      activePageButton.getAttribute("data-page")
    );

    if (deltaX < -threshold) {
      if (currentPageIndex < pageOrder.length - 1) {
        switchPage(pageOrder[currentPageIndex + 1]);
      }
    } else if (deltaX > threshold) {
      if (currentPageIndex > 0) {
        switchPage(pageOrder[currentPageIndex - 1]);
      }
    }
  }

  contentContainer.addEventListener("touchstart", (e) => {
    if (
      charModal.classList.contains("hidden") &&
      galleryModal.classList.contains("hidden")
    ) {
      touchStartX = e.changedTouches[0].screenX;
      touchEndX = 0;
    }
  });

  contentContainer.addEventListener("touchend", (e) => {
    if (
      charModal.classList.contains("hidden") &&
      galleryModal.classList.contains("hidden")
    ) {
      touchEndX = e.changedTouches[0].screenX;
      checkDirection();
    }
  });
});

const blogPosts = [
  {
    id: 5,
    week: "Week 11",
    date: "Mar 26, 2026",
    title: "Milestone 5: Beta",
    timestamp: "Posted 6:45 PM",
    body: [
      {
        type: "image",
        src: "Img/BetaPresentation.png",
        alt: "Desk TD Beta Presentation",
      },
      {
        type: "paragraph",
        content:
          "For our beta milestone, the team focused on increasing content and depth of Desk TD. Over the past two weeks, we brought more reasonable level balancing, a polished menu and navigation system with better outlook, approaching end of lanes warning mechanics and upgraded sprites on bullets and enemies. The result is a game that is more durable and pressured when playing and the player got more immersive experience.",
      },
      {
        type: "paragraph",
        content: "<strong>Contributions</strong>",
      },
      {
        type: "paragraph",
        content:
          "<strong>Abdul</strong> led level design and in level feedback, structuring and building out the Level 1 and 2 game environments with updated wave configurations, enemy tuning, and gameplay logic. He recorded demo presentation video and wrote the part 6 of Game Design Document update.",
      },
      {
        type: "paragraph",
        content:
          "<strong>Kate</strong> wrote the design questions that guide us during the beta code development. She and Janis checked mechanics and gameplay flow through playtesting and provided useful information for the next step game upgrading.",
      },
      {
        type: "paragraph",
        content:
          "<strong>Janis</strong> did playtesting and reports write-up with Kate. She made some minor changes on visual asset as UI integration requirement and prepared text font and other new assets. She also collaborated on the Game Design Document for part 3.",
      },
      {
        type: "paragraph",
        content:
          "<strong>Rakko</strong> replaced and arranged UI integration for all the menu and handbook within new text font and visual assets. He also contributed to the Game Design Document for part 4 and 5.",
      },
      {
        type: "paragraph",
        content: "<strong>Key Features Added</strong>",
      },
      {
        type: "list",
        items: [
          "Better and more reasonable looking for bullets shot from stationery defence towers",
          "Refreshed menu and navigation outlook: main menu, level select, handbook, and prologue cinematic with typewriter text intro scene",
          "Redesigned UI elements placement in the level",
        ],
      },
      {
        type: "paragraph",
        content: "<strong>Looking Ahead</strong>",
      },
      {
        type: "paragraph",
        content:
          "To the golden code, we will create level 3 content, find a better way to illustrate the frozen effect, make the learning curve between level 1 and 2 more meaningful, and refining the overall balancing and player experience.",
      },
    ],
  },

  {
    id: 4,
    week: "Week 09",
    date: "Mar 12, 2026",
    title: "Milestone 4: Alpha",
    timestamp: "Posted 7:23 PM",
    body: [
      {
        type: "paragraph",
        content:
          "For our alpha milestone, the team focused on transforming Desk TD from a functional prototype into a polished, cohesive experience. Over the past three weeks, we brought together full sprite animations, a complete menu and navigation system, new game mechanics, and integrated all individual components into a unified playable build. The result is a game that now feels alive, towers animate when attacking, enemies march with walk cycles, and players are greeted with a cinematic intro sequence before diving into gameplay.",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/XA5Q6N2_Be0",
        alt: "Desk TD Alpha Demo",
      },
      {
        type: "paragraph",
        content: "<strong>Contributions</strong>",
      },
      {
        type: "paragraph",
        content:
          "<strong>Abdul</strong> led level design and programming, structuring and building out the Level 2 game environment with updated wave configurations, enemy tuning, and gameplay logic. He partnered with Kate for playtesting sessions to validate mechanics and gameplay flow, and captured narrated video footage for the demo presentation.",
      },
      {
        type: "paragraph",
        content:
          "<strong>Kate</strong> designed the user interface for the game's menus, including the main menu, pause menu, level select, and handbook screens. She collaborated with Abdul on playtesting to identify issues in the player experience, and co-authored the revised Game Design Document alongside Janis and Rakko.",
      },
      {
        type: "paragraph",
        content:
          "<strong>Janis</strong> created the visual sprite assets and animations that bring the game to life, enemy walk cycles, pencil shoot flashes, compass wind-up sequences, sticky note damage states, and spark tower fill-level indicators. She also collaborated on the Game Design Document.",
      },
      {
        type: "paragraph",
        content:
          "<strong>Rakko</strong> programmed the underlying logic for the start screen, menus, and story scenes, including the intro cinematic with a typewriter text effect, level select navigation, persistent menu music, and a universal button click sound system. He then stitched all individual components, art, mechanics, menus, and audio, together into a cohesive, playable build. Rakko also contributed to the Game Design Document.",
      },
      {
        type: "paragraph",
        content: "<strong>Key Features Added</strong>",
      },
      {
        type: "list",
        items: [
          "Full sprite animation system for all towers and enemies, including attack sequences and damage states",
          "Complete menu and navigation flow: main menu, level select, pause menu, handbook, and prologue cinematic with typewriter text",
          "Ink shield mechanic allowing enemies to gain a protective shield when walking on ink trails left by other enemies",
          "Arc projectile system with splash damage for the compass tower",
          "Tower kill quips, humorous pop-up messages unique to each tower type when they land the final hit of a wave",
          "Persistent audio system with menu music, button click SFX, and scene-aware transitions",
        ],
      },
      {
        type: "paragraph",
        content: "<strong>Looking Ahead</strong>",
      },
      {
        type: "paragraph",
        content:
          "With the alpha build complete, our next focus will be on further balancing difficulty across levels, expanding Level 3 content, and refining the overall player experience based on continued playtesting feedback. We also aim to polish visual and audio elements for a more immersive final build.",
      },
    ],
  },

  {
    id: 3,
    week: "Week 06",
    date: "Feb 12, 2026",
    title: "Milestone 3: First Playable",
    timestamp: "Posted 9:12 PM",
    body: [
      {
        type: "paragraph",
        content:
          "For our first playable deliverable, we started earlier in the previous week to implement appropriate programming logic, conduct playtest sessions, and revise our GDD. For technical requirements, Abdul fully polished the code with further functional elements including wave timing, spark generation, enemy movement, and the core mechanics. He also created and added sound effects and background music for additional engagement. Rakko focused on finalizing the code for main menu and prologue cutscenes with their visuals.",
      },
      {
        type: "image-pair",
        images: [
          { src: "Img/playtesting-lab.jpg", alt: "Playtesting Lab Session" },
          {
            src: "Img/week6-journal-figma.png",
            alt: "Week 6 Journal FigJam",
          },
        ],
      },
      {
        type: "paragraph",
        content:
          "When the first playable prototype was ready, Abdul organized a FigJam with five design test questions. Abdul and Kate then set up playtesting sessions with their participants, observed their play patterns, debriefed them, and recorded the result in a shared document. This document became the backbone of our revised GDD, and helped us effectively recognize what we were missing in our mechanics and aesthetics. Janis synthesized this information and organized it into a revised GDD, emphasizing the need to adjust for difficulty curve, clarify Spark Tower's role, and fix minor aesthetics and bugs.",
      },
      {
        type: "paragraph",
        content: "<strong>Looking Ahead</strong>",
      },
      {
        type: "paragraph",
        content:
          "For the next iteration, we plan to focus on adjusting the unit pricing, level designing, and adding the narrative and aesthetic parts. To reduce player confusion, we hope to improve visual cues on stats, spark towers, health bars, and instructions.",
      },
    ],
  },

  {
    id: 2,
    week: "Week 04",
    date: "Jan 29, 2026",
    title: "Milestone 2: Game Design Document & Presentation",
    timestamp: "Posted 8:55 PM",
    body: [
      {
        type: "paragraph",
        content:
          "This week, our team focused on building the first Game Design Document for Desk TD. We laid out the initial structures, finalized our narrative flowboards, and prepared a polished presentation. We also added several fine details such as prologue length and consistency to increase the game's depth.",
      },
      {
        type: "image",
        src: "Img/brainstorm.jpg",
        alt: "GDD Presentation Slides",
      },
      {
        type: "paragraph",
        content: "<strong>Contributions</strong>",
      },
      {
        type: "paragraph",
        content:
          "Abdul created an organized agenda and laid out the initial structures for the rest of the teammates to build upon. Kate developed the functional and narrative flowboard, then Abdul finalized the narrative flowboard, gameplay mode, resolution type, and appeal evaluation. Rakko defined the smart depth and protagonist/antagonist concepts, while Janis visually designed concept shots as well as protagonists and antagonists.",
      },
      {
        type: "paragraph",
        content:
          "Afterwards, Kate set up a shared document for members to add their part, and Abdul built the presentation slides and assigned speaking roles for each teammate. Janis also created animated sprites for visual richness to our presentation. We ultimately added several fine details such as prologue length, consistency, and the addition of mug blocks and freeze-status monsters to increase depth.",
      },
      {
        type: "paragraph",
        content: "<strong>Looking Ahead</strong>",
      },
      {
        type: "paragraph",
        content:
          "For the next milestone, our goal is to expand these foundations into a functional prototype. Based on GDD presentation feedback, we decided to distribute smart depth more effectively across player learning curve, introducing incrementing difficulty across three levels. We will introduce the mug blocks in level 2, and freezing monsters in level 3 with a 5-second cooldown and a 3-second frozen-status duration. Abdul and Rakko will focus on implementing the core mechanic coding including tiling, drag-and-drop placement, shooting mechanics, and a main screen UI leading into prologue. Janis and Kate will refine illustrations for tighter animation and consistent theme aligning with our intended rustic visual style.",
      },
    ],
  },

  {
    id: 1,
    week: "Week 02",
    date: "Jan 15, 2026",
    title: "Milestone 1: Greenlight Review - Desk TD",
    timestamp: "Posted 1:04 PM",
    body: [
      {
        type: "paragraph",
        content:
          "This week, we successfully reached our first major milestone for IAT 410 by completing the Greenlight Review for our project, Desk TD. We formed our team and worked together to create the game, where we defend an office desk from 'job-scared' ink monsters",
      },
      {
        type: "image",
        src: "Img/gameOverview.png",
        alt: "Game Image",
      },
      {
        type: "paragraph",
        content: "<strong>Individual Contributions</strong>",
      },
      {
        type: "list",
        items: [
          "<strong>Abdul Aziz Hamoui:</strong> Abdul created the core storyboard and idea on Figjam and then helped finalizing our 12-page proposal document. He also coordinated the team’s tasks as well as presentation hand-off",
          "<strong>Kate Lee:</strong> Kate established our shared workspace, led the narrative development and documentation by structuring it in the google doc, and recorded the instructor's feedback during the review to guide our next steps.",
          "<strong>Janis Tong:</strong> Janis designed the initial sketches for our stationery defenders; the Pencil, Compass, and Eraser, and visualized the core gameplay loop.",
          "<strong>Haoyu (Rakko) Zhan:</strong> Rakko developed our polished presentation slides, outlined our technical strategy using Unity, and stepped in to present mechanics during the greenlight presentation.",
        ],
      },
      {
        type: "paragraph",
        content: "<strong>Looking Ahead</strong>",
      },
      {
        type: "paragraph",
        content:
          "Our presentation on January 14th received positive feedback, especially regarding our 'Inked Tile' mechanic which forces players to actively clean the board. We are now refining our work into Game Proposal 2.0 and beginning technical prototyping.",
      },
    ],
  },
];

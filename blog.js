const blogPosts = [
  {
    id: 1,
    week: "Week 02",
    date: "Jan 15, 2026",
    title: "Milestone 1: Greenlight Review - Desk TD",
    timestamp: "Posted 1:04 PM",
    body: [
      {
        type: "paragraph",
        content: "This week, we successfully reached our first major milestone for IAT 410 by completing the Greenlight Review for our project, Desk TD. We formed our team and worked together to create the game, where we defend an office desk from 'job-scared' ink monsters"
      },
      {
        type: "image",
        src: "gameOverview.png",
        alt: "Game Image"
      },
      {
        type: "paragraph",
        content: "<strong>Individual Contributions</strong>"
      },
      {
        type: "list",
        items: [
          "<strong>Abdul Aziz Hamoui:</strong> Abdul created the core storyboard and idea on Figjam and then helped finalizing our 12-page proposal document. He also coordinated the team’s tasks as well as presentation hand-off",
          "<strong>Kate Lee:</strong> Kate established our shared workspace, led the narrative development and documentation by structuring it in the google doc, and recorded the instructor's feedback during the review to guide our next steps.",
          "<strong>Janis Tong:</strong> Janis designed the initial sketches for our stationery defenders; the Pencil, Compass, and Eraser, and visualized the core gameplay loop.",
          "<strong>Haoyu (Rakko) Zhan:</strong> Rakko developed our polished presentation slides, outlined our technical strategy using Unity, and stepped in to present mechanics during the greenlight presentation."
        ]
      },
      {
        type: "paragraph",
        content: "<strong>Looking Ahead</strong>"
      },
      {
        type: "paragraph",
        content: "Our presentation on January 14th received positive feedback, especially regarding our 'Inked Tile' mechanic which forces players to actively clean the board. We are now refining our work into Game Proposal 2.0 and beginning technical prototyping."
      }
    ]
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
        content: "This week, our team focused on building the first Game Design Document for Desk TD. We laid out the initial structures, finalized our narrative flowboards, and prepared a polished presentation. We also added several fine details such as prologue length and consistency to increase the game's depth."
      },
      {
        type: "image",
        src: "barinstorm.jpg",
        alt: "GDD Presentation Slides"
      },
      {
        type: "paragraph",
        content: "<strong>Individual Contributions</strong>"
      },
      {
        type: "paragraph",
        content: "Abdul created an organized agenda and laid out the initial structures for the rest of the teammates to build upon. Kate developed the functional and narrative flowboard, then Abdul finalized the narrative flowboard, gameplay mode, resolution type, and appeal evaluation. Rakko defined the smart depth and protagonist/antagonist concepts, while Janis visually designed concept shots as well as protagonists and antagonists."
      },
      {
        type: "paragraph",
        content: "Afterwards, Kate set up a shared document for members to add their part, and Abdul built the presentation slides and assigned speaking roles for each teammate. Janis also created animated sprites for visual richness to our presentation. We ultimately added several fine details such as prologue length, consistency, and the addition of mug blocks and freeze-status monsters to increase depth."
      }, 
      {
        type: "paragraph",
        content: "<strong>Looking Ahead</strong>"
      },
      {
        type: "paragraph",
        content: "For the next milestone, our goal is to expand these foundations into a functional prototype. Based on GDD presentation feedback, we decided to distribute smart depth more effectively across player learning curve, introducing incrementing difficulty across three levels. We will introduce the mug blocks in level 2, and freezing monsters in level 3 with a 5-second cooldown and a 3-second frozen-status duration. Abdul and Rakko will focus on implementing the core mechanic coding including tiling, drag-and-drop placement, shooting mechanics, and a main screen UI leading into prologue. Janis and Kate will refine illustrations for tighter animation and consistent theme aligning with our intended rustic visual style."
      }
    ]
  }
];

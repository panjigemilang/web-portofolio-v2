import moment from "moment"
import BloomBrowser from "../../Assets/img/Bloombrowser.png"
import DevKami from "../../Assets/img/Dev Kami.png"
import Fkhapps from "../../Assets/img/fkhapps.png"
import Login from "../../Assets/img/login_page.jpg"
import Dashboard from "../../Assets/img/dashboard.jpg"
import Ptpnx from "../../Assets/img/Ptpnx.png"
import Presentation from "../../Assets/img/Presentation.jpg"
import Hoping from "../../Assets/img/hoping.jpg"
import Company from "../../Assets/img/company.jpg"
import Bandara from "../../Assets/img/Bandara Kansai.jpeg"
import OsakaCastle from "../../Assets/img/Osaka castle.jpeg"
import Jembatan from "../../Assets/img/jembatan.jpeg"
import Balik from "../../Assets/img/balik.JPG"
import KampungDesa from "../../Assets/img/kampung desa.png"
import PapaBlog from "../../Assets/img/Papa Blog.png"
import Bdd from "../../Assets/img/bdd.jpg"
import BddDashboard from "../../Assets/img/bdd-dashboard.jpg"
import BddForm from "../../Assets/img/bdd-form.jpg"


const content2019 = [
  {
    title: "Devkami (Project)",
    job: "Fullstack Developer",
    date: `Mar - May 2019 . ${new moment('2019-05-01').diff('2019-03-01', 'months')} Mos`,
    src: DevKami,
    description:
      "This project is my first time making an apps as a fullstack engineer. This apps is like social media app but for developer. you can make a post and comment and like a post and seeing someone profile. you can check the project at the link below.",
    descriptionOne:
      "\xa0\xa0This is my first web apps working as a fullstack engineer. Dev Kami is a website to connects developer all around the world. This website has functionality like the following :",
    functions: [
      "Authentication with token",
      "Create profile and seeing someone profiles",
      "Make a post",
      "Make a comment",
      "Like and dislike a post",
    ],
    descriptionTwo: " ",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "Javascript",
      "React JS",
      "Expressjs",
      "Node JS",
      "MongoDB",
      "Bootstrap 4",
    ],
    outro: "The project can be seen from the link below.",
    link: "https://devkami.herokuapp.com/",
  },
  {
    title: "PTPN X (Internship)",
    job: "Fullstack Developer",
    date: "Jul - Aug 2019 . 2 Mos",
    src: Ptpnx,
    src2: Presentation,
    description:
      "I was doing internship as a Fullstack website developer. I made the design, front-end and the back-end using React JS, Node JS, Expressjs, and MongoDB. The sample project can be seen at the link below.",
    descriptionOne:
      "\xa0\xa0I was doing internship as a Fullstack website developer. I'm working at the PTPN X Djoembang Baru company, Jombang, East Java for 3 months. PT Perkebunan Nusantara (PTPN) is the name of fourteen state-owned companies operating in the plantation sector throughout Indonesia. \n\xa0\xa0I was assigned to make a full-stack website to be used as internal company needs. This website has functionality like the following :",
    functions: [
      "Authentication with token",
      "Import xlsx into a data",
      "Showing employees biodata",
      "Export data to be printable",
      "Upload an image",
      "Editable data",
    ],
    descriptionTwo:
      "\xa0\xa0I gain a lot of experiences from this opportunity. I was talking with the clients, hearing what they need, solving the problem, and presented it.",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "Javascript",
      "React JS",
      "Expressjs",
      "Node JS",
      "MongoDB",
      "Bootstrap 4",
    ],
    outro: "The project can be seen from the link below.",
    link: "https://ptpnxdjoembang.herokuapp.com/",
  },
  {
    title: "Kampung Desa (Project)",
    job: "Fullstack Engineer",
    date: "Aug - Oct 2019 . 2 Mos",
    src: KampungDesa,
    description:
      "I'm working as a fullstack developer, and this is my first time working with my team that I created in college. First time we met the clients and discuss the problems. The project can be seen at the link below.",
    descriptionOne:
      "\xa0\xa0On July 27, 2019 I created a team of 5 members to build a software house that provides making a website and android apps. Desa Cerdas Bersahaja is our first project, this website used for the introduction of a new village for common purposes. \n\xa0\xa0I was assigned to be a full-stack engineer. This website has functionality like the following :",
    functions: [
      "Authentication with token",
      "Create a post",
      "Share a post via Whatsapp, Twitter, Facebook, and share as a link",
    ],
    descriptionTwo:
      "\xa0\xa0There was a little problem on the process like clients need keep changing, miss-communication with the team. But finally we can manage it to finished it without problem.",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "Javascript",
      "React JS",
      "Expressjs",
      "Node JS",
      "MongoDB",
      "Bootstrap 4",
    ],
    outro: "The project can be seen from the link below.",
    link: "http://kampungcerdasbersahaja.com/",
  },
]

const content2020 = [
  {
    title: "(有) ホーピング Hoping (Internship)",
    job: "Software Engineer",
    date: "Feb - Mar 2020 . 5 Weeks",
    src: Hoping,
    src2: Bandara,
    src3: Company,
    src4: OsakaCastle,
    src5: Jembatan,
    src6: Balik,
    description:
      "I was working as software engineer using Java, MySQL, Javascript, and Visual Basic to build a  desktop apps. It was supposed to be 2 months internship but I left early because of Corona Outbreak.",
    descriptionOne:
      "\xa0\xa0On 24 February, 2019 I'm going to Osaka, Japan for 2 months internship program. This is my first time going abroad and especially it's Japan, after a long time I dreamed of going to Japan since I was in high school.",
    descriptionTwo:
      "\xa0\xa0I'm working on Hoping company, a company that providing software where you can use with loyalty and always being a trusted company. Mostly the company providing a software for a hospital needs, like dialysis record, bed management, patient comprehensive information, etc. I was assigned to be a software engineer to build a desktop apps, a little bit different from my past experiences.",
    descriptionThree:
      "\xa0\xa0I speak Japanese at the office because not everyone can speak english, fortunately I learned Japanese language for about 6 months so at least we could have a conversation. The problem is the GUI of the desktop is all written in Japanese kanji which I couldn't read. But thanks to other co-workers for helping me whenever I need, they are all good people.",
    descriptionFour:
      "\xa0\xa0There was a time when we were going to a hospital to meet the client. It was a new hospital that just open, so we are given the task to examining rooms and thinking of an appropriate location to install computers and internet network. I learned a lot of things from this experience.",
    descriptionFive:
      "\xa0\xa0Unfortunately, because of the corona outbreak going really bad at that time I must go back earlier than the scheduled. So it was 5 weeks in total. I got a lot of memories that I will never forget. \nSee you later, Japan.",
    link: null,
  },
  {
    title: "FKH Apps (Project)",
    job: "Frontend Engineer",
    date: "Feb - May 2020 . 3 Mos",
    src: Fkhapps,
    src2: Login,
    src2description: "Login Page",
    src3: Dashboard,
    src3description: "Dashboard Lecturer",
    description:
      "I'm working as a frontend engineer on this project. this project is about skripsi online or research paper online based inside the Veterinary Medicine Faculty of Brawijaya University environment. I'm using React JS as frontend framework. It was a little bit complex project that has 3 Users (admin, student, and lecturer) and a business-process feature.",
    descriptionOne:
      "\xa0\xa0Me and my team got a project from the Brawijaya University Faculty of Veterinary Medicine. We build a responsive and progressive web apps for the Veterinary Professional Education thesis. I was assigned to be front-end engineer.",
    descriptionTwo:
      "\xa0\xa0This application has 3 types of user, it is student, lecturer, and admin. The system workflow described on the points below :",
    functions: [
      "Student -> Students can register profession and then upload the proposal or final report document to a selected lecturer",
      "Lecturer -> Lecturer received the documents and then do validation or revision",
      "Admin -> Admin can monitoring everything like seeing all histories of the uploaded documents, seeing how many students that every lecturer guided, etc. Admin can also lock access for the students if they were exceeding the deadline.",
    ],
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: ["Javascript", "React JS", "Laravel", "Mysql", "MDBootstrap"],
    outro:
      "\xa0\xa0This application will be released in September 2020 and ready to be used for the user.",
    link: " ",
  },
  {
    title: "Bloom Browser (Project)",
    job: "Frontend Engineer",
    date: `May - Jul 2020 . 2 Mos`,
    src: BloomBrowser,
    description:
      "Bloom is a free, fast, open - source, web browser. It blocks ads and website trackers, and provides a way for users to customize their search experience with images that inspire from content creators. Users decide what - if any - promoted content they elect to see and ad revenue goes to charity. The project can be seen at the link below.",
    descriptionOne:
      "\xa0\xa0I got a project based on USA client. I was assigned to be a front-end engineer. This project creates browser extensions to remove ads and changing the ads into our custom picture. Currently my task is to make a landing page. Bloom is a free, fast, open - source, web browser. It blocks ads and website trackers, and provides a way for users to customize their search experience with images that inspire from content creators. \nUsers decide what - if any - promoted content they elect to see and ad revenue goes to charity",
    functions: [],
    descriptionTwo: " ",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: ["Javascript", "React JS", "CSS"],
    outro: "The project can be seen from the link below.",
    link: "https://bloombrowser.com/",
  },
  {
    title: "Papa Blog (Project)",
    job: "Fullstack Developer",
    date: `May - Present 2020 .  Mos`,
    src: PapaBlog,
    description:
      "Papa Blog is a blog website. This is my personal project to make a blog website for my father. The development progress takes a bit slow. Currently the sample project isn't available.",
    descriptionOne:
      "\xa0\xa0Papa Blog is a blog website. This is my personal project to make a blog website for my father. He wanted to share his experiences about everything, any life lessons he had, or just a common knowledge to share. This website currently has functionality like the following :",
    functions: [
      "Authentication with token",
      "Create a post share a post via social media or share link",
      "Create a comment",
      "Like a post",
    ],
    descriptionTwo: " ",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "Javascript",
      "Vue JS",
      "Expressjs",
      "Node JS",
      "Mysql",
      "Sequelize",
    ],
    outro: " ",
    link: " ",
  },
  {
    title: "Boleh Dicoba Digital",
    job: "Fullstack Developer",
    date: `September - December 2020 . 3 Mos`,
    src: Bdd,
    src2: BddDashboard,
    src2description: "Dashboard Page",
    src3: BddForm,
    src3description: "Component Form Page",
    description:
      "Boleh Dicoba Digital (BDD) offers services in digital marketing to reflect on growth in businesses’ online presence, including social media & online sales.",
    descriptionOne:
      "\xa0\xa0BDD CMS or Boleh Dicoba Digital Content Management System is a company profile website with manageable content from admin dashboard. Boleh Dicoba Digital (BDD) offers services in digital marketing to reflect on growth in businesses’ online presence, including social media & online sales. Built for today's market, we value being practitioners on every digital platform we oversee and are focused on driving real business results.",
      functions: [
        "Authentication with passport JWT, it's more secure",
        "Build component news and case study",
        "Edit component",
        "Upload images",
        "Content management"
      ],
      descriptionTwo: 
      "\xa0\xa0This website has functionality like the following :",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "HTML",
      "Bootstrap",
      "Javascript",
      "Code Igniter",
      "PHP",
      "Mysql",
    ],
    outro: "The project can be seen from the link below.",
    link: "https://bolehdicoba.com",
  },
]

export { content2019, content2020 }

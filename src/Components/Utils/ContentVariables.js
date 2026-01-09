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
import Inidialo from "../../Assets/img/Blog kita-cropped.jpg"
import InidiaDetail from "../../Assets/img/blog.jpg"
import Bdd from "../../Assets/img/bdd.jpg"
import BddDashboard from "../../Assets/img/bdd-dashboard.jpg"
import BddForm from "../../Assets/img/bdd-form.jpg"
import Opsigo from "../../Assets/img/fotbar-opsigo.jpg"
import Opsicorp from "../../Assets/img/dev-opsicorp.png"
import KanekashiteLogo from "../../Assets/img/okane-logo.png"
import KaneKashite from "../../Assets/img/okane-ss1.png"
import KaneKashite2 from "../../Assets/img/okane-ss2.png"
import KaneKashite3 from "../../Assets/img/okane-ss3.png"
import OpsileaveLogo from "../../Assets/img/opsileave-logo.png"
import Opsileave from "../../Assets/img/opsileave-ss1.png"
import Opsileave2 from "../../Assets/img/opsileave-ss2.png"
import Opsileave3 from "../../Assets/img/opsileave-ss3.png"
import HaikalManagementLogo from "../../Assets/img/haikal-logo.png"
import HaikalManagement from "../../Assets/img/haikal-ss1.png"
import HaikalManagement2 from "../../Assets/img/haikal-ss2.png"
import HaikalManagement3 from "../../Assets/img/haikal-ss3.png"
import { getTranslatedContent } from "./getTranslatedContent"

const content2019 = [
  {
    title: "Devkami (Project)",
    job: "Fullstack Developer",
    date: `Mar - May 2019 . ${new moment("2019-05-01").diff(
      "2019-03-01",
      "months"
    )} Mos`,
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
    title: "Ini Dia Lo (Project)",
    job: "Fullstack Developer",
    date: `Desember 2020 . 1 Mo`,
    src: Inidialo,
    description:
      "Inidialo is a blog website. This is my personal project to make a blog website for my father. The development progress takes a bit slow. Currently the sample project isn't available.",
    descriptionOne:
      "\xa0\xa0Inidialo is a blog website. This is my personal project to make a blog website for my father. He wanted to share his experiences about everything, any life lessons he had, or just a common knowledge to share. This website currently has functionality like the following :",
    functions: [
      "Authentication with token",
      "Create a post share a post via social media or share link",
      "Create a comment",
      "Like a post",
    ],
    src2: InidiaDetail,
    descriptionTwo: " ",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: ["Javascript", "Vue JS", "Laravel", "Mysql"],
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
      "Content management",
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

const content2021 = [
  {
    title: "Opsigo",
    job: "Fullstack Developer",
    date: `Feb - Current . ${new moment().diff("2021-02-01", "months")} Mos`,
    src: Opsigo,
    srcdescription: "Opsigo Team",
    src2: Opsicorp,
    src2description: "Corporate Travel Management System",
    description:
      "I'm working as a fullstack developer on this company. This company is about corporate travel management system. If your company needs to travel for business, need to manage your employees and expenses travel, all things about traveling becomes easier with Opsicorp!!.",
    descriptionOne:
      "\xa0\xa0I have hands-on experience significantly improving company web performance — in one project, I successfully increased overall performance by 67%. I achieved this by refactoring the existing codebase to make it more reusable and maintainable, optimizing API calls to reduce load and latency, and fixing workflow logic issues as well as redundant functions. These improvements not only boosted speed but also enhanced stability and scalability for future development.",
    descriptionTwo:
      "\xa0\xa0I also proposed and initiated a new Group Business Trip feature after identifying that the current app workflow was not efficient for handling batch trips. By analyzing user behavior and operational needs, I saw a clear opportunity to streamline the process, reduce repetitive actions, and improve the overall experience for teams traveling together. This idea is aimed at increasing usability, operational efficiency, and long-term value for the company’s product.",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: ["Javascript", "Jquery", "AngularJS", "C#", ".NET"],
    outro:
      "\xa0\xa0I hope these experiences not only demonstrate my contributions, but also continue to strengthen my skills as a developer in a meaningful and positive way. I’m excited to keep learning, growing, and delivering even greater impact in future projects.",
    link: " ",
  },
]

const content2025 = [
  {
    title: "Kane Kashite",
    job: "Fullstack Developer",
    date: `Dec`,
    src: KaneKashite,
    srcdescription: "Kane Kashite - Split Bill App",
    src2: KaneKashite2,
    src2description: "Kane Kashite - Add Trip Item",
    src3: KaneKashite3,
    src3description: "Kane Kashite - Details Trip Item",
    description:
      "This is an app for keeping track of your expenses for trips with friends! With this app, you can create trip groups and share outstanding trip payments to see how much money you're spending on the trip.",
    descriptionOne:
      "\xa0\xa0I was thinking about an app that could track our expenses when going on a trip with friends. Often, either my friends or I would pay for expenses first, and it can be difficult to remember who is lending or borrowing money. I thought of an app that could help us keep track of shared expenses and outstanding payments, as well as show how much money we are spending on the trip overall.",
    functions: [
      "User can Create, Read, Update, Delete Trip or group Trips",
      "User can split bill based on bills receipt (manually)",
      "User can add friends!",
      "Make your trip to be noted everywhere and anywhere!",
    ],
    descriptionTwo:
      "\xa0\xa0It's really helpful for us as we going to a lot of trips together! It's not even a trip, sometimes just paying someones food or drinks, or even just a movie or concert ticket. It's just a simple app that can help us keep track of our expenses and make it easier to share the cost of the trip.",
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "Typescript",
      "NextJS",
      "Supabase",
      "TailwindCSS",
      "UI Shadcn",
    ],
    outro:
      "\xa0\xa0It's a lot of funs to make this app as I progress to keep expanding the needed features, there could be more features in the future!",
    link: "https://okane-kashite.vercel.app",
  },
  {
    title: "Opsileave",
    job: "Fullstack Developer",
    date: `Dec`,
    src: Opsileave,
    srcdescription: "Opsileave - Leave Management System",
    src2: Opsileave2,
    src2description: "Opsileave - Admin Dashboard",
    src3: Opsileave3,
    src3description: "Opsileave - Employees Management",
    description:
      "This is application for my company leave management system. I made this to test my skills and to make it easier for my company to manage employees leave. Currently we don't have some reliable leave management system to manage our leaves, and sometimes it's miss and we have to do note it manually.",
    descriptionOne:
      "\xa0\xa0Opsileave is application for my company leave management system. Currently there's no dedicated leave management system to manage employees leave, so I made this app to make it easier for my company to manage employees leave. I also added calendar feature to make it easier for employees to see their leave history and work colleagues leaves.",
    descriptionTwo: "\xa0\xa0The core functions is described as below:",
    functions: [
      "User has 2 roles, Admin and Employee",
      "Admin can add, update, delete and read leave & manage employees",
      "Admin can create team and assign to employees",
      "Admin can add their own events on the calendar and employees can also see the events on the calendar.",
      "Employee can see their leaves quota and leave calendar",
      "Employee can request leave and see their leave history",
      "Employee can see their team and their leave days",
    ],
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "Typescript",
      "NextJS",
      "Supabase",
      "TailwindCSS",
      "UI Shadcn",
    ],
    outro:
      "\xa0\xa0Building this leave and employee management application gave me the opportunity to create a solution that directly supports both employees and management by improving efficiency and clarity in leave tracking. This experience further strengthened my development skills, and I’m excited to continue delivering meaningful, high-impact systems in future projects.",
    link: "https://opsileave.vercel.app",
  },
]

const content2026 = [
  {
    title: "Haikal Management System",
    job: "Fullstack Developer",
    date: `Jan`,
    src: HaikalManagement,
    srcdescription: "Haikal Management System - Shops Management Report",
    src2: HaikalManagement2,
    src2description: "Haikal Management System - Dashboard",
    src3: HaikalManagement3,
    src3description: "Haikal Management System - Inventories",
    description:
      "This is application for Shops Management Report. I made this to report, calculate revenues and keep tracking of my mothers-in-law businesses.",
    descriptionOne:
      "\xa0\xa0I built this system to support the management of my mother-in-law’s businesses by transforming manual tracking and scattered records into a structured and reliable digital solution. Because she never keep track of her business, I made this system to help her to keep track of her business and calculate how much money she has spent and how much money she has earned.",
    descriptionTwo:
      "\xa0\xa0Haikal Management System serves as a practical, real-world solution focused on efficiency, clarity, and ease of use. Through this project, I applied my development skills to solve a genuine business need, creating a system that can be helpful for anyone with simple business needs. The core functions is described as below:",
    functions: [
      "User can registered only with invitation code for security",
      "User can create, update, delete and read shops, expenses, transactions, and inventories.",
      "User can do transactions based on inventory",
      "User can see their reports and revenues based on transactions and expenses",
    ],
    technologyIntro:
      "This project was built using the following programming languages and frameworks : ",
    technologies: [
      "Typescript",
      "Laravel",
      "Postgresql",
      "TailwindCSS",
      "UI Shadcn",
    ],
    outro:
      "\xa0\xa0This project was built from a genuine desire to help my mother-in-law better understand and manage her businesses. I aimed to give her clear visibility into her expenses, earnings, and overall performance. I hope this project reflects my commitment to using my skills to solve real problems and create meaningful, practical solutions that truly help the people around me.",
    link: "https://haikal-management.vercel.app",
  },
]

// Function to get translated content arrays
export function getContent2019(language = "en") {
  return content2019.map((item) => getTranslatedContent(item, language))
}

export function getContent2020(language = "en") {
  return content2020.map((item) => getTranslatedContent(item, language))
}

export function getContent2021(language = "en") {
  return content2021.map((item) => getTranslatedContent(item, language))
}

export function getContent2025(language = "en") {
  return content2025.map((item) => getTranslatedContent(item, language))
}

export function getContent2026(language = "en") {
  return content2026.map((item) => getTranslatedContent(item, language))
}

export { content2019, content2020, content2021, content2025, content2026 }

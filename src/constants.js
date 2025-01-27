//NavBar
export const navigation = [
  {
    pageid: 2,
    page_href: "#projects",
    title: "Projects",
  },
  {
    pageid: 3,
    page_href: "#bio",
    title: "Bio",
  },
  {
    pageid: 4,
    page_href: "#skills",
    title: "Skills",
  },
  {
    pageid: 6,
    page_href: "#contact",
    title: "Contact",
  },
];

//Projects

export const projects = [
  {
    projectid: 1,
    projecttitle: "Student App",
    isCloudinary: true,
    projectdesc:
      "The Students app, developed with Flutter, offers a seamless and intuitive experience for managing academic. ",
    projectimage: "studentapp.png",
  },
  {
    projectid: 2,
    projecttitle: "Ecommerce App",
    isCloudinary: true,

    projectdesc:
      "The E-Commerce app, developed with Flutter, provides a seamless shopping experience.",
    projectimage: "ecommerceapp.png",
  },
  {
    projectid: 3,
    projecttitle: "Delivery App",
    isCloudinary: false,

    projectdesc: "The Delivery Application, developed with Flutter",
    projectimage: "projects/devProjects/deliveryapp.png",
  },
  {
    projectid: 4,
    projecttitle: "Movie App",
    isCloudinary: true,
    projectdesc: "Simple movie app developed with Flutter",
    projectimage: "movieapp.png", // cloudinary image
  },
];

export const UIUxProject = [
  {
    projectid: 1,
    projecttitle: "Khotba App",
    projectdesc:
      "Muslim App provides translations of the imam's sermons in multiple languages.",
    projectimage: "projects/designProjects/khotba/khotba_main.png",
  },
  {
    projectid: 2,
    projecttitle: "PickUp App",
    projectdesc:
      "Pickup is a ride-hailing app that connects drivers and passengers for quick and convenient transportation.",
    projectimage: "projects/designProjects/pickup/pickup_main.png",
  },
  {
    projectid: 3,
    projecttitle: "Courly App",
    projectdesc:
      "Courly is an app that provides real-time translations of lessons during live teaching sessions.",
    projectimage: "projects/designProjects/courly/courly_main.png",
  },
];

//Dev Projects Details

export const projectsDetails = [
  {
    projectid: "1",
    projectTitle: "Student App",
    projectVideo: "videos/laqcwjwe8eapwm5dlvix.mp4",
    projectVideoWidth: 400,
    projectNofication: true,
    projectNoficationVideo: "../videos/studentAppNotify.mp4",
    projectLink: "https://github.com/abdDev-lab/student-platform",
    projectTechnologie: ["Flutter", "Dart", "PHP", "MySQL", "Sqflite"],
    details: [
      {
        id: 1,
        description:
          "Secure login functionality integrated with a PHP API for authentication.",
      },
      {
        id: 2,
        description:
          " Displays news, events, and a digital student card. The home screen is visually engaging and provides quick access to important information.",
      },
      {
        id: 3,
        description:
          "Provides detailed information on student grades and calculates average.",
      },
      {
        id: 4,
        description: "Displays upcoming exams and related details.",
      },
      {
        id: 5,
        description:
          "Allows students to view and manage their personal information and app settings.",
      },
      {
        id: 6,
        description:
          "A dark theme option for a comfortable viewing experience in low-light environments.",
      },
      {
        id: 7,
        description:
          "A dynamic widget that shows the current course based on the time of day.",
      },
    ],
  },
  {
    projectid: "2",
    projectTitle: "Ecommerce App",
    projectVideo: "videos/ecommerceApp.mp4",
    projectVideoWidth: 200,
    projectNofication: false,
    projectNoficationVideo: "",
    projectLink: "https://github.com/abdDev-lab/ecommerceapp",
    projectTechnologie: ["Flutter", "Dart", "PHP", "MySQL"],
    details: [
      {
        id: 1,
        description:
          "Users can browse an extensive catalog of products with detailed descriptions, images, and pricing.",
      },
      {
        id: 2,
        description:
          "Secure login and registration processes are managed through a custom PHP API",
      },
      {
        id: 3,
        description: "Manage and purchase products.",
      },
      {
        id: 4,
        description: "Process payments.",
      },
      {
        id: 5,
        description: "Save favorite products and track orders.",
      },
      {
        id: 6,
        description: "Real-time updates for users.",
      },
      {
        id: 7,
        description: "Accurate delivery tracking.",
      },
    ],
  },
  {
    projectid: "3",
    projectTitle: "Delivery App",
    projectVideo: "videos/deliveryApp.mp4",
    projectVideoWidth: 200,
    projectNofication: false,
    projectNoficationVideo: "",
    projectLink: "https://github.com/abdDev-lab/deliveryapp",
    projectTechnologie: ["Flutter", "Dart", "PHP", "MySQL"],
    details: [
      {
        id: 1,
        description:
          "Manage delivery statistics, pending orders, and delivery locations through a custom PHP API.",
      },
      {
        id: 2,
        description: "Securely confirm delivery codes for verification.",
      },
      {
        id: 3,
        description: "Track order status and delivery progress in real-time.",
      },
      {
        id: 4,
        description:
          "Track delivery routes and provide accurate location updates.",
      },
    ],
  },
  {
    projectid: "4",
    projectTitle: "Movie App",
    projectVideo: "videos/movieapp.mp4",
    projectVideoWidth: 200,
    projectNofication: false,
    projectNoficationVideo: "",
    projectLink: "https://github.com/abdDev-lab/movie_player",
    projectTechnologie: [
      "Flutter",
      "Dart",
      "Bloc/Cubit",
      "TMDB api",
      "Clean Architecture",
    ],
    details: [
      {
        id: 1,
        description:
          "Seamless interface where users can browse and search for their favorite titles.",
      },
      {
        id: 2,
        description:
          "Includes a unique watchlist feature allowing users to add movies and shows to their personal list with a simple double-tab.",
      },
    ],
  },
];

// Design Project Details

export const designProjectsDetails = [
  {
    projectid: "1",
    projectTitle: "Khotba App",
    isForCustmer: true,
    projectImage: "../projects/designProjects/khotba/khotba_second_image.png",
    projectdesc:
      "Khotba is an innovative Muslim app created to bridge language barriers during religious sermons. It provides real-time translations of the imam's speech, ensuring that worshippers can fully understand and connect with the message, regardless of their native language. With features like multi-language support, a user-friendly interface, and accessibility tools, Khotba enhances inclusivity in mosques. The app is ideal for diverse communities and aims to make Friday prayers and religious talks more accessible to everyone.",
    projectTechnologie: ["Figma"],
    projectPages: ["Role Page", "Login Page"],
    projectScreens: [
      "design/khotba/khotba_screen1.png",
      "design/khotba/khotba_screen2.png",
      "design/khotba/khotba_screen3.png",
      "design/khotba/khotba_screen4.png",
      "design/khotba/khotba_screen5.png",
    ],
  },
  {
    projectid: "2",
    projectTitle: "PickUp App",
    isForCustmer: false,

    projectImage: "../projects/designProjects/pickup/pickup_second_image.png",
    projectdesc:
      "Pickup is a modern ride-hailing app designed to make transportation seamless and efficient. Similar to Uber, it connects passengers with nearby drivers in real-time, offering reliable rides at competitive rates. With features like live tracking, secure payments, and user-friendly navigation, Pickup ensures a smooth and safe experience for both drivers and riders. Whether you're commuting to work or heading out for an evening, Pickup makes getting around easy and hassle-free.",
    projectTechnologie: ["Figma"],
    projectPages: ["Role Page", "Login Page"],
    projectScreens: [
      "design/pickup/pickup_screen1.png",
      "design/pickup/pickup_screen2.png",
      "design/pickup/pickup_screen4.png",
      "design/pickup/pickup_screen3.png",
    ],
  },
  {
    projectid: "3",
    projectTitle: "Courly App",
    isForCustmer: false,

    projectImage: "../projects/designProjects/courly/courly_second_image.png",
    projectdesc:
      "Courly is an innovative app designed to break language barriers in education by offering real-time translations of courses while teachers are speaking. It ensures that students from diverse linguistic backgrounds can fully understand and engage with lessons in their preferred language. With support for multiple languages, seamless audio processing, and a user-friendly interface, Courly creates an inclusive learning environment, making education accessible to everyone.",
    projectTechnologie: ["Figma"],
    projectPages: ["Role Page", "Login Page"],
    projectScreens: [
      "design/courly/courly_screen1.png",
      "design/courly/courly_screen2.jpg",
      "design/courly/courly_screen3.png",
    ],
  },
];

//Skills

export const mySkills = [
  {
    id: 1,
    logo: "skillsLogo/icons8-dart-96.png",
    duration: 2.5,
  },
  {
    id: 2,
    logo: "skillsLogo/icons8-flutter-96.png",
    duration: 3,
  },
  {
    id: 3,
    logo: "skillsLogo/icons8-google-firebase-console-96.png",
    duration: 5,
  },
  {
    id: 4,
    logo: "skillsLogo/bloc.png",
    duration: 2,
  },
  {
    id: 5,
    logo: "skillsLogo/figma.png",
    duration: 6,
  },
  {
    id: 6,
    logo: "skillsLogo/icons8-mysql-96.png",
    duration: 4,
  },
  {
    id: 7,
    logo: "skillsLogo/icons8-php-80.png",
    duration: 3,
  },
  {
    id: 8,
    logo: "skillsLogo/icons8-git-96.png",
    duration: 7,
  },
];

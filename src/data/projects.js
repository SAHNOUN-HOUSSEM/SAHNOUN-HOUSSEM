import { members } from "./members";

export const projects = [
  {
    id: 1,
    title: "Tuniconnect",
    date: "Jan 2024 - Mar 2024",
    description:
      "A web application designed to enhance user experience in a community-driven environment, offering real-time communication and carpooling features. Users can create posts, share, comment, and like content within the community.",
    image: "My_Portfolio/d2uyw7lq5nin2xj2uooj",
    tags: ["Symfony", "ReactJS", "WebSocket", "Real-time Communication"],
    category: "web app",
    github: "https://github.com/SAHNOUN-HOUSSEM/social_network_app",
    member: [
      members.chaima,
      members.gdoura,
      members.aziz,
      members.chaaben,
      members.houssem,
    ],
    webapp:
      "https://www.linkedin.com/posts/mahdi-chaabane_react-reactjs-symfony-activity-7072158461911871488-Rdk5",
  },
  {
    id: 6,
    title: "Teamflow.io",
    date: "May 2024",
    description:
      "Teamflow.io is a real-time team collaboration and workflow management tool designed to streamline project management, team communication, and task tracking. The platform allows team members to collaborate through task boards, share documents, and communicate in real time, enhancing productivity and project transparency.",
    image: "My_Portfolio/x3rg1oxqe0cabzgnzcpl",
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "GraphQL", "SSE"],
    category: "web app",
    github: "https://github.com/cap-mahdi/Task-And-Project-Management",
    member: [
      members.gdoura,
      members.chaaben,
      members.fkih,
      members.khlil,
      members.houssem,
    ],
    webapp:
      "https://www.linkedin.com/feed/update/urn:li:activity:7207324474461859841",
  },
  {
    id: 2,
    title: "InsatClub",
    date: "Mar 2024 - May 2024",
    description:
      "A web application designed to facilitate club management and foster collaboration within the INSAT community. InsatClub offers features for organizing activities, managing memberships, and engaging students in club initiatives.",
    image: "My_Portfolio/axg7r8z5urdffq3ixv6e", // replace with actual image ID or path
    tags: ["ASP.NET Core", "Club Management", "Collaboration"],
    category: "web app",
    github: "https://github.com/SAHNOUN-HOUSSEM/InsatClub", // replace with actual GitHub repo link if available
    member: [members.chaaben, members.fkih, members.houssem], //
    webapp: "https://insatclub.insat.tn",
  },
  {
    id: 2,
    title: "YelpCamp",
    date: "Apr 2023 - May 2023",
    description:
      "Developed a full-stack web application inspired by Yelp. Users can explore, review, and rate camping spots. Enhanced with features such as user profiles, notifications, and search functionality.",
    image: "My_Portfolio/l8h4oxzyqb1qtffzlodt",
    tags: ["MongoDB", "Express.js", "Node.js", "JavaScript", "HTML", "CSS"],
    category: "web app",
    github: "https://github.com/SAHNOUN-HOUSSEM/yelp-camp",
    member: [members.houssem],
    webapp: "https://yelp-camp-cbiv.onrender.com",
  },
  {
    id: 5,
    title: "E-commerce Microservices",
    date: "April 2024 - June 2024",
    description:
      "A distributed e-commerce application using microservices architecture. The project involved building Spring Boot microservices, RabbitMQ communication, and containerization with Docker for a resilient and scalable solution.",
    image: "My_Portfolio/y711azk4cqgehohfb1lf",
    tags: [
      "Spring Boot",
      "Spring Cloud",
      "RabbitMQ",
      "Eureka",
      "Docker",
      "Kubernetes",
    ],
    category: "web app",
    github: "https://github.com/SAHNOUN-HOUSSEM/SwiftShop-Microservices",
    member: [members.fkih, members.khlil, members.houssem],
    webapp:
      "https://www.linkedin.com/feed/update/urn:li:activity:7212063766828433409",
  },
];

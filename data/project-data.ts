export interface Developer {
  id: string;
  name: string;
  role: string;
  bio: string;
  profileImage: string;
  linkedinUrl: string;
}

export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  features: Array<{
    title: string;
    description: string;
    color: string;
  }>;
}

export const projectData: Project = {
  title: "De-anonymizing-Entities-on-Onion-Sites-Operating-on-the-TOR-Network",
  description: "The internet comprises various layers, with the dark web being a segment not indexed by standard search engines. Accessing the dark web typically requires specialized software, with the TOR (The Onion Router) network being the most prevalent. TOR facilitates anonymous communication by routing user traffic through multiple servers (nodes), each adding a layer of encryption, akin to the layers of an onion. While TOR serves as a vital tool for preserving privacy and circumventing censorship, it also provides a haven for illicit activities due to its anonymity features. This duality presents challenges in distinguishing between legitimate use and malicious activities.",
  liveUrl: "https://de-anonymizing.onrender.com/",
  githubUrl: "https://github.com/MiteshChaudhari18/De-anonymizing-Entities-on-Onion-Sites-Operating-on-the-TOR-Network.git",
  techStack: ["React.js", "Node.js", "Html ","CSS","MongoDB", "Tailwind CSS", "Bootstrap" , "Chart.js", "Scapy","PYTHON","Pyshark","Socket.IO","Flask","Stem", "httpx","GeoIP","Mapbox"],
  features: [
    {
      
      title: "Real-time Analytics",
      description: "Real-time analytics on the TOR network continuously monitors onion site traffic and user behavior to detect suspicious patterns instantly. It helps identify malicious entities by analyzing connection timings, traffic anomalies, and service activity as they happen, enabling quicker responses and better threat detection.",
      color: "blue"
    },
    
    {
    
      title: "Sustainability Goals",
      description: "The sustainability goal of TorCrawler is to stay adaptable, maintainable, and reusable for long-term dark web investigations.Its modular design allows easy updates to individual components without disrupting the whole system.Support for data export and integration ensures continued relevance in research, cybersecurity, and law enforcement.",
      color: "green"
    },
    {
      
      title: "Team Collaboration",
      description: "Effective collaboration relies on open communication and sharing knowledge among team members. Using collaborative tools ensures smooth coordination and project tracking. Diverse skills within the team foster innovation and better problem-solving.",
      color: "purple"
    }
  ]
};
import anushkaImg from "@/images/anushka.png";
import falguniImg from "@/images/falguni.jpeg";
import mrunaliImg from "@/images/mrunali.png";

export const developers: Developer[] = [
  {
    id: "1",
    name: "Mrunali Waghdhare",
    role: "Python Developer , & Web Developer",
    bio: "Python Developer | Building smart and impactful applications",
    profileImage: mrunaliImg,
    linkedinUrl: "http://linkedin.com/in/mrunaliwaghdhare123",
  

  },
  {
    id: "2",
    name: "Falguni Sultane",
    role: "Data Analyst",
    bio: "Frontend Developer and Data Analyst Crafting intuitive and visually engaging interfaces",
    profileImage: falguniImg,
    linkedinUrl: "http://linkedin.com/in/falguni-sultane-19a397267",
   
  },
  {
    id: "3",
    name: "Anushka Jirge",
    role: "Backend Developer",
    bio: "Backend Developer and Data Analyst Developing scalable systems and data-driven solutions",
    profileImage: anushkaImg,
    linkedinUrl: "http://linkedin.com/in/anushka-jirge-916810219",
  }
];

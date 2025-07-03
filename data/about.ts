import { FaEnvelope, FaMapMarkerAlt, FaLanguage, FaGraduationCap } from "react-icons/fa";

const about = {
  name: "Emre Uslu",
  title: "Fullstack & Mobile Developer",
  description: `
    I am a passionate and practical engineering student with hands-on experience in both mobile and web development.
    
    I've worked on impactful projects with organizations like Turkcell, Dogus Teknoloji and academic communities.
    
    I specialize in frontend technologies and am expanding into backend development to deliver full-scale solutions using React, Java, and Spring Boot.
  `,
  highlights: [
    {
      label: "Email: emreuslu256@gmail.com",
      icon: FaEnvelope,
    },
    {
      label: "Location: Istanbul, Turkey",
      icon: FaMapMarkerAlt,
    },
    {
      label: "Languages: Turkish, English, French",
      icon: FaLanguage,
    },
    {
      label: "Education: B.Sc. in Mathematical Engineering, YTU",
      icon: FaGraduationCap,
    },
  ],
};

export default about;

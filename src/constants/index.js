const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.png" },
  { text: "Concepts", imgPath: "/images/concept.png" },
  { text: "Designs", imgPath: "/images/design.png" },
  { text: "Code", imgPath: "/images/code.png" },
  { text: "Ideas", imgPath: "/images/ideas.png" },
  { text: "Concepts", imgPath: "/images/concept.png" },
  { text: "Designs", imgPath: "/images/design.png" },
  { text: "Code", imgPath: "/images/code.png" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Professional Experience" },
  { value: 15, suffix: "+", label: "Features Implemented in Ongoing Projects" },
  { value: 2, suffix: "+", label: "Companies Worked At" },
  { value: 95, suffix: "%", label: "Product Requirement Delivery Success" },
];

const logoIconsList = [
  {
    name: "ApnaKlub",
    imgPath: "/images/logos/apnaklub.png",
    link: "https://www.linkedin.com/company/apnaklub/",
  },
  {
    name: "Binnie",
    imgPath: "/images/logos/binnie.png",
    link: "https://www.linkedin.com/company/binniee/",
  },
];

const abilities = [
  {
    imgPath: "/images/target.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/communication.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Vaishali has been a driving force behind our smart recycling bin system. She blends leadership with hands-on coding,  manage the tech direction while collaborating with outsourced IoT partners, delivering scalable solutions that push our product forward has brought great value to our startup.",
    imgPath: "/images/logos/binnie.png",
    logoPath: "/images/logos/binnie_logo.svg",
    title: "Lead Founding Engineer",
    date: "July 2025 - Present",
    responsibilities: [
      "Leading the technology team in building a smart recycling bin ecosystem, combining IoT hardware with a scalable web platform to enable efficient waste segregation and tracking.",
      "Driving research and development in IoT integration, system architecture, and software deployment strategies to align product vision with sustainability goals.",
      "Overseeing end-to-end product development — from prototyping to deployment — while mentoring engineers and ensuring timely delivery of core features.",
    ],
  },
  {
    review:
      "Vaishali consistently delivered clean, scalable code and helped simplify complex requirements into intuitive solutions, making a real impact on our internal tools.",
    imgPath: "/images/logos/apnaklub.png",
    logoPath: "/images/logos/apnaklub_logo.png",
    title: "Software Development Engineer 1",
    date: "Oct 2022 - December 2024",
    responsibilities: [
      "Built a scalable internal platform with React, Zustand, and Node.js, improving operational efficiency by 30%.",
      "Implemented role-based authentication with Firebase Auth, securing access for 50+ internal users.",
      "Developed reusable, responsive UI components with React and Mantine for intuitive user experiences.",
      "Integrated Rupifi credit service via secure /callback endpoints, automating capture/void workflows and increasing transaction accuracy by 40%.",
      "Automated customer onboarding, cutting setup time by 50% and eliminating manual data entry.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

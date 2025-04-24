import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ibm,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "ML/AI Engineer",
      icon: web,
    },
    {
      title: "Django Developer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IBM DevOps and Software Engineer",
      company_name: "IBM, Coursera",
      icon: ibm,
      iconBg: "#383E56",
      date: "April 2024  - August 2024",
      points: [
        "Gained hands-on experience in DevOps practices, including continuous integration (CI) and continuous delivery (CD).",
        "Developed proficiency in using DevOps tools like Jenkins, Git, and Docker to automate workflows.",
        "Implemented cloud solutions and containerized applications using Kubernetes and Docker.",
        "Learned about infrastructure as code (IaC) using tools such as Terraform.",
        "Applied Agile methodologies to project management and software development.",
        "Collaborated in team-based environments to deliver scalable, reliable, and efficient software solutions.",
        "Enhanced troubleshooting and debugging skills in both development and production environments."
      ],
    },
    {
      title: "Introduction to Generative AI Learning Path",
      company_name: "Google, Coursera",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2024",
      points: [
        "Gained foundational knowledge in AI, deep learning, and generative models.",
        "Hands-on experience with GANs, VAEs, NLP models (GPT, BERT), and advanced techniques.",
        "Developed AI projects including text, image, and audio generation.",
        "Explored ethics and best practices for responsible AI development.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Odity",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Setting up data science pipelines for data collection, cleaning, and preprocessing.",
        "Analyze large datasets to extract meaningful insights and trends.",
        'Develop predictive models to optimize business process performance.',
        'Work with cross-functional teams to translate business needs into analytical solutions.',
        'Present clear and concise results to stakeholders.',
        'Helping organizations adopt new technologies and methodologies.',
      ],
    },
    {
      title: "Data Scientist researcher",
      company_name: "University of Leeds",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 2019 - May 2021",
      points: [
        "Project title: Using Gaia to derive distances to embedded objects.",
        "Data Acquisition & Integration: Collect Gaia DR2 astrometric data and integrate extinction measurements to enhance distance accuracy.",
        "Data Modeling: Develop Bayesian models for extinction along specific lines of sight to infer distances.",
        "Statistical Inference: Use MCMC sampling to estimate distance posterior distributions from extinction models.",
        "Data Validation: Validate inferred distances by comparing with maser and kinematic measurements.",
        "Comparative Analysis: Validate inferred distances by comparing with maser and kinematic measurements.",
        "Methodological Evaluation: Assess different extinction models and the impact of additional photometric data on accuracy.",
        "Uncertainty Analysis: Analyze systematic uncertainties and model limitations in complex extinction regions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
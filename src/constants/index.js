import { icon } from "@fortawesome/fontawesome-svg-core";
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
    antananarivo,
    ibm,
    google,
    ska,
    leeds,
    odity,
    powerbi,
    flask,
    pandas,
    python,
    scikit,
    aisum,
    portfolio,
    fraud_detection,
  
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
      name: "Python",
      icon: python,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "scikit",
      icon: scikit,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "Power BI",
      icon: powerbi,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
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
      title: "Operations Lead",
      company_name: "McDonald's Canada",
      icon: ibm,
      iconBg: "#383E56",
      date: "July 2023  - present",
      points: [
        "Optimized staff scheduling by analyzing daily sales and seasonal demand trends, successfully reducing overtime costs by 30%.",
        "Monitored performance dashboards to evaluate customer satisfaction, order accuracy, and service time, identifying key areas for operational improvement.",
        "Utilized data-driven decision-making to make informed adjustments to inventory levels, ensuring optimal stock availability and minimizing waste.",
        "Learned about infrastructure as code (IaC) using tools such as Terraform.",
        "Supervised team members, providing clear guidance on individual responsibilities to enhance workflow efficiency and team performance."
      ],
    },
    {
      title: "Data Scientist",
      company_name: "MVOLA",
      icon: odity,
      iconBg: "#383E56",
      date: "Nov 2021 - June 2023",
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
      icon: leeds,
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
        "Erick quickly turned complex data into clear insights. His work helped us make smarter decisions, faster.",
      name: "Faniry R.",
      designation: "ML Engineer",
      company: "Odity",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      testimonial:
        "A reliable and talented data scientist. Erick's models improved our performance across several key metrics.",
      name: "Frank R.",
      designation: "Team Lead",
      company: "Odity",
      image: "https://randomuser.me/api/portraits/men/87.jpg",
    },
    {
      testimonial:
        "Erick makes data science feel simple. He explains things clearly and delivers results that matter.",
      name: "Emilie A.",
      designation: "Product Manager",
      company: "Super U",
      image: "https://randomuser.me/api/portraits/women/78.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Sum",
      description:
        "Web-based platform that allows users to get summary from a website.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: aisum,
      source_code_link: "https://makiai.netlify.app/",
    },
    {
      name: "Portfolio",
      description:
        "My personal portfolio website showcasing my projects and skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio  ,
      source_code_link: "https://github.com/ErickRandria/my_3D_portfolio",
    },
    {
      name: "Fraud Detection",
      description:
        "A machine learning model that detects fraudulent transactions using various algorithms and techniques.",
      tags: [
        {
          name: "Jupyter",
          color: "blue-text-gradient",
        },
        {
          name: "Seaborn",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: fraud_detection,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
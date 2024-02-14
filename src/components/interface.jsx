import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Button } from 'react-bootstrap'; 
import { motion } from 'framer-motion'; 
import { FaHtml5, FaCss3, FaJs, FaBootstrap,FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope,FaFilePdf } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const Section = ({ children }) => {
  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
const ProjectTile = ({ project }) => {
  const { title, description, imageUrl, gitHubLink } = project;

  return (
    <motion.div
      className="border p-4 m-0 bg-black  " style={{ color: 'lightgray', fontFamily: 'tahoma, sans-serif' }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      <h3 className='font-bold '>{title}</h3>
      <p className='font-semibold '>{description}</p>
      <img style={{ width: '1100px', maxHeight: '450px', objectFit: 'cover' }} src={imageUrl} alt={title} />
      <div className="d-flex align-items-center space-x-6 bg-dark p-2">
      <IconButton href= {gitHubLink} style={{ color: '#181717' }}>
              <FaGithub />
            </IconButton>
        <div className="d-flex align-items-center">
          <FaHtml5 className="me-1" color="#E34F26" />
          <FaCss3 className="me-1" color="#2965f1" />
          <FaJs className="me-1" color="#F0DB4F" />
          <FaBootstrap className="me-1" color="#563D7C" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie App:",
      description: "A movie browsing and search application.",
      imageUrl: ('./images/movieapp1.PNG'),
      gitHubLink: "https://github.com/MoMosaad2000/MovieApp-ReactJS"
    },
    {
      title: "Netflix Clone:",
      description: "A clone of the Netflix streaming service.",
      imageUrl: ('./images/ready.PNG'),
      gitHubLink: "https://github.com/MoMosaad2000/NetflixClone-ReactJS"
    },
    {
      title: "Portfolio 3D:",
      description: "A 3D portfolio website showcasing your projects.",
      imageUrl: ('./images/Capture.PNG'),
      gitHubLink: "https://github.com/yourusername/portfolio-3d"
    },
    {
      title: "Egg Basket and Shooting Bird Game: ",
      description: "A one Realod Game ",
      imageUrl: ('./images/egg2.PNG'),
      gitHubLink: "https://github.com/MoMosaad2000/EggBasket-and-ShotingBird-Games"
    }
  ];
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  return (
    <Section>
      <h1 className="text-3xl font-bold mb-2 text-gray-300">Projects</h1>
      <div className="d-flex flex-wrap justify-content-center mb-2">
        <ProjectTile project={projects[currentProjectIndex]} />
      </div>
          <div className="d-flex justify-content-between mt-1">
            <IconButton size="small" onClick={handlePreviousProject} style={{ color:'red' }}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton size="small" onClick={handleNextProject} style={{ color: 'green' }}>
              <ArrowForwardIcon />
            </IconButton>
            
          </div>
    </Section>
  );
};

export const Interface = () => {
  return (
    <Container fluid className="d-flex flex-column align-items-center ">
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection />
      <ContactSection/>
    </Container>
  );
};

const AboutSection = () => {
  const newLocal = "	font-semibold mt-4 p-2  rounded-lg ";
  return (
    <Section>
      <h1 className="text-6xl font-weight-bold text-gray-300">Hi , I'm 
        <br/>
        <br/>
        <span style={{ backgroundColor: '#57FF55' , color:'#141414'}} className=" px-1 italic">Mohamed Mosaad</span>
      </h1>
      <motion.p
        className="text-2xl text-gray-300 font-semibold mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >I'm a Frontend and Cross Platform Developer
        <br/>
        specializing in ReactJS.
      </motion.p>
      <motion.button variant="info"
       className="font-semibold mt-2 p-2 rounded-lg " 
       style={{ backgroundColor: '#FF5F52' , color:'#141414'}}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact Me
      </motion.button>
    </Section>
  );
};
const skills = [
  {
    title: "JavaScript",
    level: 80,
  },
  {
    title: "ReactJS / React Native",
    level: 90,
  },
  {
    title: "HTML, CSS",
    level: 80,
  },
  {
    title: "Flutter",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },{
    title: "Problem Solving",
    level: 75,
  },
  {
    title: "Work Under Presure ,Motivator",
    level: 95,
  },
];
const languages = [
  {
    title: "🇪🇬 Arabic",
    level: 100,
  },
  {
    title: "🇬🇧 English",
    level: 80,
  },
];
const SkillsSection = () => {
  const sectionColor = 'bg-secondary ';

  return (
    <Section className={sectionColor}>
      <motion.div whileInView={"visible"} >
        <h2 className="text-3xl font-bold mb-2 text-gray-300">Skills</h2>
        <ul className="list-group list-group-flush ">
          {skills.map((skill, index) => (
          <li className="list-group-item border-0 " style={{ backgroundColor: '#FF5733' }} key={index}>
              <motion.h3 
              initial={{
                opacity:0,
              }}
              variants={{
                visible:{
                  opacity:1,
                  transition:{
                    duration:1,
                    delay:1+index*0.2,
                  }
                }
              }}
              
               className="text-lg font-bold mb-1">{skill.title}</motion.h3>
              <div className={`progress bg-light mt-2`} style={{ height: '10px' }}>
                <motion.div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.level}%`, height: '100%' ,backgroundColor: '#74FF33' }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                   initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                ></motion.div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8"></div> {/* Vertical spacing */}
        <div>
          <h2 className="text-3xl font-bold mt-4 mb-2 text-gray-300" >Languages</h2>
          <ul className="list-group list-group-flush">
            {languages.map((lng, index) => (
              <li className="list-group-item border-0" style={{ backgroundColor: '#0E6D45' }} key={index}>
                <h3 className="text-lg font-bold mb-1">{lng.title}</h3>
                <div className={`progress bg-light mt-2 `} style={{ height: '10px' }}>
                  <motion.div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${lng.level}%`, height: '100%', backgroundColor: '#74FF33' }}
                    aria-valuenow={lng.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                     initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                  ></motion.div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold text-center mb-4 text-gray-300">Contact me</h2>
      
      <div className="mt-8 mx-auto px-12 py-8 rounded-md bg-info" style={{ width: '50%' }}> {/* Increased width */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="form-label font-semibold text-gray-900">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-gray-300"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label font-semibold text-gray-900">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-gray-300"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="form-label font-semibold text-gray-900">
              Message
            </label>
            <textarea
              className="form-control h-32 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-gray-300"
              id="message"
              placeholder="Enter your message"
            />
          </div>
         
          <Button type="submit" className="btn mt-4 font-semibold" style={{backgroundColor:'#0004FF' , color:'#141414'}}>
            Submit
          </Button>
          
        </form>
        
        
      </div>
      <div className="d-flex justify-content-around">
            <IconButton href="mailto:mohameedmosaad5@gmail.com" style={{ color: '#FF0000' }}>
              <FaEnvelope />
            </IconButton>
            <IconButton href="https://api.whatsapp.com/send?phone=+021154086176" style={{ color: '#25D366' }}>
              <FaWhatsapp />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/mohameed-mosaad-gad-elhak/" style={{ color: '#0A66C2' }}>
              <FaLinkedin />
            </IconButton>
            <IconButton href= "https://github.com/MoMosaad2000" style={{ color: '#181717' }}>
              <FaGithub />
            </IconButton>
            <IconButton href="https://drive.google.com/drive/folders/17cZhAca_nswiLiBM-EGvfrqdfbDK3v7A?lfhs=2" style={{ color: '#FF5722' }}>
              <FaFilePdf />
            </IconButton>
          </div>
    </Section>
  );
};

export default Interface;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./ProjectsStyles.module.css";
import vote from "../../assets/vote.png";
import estatea from "../../assets/estatea.png";
import blog from "../../assets/blog.jpeg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  // Hook to track if the section is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time it comes into view
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  // Animation variants for project cards
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 , transition: { duration: 1.5, ease: "easeInOut"  }, },
     // Slower animation
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0,transition: { duration: 1.5, ease: "easeInOut" }, },
     // Slower animation
  };
  const cardVariantsUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeInOut" }, // Slower animation
    },
  };
  
  const cardVariantsDown = {
    hidden: { opacity: 0, y: -100 }, // Start above
    visible: { opacity: 1, y: 0 },   // Animate to center
  };
  

  // Mobile-specific animation (fade-in and move up)
  const cardVariantsMobile = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 ,transition: { duration: 1.5, ease: "easeInOut" }, },
  };

  return (
    <motion.section
      id="projects"
      className={styles.container}
      ref={ref} // Attach the observer to this section
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Toggle animation based on `inView`
      variants={containerVariants}
    >
      <motion.h1 className="sectionTitle" variants={cardVariantsMobile}>
        Projects
      </motion.h1>
      <motion.div className={styles.projectsContainer} variants={containerVariants}>
        {/* Card 1: Moves Left */}
        <motion.div
          className={styles.card}
          variants={window.innerWidth <= 768 ? cardVariantsMobile : cardVariantsLeft} // Use mobile variant for small screens
        >
          <ProjectCard
            src={vote}
            link="https://github.com/harsh031104/Online-Voting-Portal"
            h3="VoteSphere"
            p="Online Voting Portal"
          />
        </motion.div>
        {/* Card 2: Moves Right */}
        <motion.div
          className={styles.card}
          variants={window.innerWidth <= 768 ? cardVariantsMobile : cardVariantsUp} // Use mobile variant for small screens
        >
          <ProjectCard
            src={estatea}
            link="https://github.com/harsh031104/Real-Estate-Database-website"
            h3="Home-Hub"
            p="Real Estate DB System"
          />
        </motion.div>
        {/* Card 3: Moves Left */}
        <motion.div
          className={styles.card}
          variants={window.innerWidth <= 768 ? cardVariantsMobile : cardVariantsRight} // Use mobile variant for small screens
        >
          <ProjectCard
            src={blog}
            link="https://github.com/harsh031104/Blog-Post-website"
            h3="Daily-Blogs"
            p="Blog Post"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;

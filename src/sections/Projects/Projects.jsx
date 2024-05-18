import styles from './Projects.Styles.module.css'
// import viberr from '../../assets/viberr.png'
import viberr from '../../assets/logo-black.png'
// import freshBurger from '../../assets/fresh-burger.png'
import freshBurger from '../../assets/fastanalytics/logo-color.png'
// import hipsster from '../../assets/hipsster.png'
import hipsster from '../../assets/starry-chronicles.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>My Open Source Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={viberr}
            link="https://pypi.org/project/mlfast/"
            projectName="MLFast"
            desc="A Python Machine Learning Library"
            />

            <ProjectCard 
            src={freshBurger}
            link="https://github.com/Abdul-Jaweed/FastAnalytics"
            projectName="FastAnalytics"
            desc="A Python Data Analytics Framework"
            />

            <ProjectCard 
            src={hipsster}
            link="https://github.com/Abdul-Jaweed/Starry-Chronicles"
            projectName="Starry Chronicles"
            desc="An AI-Powered Bedtime Story App for Kids"
            />
        </div>
    </section>
  )
}

export default Projects
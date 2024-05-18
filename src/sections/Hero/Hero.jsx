import styles from './HeroStyles.module.css'
// import heroImg from '../../assets/hero-img.png'
import heroImg from '../../assets/headshot.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme()

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
            className={styles.hero} 
            src={heroImg} 
            alt="Profile picture of Abdul Jaweed" 
            />

            <img className={styles.colorMode} 
            src={themeIcon}
            alt="Color mode icon" 
            onClick={toggleTheme}
            />
        </div>

        <div className={styles.info}>
            <h1>
                Abdul
                <br />
                Jaweed
            </h1>
            <h2>AI Engineer</h2>
            <span>
                 <a href="https://x.com/Abdul_Jaweed_DS" target='_blank'>
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>

                <a href="https://github.com/Abdul-Jaweed" target='_blank'>
                    <img src={githubIcon} alt="Github Icon" />
                </a>

                <a href="https://www.linkedin.com/in/abdul-jaweed-datascientist/" target='_blank'>
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
            </span>
            <p className={styles.description}>
            I specialize in AI and web development, 
            and I love uncovering meaningful insights from messy data 
            and building some innovative design with a cup of coffee.
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Resume
                </button>
            </a>

        </div>
    </section>
  )
}

export default Hero

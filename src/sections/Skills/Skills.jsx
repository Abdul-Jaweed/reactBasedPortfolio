import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';


function Skills() {
    return (
      <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>

          <SkillList src={checkMarkIcon} skill="ReactJS" />
          <SkillList src={checkMarkIcon} skill="Node" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="Express" />
          <SkillList src={checkMarkIcon} skill="Git & GitHub" />
        </div>
        <hr />
        <div className={styles.skillList}>

          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="Machine Learning" />
          <SkillList src={checkMarkIcon} skill="Deep Learning" />
          <SkillList src={checkMarkIcon} skill="NLP" />

        </div>
        <hr />
        <div className={styles.skillList}>

          <SkillList src={checkMarkIcon} skill="LLMs" />
          <SkillList src={checkMarkIcon} skill="OpenAI" />
          <SkillList src={checkMarkIcon} skill="LangChain" />
          <SkillList src={checkMarkIcon} skill="HuggingFace" />
          <SkillList src={checkMarkIcon} skill="Fine-Tuning" />
        </div>

        <hr />

        <div className={styles.skillList}>

          <SkillList src={checkMarkIcon} skill="MongoDB" />
          <SkillList src={checkMarkIcon} skill="MySQL" />
          <SkillList src={checkMarkIcon} skill="ChromaDB" />
          <SkillList src={checkMarkIcon} skill="Neo4j" />
        </div>

        <hr />

        <div className={styles.skillList}>

          <SkillList src={checkMarkIcon} skill="AWS" />
          <SkillList src={checkMarkIcon} skill="Azure" />
          <SkillList src={checkMarkIcon} skill="DevOps" />
          <SkillList src={checkMarkIcon} skill="MLOps" />
          <SkillList src={checkMarkIcon} skill="LLMOps" />
        </div>
      </section>
    );
  }


export default Skills
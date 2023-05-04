import styles from "./Section.module.css";

const Section = (props) => {
  return <div className={styles.section}>{props.children}</div>;
};

export default Section;

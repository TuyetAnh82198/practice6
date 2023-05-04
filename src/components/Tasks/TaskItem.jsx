import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <div>
      {props.tasklist.map((item) => (
        <div key={item.id} className={styles.task}>
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default TaskItem;

import { Trash } from 'phosphor-react';
import styles from './styles.module.css';
import tasksIcon from '../../assets/img/tasks-icon.svg';

interface TasksListProps {
  tasksCount: number;
  content?: string;
  onInputChecked?: () => void;
  onBtnRemove?: () => void;
  taskChecked?: boolean;
}

export const TasksList = ({ tasksCount, content, onInputChecked, onBtnRemove, taskChecked }: TasksListProps) => {
  return (
    <div className={styles.tasksListContainer}>
      {tasksCount ? (
        <div className={styles.tasksListBody}>
          <label className={styles.taskCheckbox}>
            <input 
              type="checkbox" 
              className={styles.taskCheckboxInput} 
              onChange={onInputChecked} 
              checked={taskChecked} 
            />
            <span className={styles.taskCheckboxInner}></span>
          </label>
          <p className={taskChecked ? styles.taskChecked : ''}>{content}</p>
          <button className={styles.taskBtnRemove} onClick={onBtnRemove}>
            <Trash size={17} />
          </button>
        </div>
      ) : (
        <div className={styles.tasksListBodyEmpty}>
          <img src={tasksIcon} alt="" />
          <p><strong>Você ainda não tem tarefas cadastradas.</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}

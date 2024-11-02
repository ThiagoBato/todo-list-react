import styles from './styles.module.css'

interface TasksListHeaderProps {
  tasksCreated: number;
  tasksCompleted: number;
}

export const TasksHeader = ({tasksCreated, tasksCompleted}:TasksListHeaderProps) => {
  return (
    <div className={styles.tasksListContainer}>
      <div className={styles.tasksCreated}>
        Tarefas criadas
        <span>{tasksCreated}</span>
      </div>
      <div className={styles.tasksCompleted}>
        Concluídas
        <span>{tasksCompleted} de {tasksCreated}</span>
      </div>
    </div>
  )
}

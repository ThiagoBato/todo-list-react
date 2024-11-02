import { FormEvent } from "react";

import styles from './styles.module.css';
import buttonPlusIcon from "../../assets/img/button-plus-icon.svg";

interface TasksFormProps {
  onHandleSubmitForm: (event: FormEvent) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  disabled: boolean;
}

export const TasksForm = ({ onHandleSubmitForm, onInputChange, inputValue, disabled }: TasksFormProps) => {
  return (
    <form onSubmit={onHandleSubmitForm} className={styles.form}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa' 
        autoFocus 
        onChange={onInputChange} 
        value={inputValue} 
      />
      <button disabled={disabled}>
        Criar <img src={buttonPlusIcon} alt="Ícone de adicionar tarefa" />
      </button>
    </form>
  );
}

import styles from './styles.module.css';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

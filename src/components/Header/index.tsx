import './styles.css';

export type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div>{children}</div>;
};

import './styles.css';

export type TextFieldProps = {
  isError?: boolean;
} & JSX.IntrinsicElements['input'];

export const TextField: React.FC<TextFieldProps> = ({
  type = 'text',
  value,
  isError,
  ...props
}) => {
  return <input {...props} className='text-field' type={type} value={value} data-error={isError} />;
};

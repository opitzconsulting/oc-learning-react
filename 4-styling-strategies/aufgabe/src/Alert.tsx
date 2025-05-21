import './Alert.scss';

export interface Props {
  text: string;
}

export default function Alert({ text }: Props) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

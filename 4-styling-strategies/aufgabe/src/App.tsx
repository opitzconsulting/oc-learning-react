import Alert from './Alert';

export default function App() {
  return (
    <div style={{ display: 'block' }}>
      <Alert text="This is a separate component text. Only it should have the yellow background" />
      <p>A different, unstyled text</p>
      <p>Yet another, unstyled text</p>
    </div>
  );
}

import Light from './Light';

function App() {
  return (
    <>
      <h1>Ampel</h1>
      <section className="lights">
        <Light variant="red"></Light>
        <Light variant="amber"></Light>
        <Light variant="green"></Light>
      </section>
    </>
  );
}

export default App;

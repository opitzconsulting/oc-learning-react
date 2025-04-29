import { Store } from '../data';
import { MaterialSymbolsCall } from '../icons/Phone';
import './Detail.scss';

export default function Detail() {
  const id = 'af300be7-68da-43c2-a293-b54f0a0c31ab';
  const e = Store.instance.getItem(id);

  if (!e) {
    return (
      <div>
        <p>Not found</p>
        <button>Go back</button>
      </div>
    );
  }

  return (
    <section id="item">
      <span className="name">{e.name}</span>
      <span className="tel">
        {' '}
        <MaterialSymbolsCall /> {e.tel}
      </span>
      <div className="back">
        <button>Go back</button>
      </div>
    </section>
  );
}

import { Store } from '../data';
import { MaterialSymbolsCall } from '../icons/Phone';
import './Home.scss';

export default function Home() {
  const items = Store.instance.getAll();
  return (
    <section id="items">
      <ul>
        {items.map((e) => (
          <li>
            <span className="name">{e.name}</span>
            <span className="tel">
              {' '}
              <MaterialSymbolsCall /> {e.tel}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

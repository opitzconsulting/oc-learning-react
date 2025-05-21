import { Link, useParams } from 'react-router';
import { Store } from '../data';
import { MaterialSymbolsCall } from '../icons/Phone';
import './Detail.scss';

export default function Detail() {
  const { id } = useParams();

  if (!id) {
    return <></>; // will never happen
  }

  const e = Store.instance.getItem(id);

  if (!e) {
    return (
      <div>
        <p>Not found</p>
        <div className="back">
          <Link to={'/'}>Go back</Link>
        </div>
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
        <Link to={'/'}>Go back</Link>
      </div>
    </section>
  );
}

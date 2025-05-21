import { Link } from 'react-router';
import './Detail.scss';
export function NotFound() {
  return (
    <section className="item">
      <span className="name">Not Found</span>
      <p>The page you're looking for does not exist</p>
      <div className="back">
        <Link to={'/'}>Go back</Link>
      </div>
    </section>
  );
}

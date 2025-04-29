import './Detail.scss';
export function NotFound() {
  return (
    <section className="item">
      <span className="name">Not Found</span>
      <p>The page you're looking for does not exist</p>
      <div className="back">
        <button>Go back</button>
      </div>
    </section>
  );
}

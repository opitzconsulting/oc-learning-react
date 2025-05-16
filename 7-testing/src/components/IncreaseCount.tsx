import {useState} from "react";
import MagicNumberTransformer from "./MagicNumberTransformer.tsx";
import PostDetailView from "./PostDetailView.tsx";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function IncreaseCount() {
  const [count, setCount] = useState(0);
  const [hasIncreasedCount, setHasIncreasedCount] = useState(false);

  return (
      <div style={{border: "2px solid green", padding: "8px"}}>

        <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo"/>
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo"/>
          </a>
        </div>

        <h1>Vite + React</h1>

        <div style={{marginTop: "8px"}}>
          <button onClick={() => {
            setCount((count) => count + 1);
            setHasIncreasedCount(true)
          }}>
            count is {count}
          </button>
        </div>

        <div style={{marginTop: "8px"}}>
          <MagicNumberTransformer count={count}></MagicNumberTransformer>
        </div>

        <div style={{marginTop: "8px"}}>
          <PostDetailView postId={count}></PostDetailView>
        </div>

        <div>
          {
              !hasIncreasedCount && <p>Nothing done</p>
          }

          {
              hasIncreasedCount && <p>User has increased the count</p>
          }
        </div>
      </div>
  )
}

export default IncreaseCount;
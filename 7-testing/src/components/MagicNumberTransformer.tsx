function MagicNumberTransformer({count}: {count: number}){
  return (<p style={{border: "2px solid red", padding: "8px"}}>{count} will be transformed to {count * 42}</p>)
}

export default MagicNumberTransformer;
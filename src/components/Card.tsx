export function Card({image, content}) {
  const style = {
    width: '18rem'
  }
  return (
    <div className="card" style={style}>
      {image}
      {content}
    </div>
  )
}

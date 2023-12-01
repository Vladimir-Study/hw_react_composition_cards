import { Card } from "./Card"
import { Content } from "./Content"
import { Img } from "./Img"

export function Cards() {
  const dataArray = [
    {
    id: 1,
    img: "https://avatars.mds.yandex.net/i?id=d868fb289b30f1ea3627a34f47626359-4779391-images-thumbs&n=13",
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }, {
    id: 2,
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]
  return (
    dataArray.map((data) => {
      console.log()
      return <Card key={data.id} image={data.img!==undefined ? <Img img={data.img}/> : null} content={<Content title={data.title} text={data.text}/>}/>
    })
  )
}

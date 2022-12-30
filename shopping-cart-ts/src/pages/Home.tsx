import { Card } from "react-bootstrap";

export function Home() {
  return(
    <div>
      <h1>Pokemon Store</h1>
      <Card className="h-100">
          <Card.Img variant="top" src={"../../public/images/Pokemon.jpeg"} style={{width: "500px", height: "500px"}}   />
      </Card>
    </div>
  )
}

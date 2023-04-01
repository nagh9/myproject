import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';





export default function MovieCard({ element }) {
    return (

    <div className="MovieCard">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={element.poster} />
      <Card.Body>
        <Card.Title>{element.title}</Card.Title>
        <Card.Text>{element.description}</Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    </div>
  );
}













































    
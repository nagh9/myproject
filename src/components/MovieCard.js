import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';





export default function MovieCard({ movie }) {
    return (

    <div className="MovieCard">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
    </div>
  );
}













































    
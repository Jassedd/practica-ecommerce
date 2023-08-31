import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Article() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/articles')
            .then((response) => response.json())
            .then((data) => setArticles(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <Card style={{ width: '18rem' }}>
            {articles.map((art) => (
                <div className='article-info' key={art.id}>
                    <Card.Img variant="top" src={`/images/${art.image}`} className="img-fluid w-50 h-50" />
                    <Card.Body>
                    <Card.Title>{art.title}</Card.Title>
                    <br />
                    <Card.Text>
                    {art.price}€
                    </Card.Text>
                    <Button variant="primary"><Link to={`/consultores/${art.title}`}>{`+ Información`}</Link></Button>
                    </Card.Body>
                </div>
            ))}
        </Card>
    );
}




      
   
    
  


export default Article;
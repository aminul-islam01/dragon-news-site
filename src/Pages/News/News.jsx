import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData()
    const { category_id, title, details, image_url} = news;
    return (
        <div>
            <h5 className='mb-4 fw-bold'>Dragon News</h5>
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={image_url} />
                    <h5 className='mb-4 fw-bold'>{title}</h5>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger" className='rounded-0'>
                            <FaArrowLeft></FaArrowLeft> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;
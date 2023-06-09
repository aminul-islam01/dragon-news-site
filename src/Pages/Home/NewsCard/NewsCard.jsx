import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    // console.log(news)
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ width: '40px' }} src={author?.img} roundedCircle />
                <div className='ms-3 flex-grow-1'>
                    <h6 className='mb-0'>{author?.name}</h6>
                    <small>{moment(author?.published_date).format('YYYY-MM-DD')}</small>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <h5 className='mb-4 fw-bold'>{title}</h5>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? details
                        : <>{details.slice(0, 250)}...
                            <Link to={`/news/${_id}`}>Read More</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    />
                    <span className='ms-2'>{rating?.number}</span>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye></FaEye>
                    <span className='ms-2'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;
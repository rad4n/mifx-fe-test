import styles from './Ratings.module.css';
import ReactStars from 'react-rating-stars-component';
import { Col, Row } from 'react-bootstrap';


const Ratings = ({ rating, reviewCount }: any) => {
    return (
        <div className="rating">
            <Row>
                <Col sm={6} md={4} xs={10}>
                    <div className="stars">
                        <ReactStars
                            count={5}
                            isHalf={true}
                            size={20}
                            activeColor="#ffd700"
                            value={rating}
                        />
                    </div>

                </Col>
                <Col xs={4}>
                    <span className={styles['review-no']}>({reviewCount} reviews)</span>
                </Col>
            </Row>
        </div>
    )
}

export default Ratings
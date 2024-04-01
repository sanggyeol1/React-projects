import React from 'react'
import { Row, Col } from 'react-bootstrap'
const ContactItem = ({item}) => {
    

    return (
        <div>
            <Row className='profile-content'>
                <Col lg={2}>
                    <img width={60} className='profile-image' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150711_51%2Fsaga6523_1436612075183s3hgc_JPEG%2F1436611985646.jpeg&type=a340' />
                </Col>
                <Col lg={10}>
                    <div>
                        <h3>{item?.name}</h3>
                        <div>{item?.phoneNumber}</div>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default ContactItem
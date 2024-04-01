import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
import ContactItem from './component/ContactItem';
import { useSelector } from 'react-redux';

function App() {

  const contactList = useSelector(state => state.contactList)
  return (
    <Container>

      <h3 className='title mt-20'>연락처</h3>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
        <ContactList />
        </Col>
      </Row>

    </Container>
  );
}

export default App;

import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.css';

function ParticipantList(props) { 
    return (
        <ListGroup as="ul">
            <ListGroup.Item id={props.id} as="li" active={props.active} className='addme'>
                <h2>{props.name}</h2>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default ParticipantList;
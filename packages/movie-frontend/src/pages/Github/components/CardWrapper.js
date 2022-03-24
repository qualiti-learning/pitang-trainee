import { Card } from 'react-bootstrap'

const CardWrapper = ({ children, title }) => (
    <Card>
        <Card.Header>
            <Card.Title>
                {title}
            </Card.Title>
        </Card.Header>

        <Card.Body>
            {children}
        </Card.Body>
    </Card>
)


export default CardWrapper
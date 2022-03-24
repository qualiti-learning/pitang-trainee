import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return (
        <div className='d-flex justify-content-center mt-4'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading;
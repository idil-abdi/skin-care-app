import Card from 'react-bootstrap/Card';

export const Review = () => {
    return (
        <Card className='mb-5 text-center w-30'>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
                </blockquote>
            </Card.Body>
        </Card>

    )
}
import Accordion from 'react-bootstrap/Accordion';

export const ProductAccordion = (props) => {
    const product = props.product;
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
            <Accordion.Header>Description</Accordion.Header>
            <Accordion.Body>
                {product.discription}
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>Instruction</Accordion.Header>
            <Accordion.Body>
                {product.instruction}
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header>Ingredients</Accordion.Header>
            <Accordion.Body>
                {product.ingridents}
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}
import Accordion from 'react-bootstrap/Accordion';

const Accordeon = ({ titleOne, descriptionOne, titleTwo, descriptionTwo }) => {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>{titleOne}</Accordion.Header>
				<Accordion.Body>{descriptionOne}</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>{titleTwo}</Accordion.Header>
				<Accordion.Body>{descriptionTwo}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};

export default Accordeon;

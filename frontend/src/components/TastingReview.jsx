import React from "react";
import styled from "styled-components";
import {
	Row,
	Col,
	Form,
	ButtonToolbar,
	Button,
	ToggleButtonGroup,
	ToggleButton,
	Card,
	InputGroup
} from "react-bootstrap";
import { Formik } from "formik";

class TastingReview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<h1>Taste a new Wine!</h1>
				<Formik
					onSubmit={console.log}
					initialValues={{}}
				>
					{({
						handleSubmit,
						handleChange,
						handleBlur,
						values,
						touched,
						isValid,
						errors
					}) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Card>
								<Card.Header as="h2">Wine Information</Card.Header>
								<Card.Body>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Country</Form.Label>
												<Form.Control type="text" name="country" placeholder="Country of Production" />
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Vintage</Form.Label>
												<Form.Control type="number" name="vintage" placeholder="Vintage Year" />
												<Form.Text className="text-muted">
													For <code>Non Vintage</code>, enter <code>0</code>.
												</Form.Text>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Region</Form.Label>
												<Form.Control type="text" name="region" placeholder="Region" />
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Appellation</Form.Label>
												<Form.Control type="text" name="appellation" placeholder="Appellation" />
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Producer/Wine</Form.Label>
												<Form.Control name="producer" placeholder="Producer/Wine" />
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Grape(s)</Form.Label>
												<Form.Control type="text" name="grapes" placeholder="Grapes used"/>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Price per Bottle</Form.Label>
												<InputGroup>
													<InputGroup.Prepend>
														<InputGroup.Text>$</InputGroup.Text>
													</InputGroup.Prepend>
													<Form.Control type="number" name="price" placeholder="Price" />
													<InputGroup.Append>
														<InputGroup.Text>.00</InputGroup.Text>
													</InputGroup.Append>
												</InputGroup>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Alcohol per Volume (%)</Form.Label>
												<InputGroup>
													<Form.Control type="number" name="alcohol" placeholder="Alc %" />
													<InputGroup.Append>
														<InputGroup.Text>%</InputGroup.Text>
													</InputGroup.Append>
												</InputGroup>
											</Form.Group>
										</Col>
									</Row>
								</Card.Body>
							</Card>
								<br />
							<Card>
								<Card.Body>
									<Button type="submit" size="lg" block>Save Tasting</Button>
								</Card.Body>
							</Card>
						</Form>
					)}
				</Formik>
			</React.Fragment>
		);
	}
}

export default TastingReview;
import React from "react";
import styled from "styled-components";
import {
	Row,
	Col,
	Form,
	ButtonToolbar,
	Button,
	ButtonGroup,
	ToggleButtonGroup,
	ToggleButton,
	Card,
	InputGroup
} from "react-bootstrap";
import { Formik, useField } from "formik";

const MyRadio = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'radio'});
	return (
		<Form.Group>
			<Form.Label>{children}</Form.Label>
			<Form.Radio {...field} {...props}></Form.Radio>
		</Form.Group>
	)
};

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
						errors,
						setFieldValue
					}) => (
						<Form noValidate onSubmit={handleSubmit}>
							{console.log(values)}
							<Card>
								<Card.Header as="h2">Wine Information</Card.Header>
								<Card.Body>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Country</Form.Label>
												<Form.Control
													type="text"
													name="country"
													placeholder="Country of Production"
													onChange={handleChange}
													value={values.country}
												/>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Vintage</Form.Label>
												<Form.Control
													type="number"
													name="vintage"
													placeholder="Vintage Year"
													onChange={handleChange}
													value={values.vintage}
												/>
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
												<Form.Control
													type="text"
													name="region"
													placeholder="Region"
													onChange={handleChange}
													value={values.region}
												/>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Appellation</Form.Label>
												<Form.Control
													type="text"
													name="appellation"
													placeholder="Appellation"
													onChange={handleChange}
													value={values.appellation}
												/>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Producer/Wine</Form.Label>
												<Form.Control
													type="text"
													name="producer"
													placeholder="Producer/Wine"
													onChange={handleChange}
													value={values.producer}
												/>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Grape(s)</Form.Label>
												<Form.Control
													type="text"
													name="grapes"
													placeholder="Grapes used"
													onChange={handleChange}
													value={values.grapes}
												/>
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
													<Form.Control
														type="number"
														name="price"
														placeholder="Price"
														onChange={handleChange}
														value={values.price}
													/>
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
													<Form.Control
														type="number"
														name="alcohol"
														placeholder="Alc %"
														onChange={handleChange}
														value={values.alcohol}
													/>
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
								<Card.Header as="h2">Appearance</Card.Header>
								<Card.Body>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Clarity</Form.Label>
												<Form.Control
													as="select"
													name="appearance_clarity"
													onChange={handleChange}
													value={values.appearance_clarity}
												>
													<option value=""> - Select a Clarity - </option>
													<option value={1}>Clear</option>
													<option value={2}>Hazy</option>
												</Form.Control>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Intensity</Form.Label>
												<Form.Control
													as="select"
													name="appearance_intensity"
													onChange={handleChange}
													value={values.appearance_intensity}
												>
													<option value=""> - Select an Intensity - </option>
													<option value={1}>Pale</option>
													<option value={5}>Medium</option>
													<option value={9}>Deep</option>
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Color</Form.Label>
												<InputGroup>
													<Form.Control
														type="text"
														name="appearance_color"
														placeholder="Wine Color"
														onChange={handleChange}
														value={values.appearance_color}
													/>
												</InputGroup>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={12}>
											<Form.Group>
												<Form.Label>Appearance Notes</Form.Label>
												<Form.Control
													as="textarea"
													rows="3"
													name="appearance_notes"
													onChange={handleChange}
													value={values.appearance_notes}
												/>
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
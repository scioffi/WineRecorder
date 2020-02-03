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
import moment from "moment";

const COLORS = {
	"white": [
		{
			name: "Lemon",
			value: 0
		},
		{
			name: "Gold",
			value: 1
		},
		{
			name: "Amber",
			value: 2
		}
	]

};

const colorField = (wine_type, change, values) => {

	if (wine_type) {
		return (
			<Form.Group>
				<Form.Label>Color ({wine_type})</Form.Label>
				<Form.Control
					as="select"
					name="appearance_color"
					onChange={change}
					value={values.appearance_color}
				>
					<option value="" selected> - Select a Color - </option>
				</Form.Control>
			</Form.Group>
		);
	}

	return (
		<em>Please select a Wine Type before choosing color</em>
	)
};

class TastingReview extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}

	saveTasting = async (data) => {
		data.date = moment().format("YYYY-MM-DD HH:mm:ss");
		data.list_id = 0;
		data.owner = 0;

		console.log(data);
		const submit = await fetch(`${window.wines.hostname}/saveTasting`, {
			method: "post",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const response = await submit.json();
	};

	render() {
		return (
			<React.Fragment>
				<h1>Taste a new Wine!</h1>
				<Formik
					onSubmit={this.saveTasting}
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
												<Form.Control
													type="text"
													name="appearance_color"
													placeholder="Wine Color"
													onChange={handleChange}
													value={values.appearance_color}
												/>
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
								<Card.Header as="h2">Palate</Card.Header>
								<Card.Body>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Sweetness</Form.Label>
												<Form.Control
													as="select"
													name="palate_sweetness"
													onChange={handleChange}
													value={values.palate_sweetness}
												>
													<option value=""> - Select a Sweetness - </option>
													<option value={1}>Dry</option>
													<option value={2}>Off-Dry</option>
													<option value={3}>Medium</option>
													<option value={4}>Sweet</option>
												</Form.Control>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Acidity</Form.Label>
												<Form.Control
													as="select"
													name="palate_acidity"
													onChange={handleChange}
													value={values.palate_acidity}
												>
													<option value=""> - Select an Acidity - </option>
													<option value={1}>Low</option>
													<option value={5}>Medium</option>
													<option value={9}>High</option>
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Tannin</Form.Label>
												<Form.Control
													as="select"
													name="palate_tannin"
													onChange={handleChange}
													value={values.palate_tannin}
												>
													<option value=""> - Select a Tannin - </option>
													<option value={1}>Low</option>
													<option value={5}>Medium</option>
													<option value={9}>High</option>
												</Form.Control>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Alcohol</Form.Label>
												<Form.Control
													as="select"
													name="palate_alcohol"
													onChange={handleChange}
													value={values.palate_alcohol}
												>
													<option value=""> - Select an Alcohol - </option>
													<option value={1}>Low</option>
													<option value={5}>Medium</option>
													<option value={9}>High</option>
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Body</Form.Label>
												<Form.Control
													as="select"
													name="palate_body"
													onChange={handleChange}
													value={values.palate_body}
												>
													<option value=""> - Select a Body - </option>
													<option value={1}>Light</option>
													<option value={5}>Medium</option>
													<option value={9}>Full</option>
												</Form.Control>
											</Form.Group>
										</Col>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Flavor Intensity</Form.Label>
												<Form.Control
													as="select"
													name="palate_intensity"
													onChange={handleChange}
													value={values.palate_intensity}
												>
													<option value=""> - Select an Intensity - </option>
													<option value={1}>Light</option>
													<option value={5}>Medium</option>
													<option value={9}>Pronounced</option>
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Finish</Form.Label>
												<Form.Control
													as="select"
													name="palate_finish"
													onChange={handleChange}
													value={values.palate_finish}
												>
													<option value=""> - Select a Finish - </option>
													<option value={1}>Short</option>
													<option value={5}>Medium</option>
													<option value={9}>Long</option>
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={12}>
											<Form.Group>
												<Form.Label>Palate Notes</Form.Label>
												<Form.Control
													as="textarea"
													rows="3"
													name="palate_notes"
													onChange={handleChange}
													value={values.palate_notes}
												/>
											</Form.Group>
										</Col>
									</Row>
								</Card.Body>
							</Card>
								<br />
							<Card>
								<Card.Header as="h2">Conclusion</Card.Header>
								<Card.Body>
									<Row>
										<Col sm={12}>
											<Form.Group>
												<Form.Label>Conclusion Notes</Form.Label>
												<Form.Control
													as="textarea"
													rows="3"
													name="conclusion"
													onChange={handleChange}
													value={values.conclusion}
												/>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<Form.Group>
												<Form.Label>Quality</Form.Label>
												<Form.Control
													as="select"
													name="quality"
													onChange={handleChange}
													value={values.quality}
												>
													<option value=""> - Select a Quality - </option>
													<option value={1}>Poor</option>
													<option value={2}>Acceptable</option>
													<option value={3}>Good</option>
													<option value={4}>Very Good</option>
													<option value={5}>Outstanding</option>
												</Form.Control>
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
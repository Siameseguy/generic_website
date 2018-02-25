import React from 'react'
import PropTypes from 'prop-types'
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from '../messages/InlineError'

class LoginForm extends React.Component {
	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	}

	onChange = e =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		})

	onSubmit = () => {
		const errors = this.validate(this.state.data)
		this.setState({ errors })
		if (Object.keys(errors).length === 0) {
			this.props.submit(this.state.data)
		}
	}
	validate = data => {
		const errors = {}
		if (!Validator.isEmail(data.email)) errors.email = 'Invalid email'
		if (!data.password) errors.password = "Can't be blank"
		return errors
	}

	render() {
		const { data, errors, loading } = this.state

		return (
			<div className="login-form">
				{/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
				<style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
				<Grid
					textAlign="center"
					style={{ height: '100%' }}
					verticalAlign="middle"
				>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							{/* <Image src='/logo.png' /> */} Login to your account
						</Header>
						<Form size="large" onSubmit={this.onSubmit}>
							<Segment stacked>
								<Form.Field error={!!errors.email}>
									<Form.Input
										fluid
										icon="user"
										iconPosition="left"
										type="email"
										id="email"
										name="email"
										placeholder="example@example.com"
										value={data.email}
										onChange={this.onChange}
									/>
									{errors.email && <InlineError text={errors.email} />}
								</Form.Field>
								<Form.Field error={!!errors.password}>
									<Form.Input
										fluid
										icon="lock"
										iconPosition="left"
										type="password"
										id="password"
										name="password"
										placeholder="Make it secure"
										value={data.password}
										onChange={this.onChange}
									/>
									{errors.password && <InlineError text={errors.password} />}
								</Form.Field>

								<Button color="teal" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							New to us? <a href="#">Sign Up</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
}

export default LoginForm

import React from 'react';

type EmailSignupProps = {
}

type EmailSignupState = {
	registered: boolean;
	emailError: boolean;
	email: string;
	placeholder: string;
}


class EmailSignup extends React.Component<EmailSignupProps, EmailSignupState> {
	constructor(props: EmailSignupProps) {
		super(props);

		this.state = {
			registered: false,
			emailError: false,
			email: '',
			placeholder: 'Your email',
		};
	}

	handleEmailSignUp = (event: React.ChangeEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const {
			email,
		} = this.state;

		if (this.validateEmail(email)) {
			this.setState({
				registered: true,
				emailError: false,
				placeholder: 'Your email',
			});
		} else {
			this.setState({
				registered: false,
				emailError: true,
				placeholder: 'Please enter a valid email',
			});
		}
	}

	handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({
			email: event.target.value,
		});
	}

	validateEmail = (txt: string): boolean => {
		const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
		if (txt.match(mailformat)) {
			return true;
		}
		return false;
	}

	render(): JSX.Element {
		const {
			registered,
			emailError,
			email,
			placeholder,
		} = this.state;

		const baseClass = 'bg-white outline-none focus:border border-gray-300 border focus:border-blue-400 rounded-lg py-2 px-4 block w-full leading-normal';
		const inputClass = (emailError) ? `${baseClass} border-red-600` : `${baseClass} border-gray-300`;

		if (!emailError && registered) {
			return (
				<>
					<div className="w-full px-2 text-center align-center">
						<p>
							Thank you for registering.
							<br />
							A Land Rover representative will reach out to you shortly.
						</p>
					</div>
				</>
			);
		}

		return (
			<form
				onSubmit={this.handleEmailSignUp}
				className="min-h-4 flex mb-24 sm:mb-18 md:mb-16 lg:mb-12 max-w-md justify-center items-center m-auto"
				noValidate
			>
				<div className="w-2/3 px-2">
					<input
						className={inputClass}
						type="email"
						placeholder={placeholder}
						name="email"
						id="id_email"
						autoComplete="off"
						value={email}
						onChange={this.handleEmailChange}
					/>
				</div>
				<div className="w-1/3 px-2">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none border-none"
					>
						Sign Up
					</button>
				</div>
			</form>
		);
	}
}
export default EmailSignup;

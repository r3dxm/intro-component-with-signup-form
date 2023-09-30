import React, { useState } from "react";
import styles from "./Intro.module.css";

function Intro(props) {
	const [firstName, setFirstName] = useState("");
	const [firstNameEmpty, setFirstNameEmpty] = useState(false);
	const [firstNameInvalid, setFirstNameInvalid] = useState(false);
	const [lastName, setLastName] = useState("");
	const [lastNameEmpty, setLastNameEmpty] = useState(false);
	const [lastNameInvalid, setLastNameInvalid] = useState(false);
	const [email, setEmail] = useState("");
	const [emailEmpty, setEmailEmpty] = useState(false);
	const [emailInvalid, setEmailInvalid] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordEmpty, setPasswordEmpty] = useState(false);
	const [passwordInvalid, setPasswordInvalid] = useState(false);

	function handleSubmit() {
		firstName === "" ? setFirstNameEmpty(true) : setFirstNameEmpty(false);
		const firstNameMatch = String(firstName).match(
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
		);

		lastName === "" ? setLastNameEmpty(true) : setLastNameEmpty(false);
		const lastNameMatch = String(lastName).match(
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
		);

		email === "" ? setEmailEmpty(true) : setEmailEmpty(false);
		const emailMatch = String(email).match(
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
		);

		password === "" ? setPasswordEmpty(true) : setPasswordEmpty(false);
		const passwordMatch =
			String(password).match(/^[a-zA-Z0-9_.-]*$/) && !passwordEmpty;

		if (firstNameMatch && lastNameMatch && emailMatch && passwordMatch) {
			setFirstNameInvalid(false);
			setLastNameInvalid(false);
			setEmailInvalid(false);
			setPasswordInvalid(false);
			console.log(firstName, lastName, email, password);
		} else {
			if (firstNameMatch) {
				setFirstNameInvalid(false);
			} else {
				setFirstNameInvalid(true);
			}

			if (lastNameMatch) {
				setLastNameInvalid(false);
			} else {
				setLastNameInvalid(true);
			}

			if (emailMatch) {
				setEmailInvalid(false);
			} else {
				setEmailInvalid(true);
			}

			if (passwordMatch) {
				setPasswordInvalid(false);
			} else {
				setPasswordInvalid(true);
			}
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.introText}>
				<h1>Learn to code by watching others</h1>
				<p>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</p>
			</div>
			<div className={styles.formContainer}>
				<div className={styles.header}>
					<p>
						Try it free 7 days <span>then $20/mo. thereafter</span>
					</p>
				</div>
				<form className={styles.form} onSubmit={() => false}>
					<input
						className={firstNameInvalid ? styles.inputInvalid : styles.input}
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						type="text"
						placeholder="First Name"
					/>
					{firstNameEmpty && <h5>First name cannot be empty</h5>}
					<input
						className={lastNameInvalid ? styles.inputInvalid : styles.input}
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						type="text"
						placeholder="Last Name"
					/>
					{lastNameEmpty && <h5>Last name cannot be empty</h5>}
					<input
						className={emailInvalid ? styles.inputInvalid : styles.input}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email Address"
					/>
					{emailEmpty && <h5>Email cannot be empty</h5>}
					{!emailEmpty && emailInvalid && (
						<h5>Looks like this is not an email</h5>
					)}
					<input
						className={
							passwordInvalid || passwordEmpty
								? styles.inputInvalid
								: styles.input
						}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
					/>
					{passwordEmpty && <h5>Password cannot be empty</h5>}
					<button onClick={handleSubmit} type="button">
						CLAIM YOUR FREE TRIAL
					</button>
					<p>
						By clicking the button, you are agreeing to our{" "}
						<span>Terms and Services</span>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Intro;

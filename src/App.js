import { useState, useRef, useEffect } from "react";

const OTP_LENGTH = 5;

const App = () => {
	const [inputArray, setInputArray] = useState(new Array(OTP_LENGTH).fill("")); //["","","","",""]

	const inputRefs = useRef([]);

	useEffect(() => {
		inputRefs.current[0]?.focus(); // Focus on first input box when component mounts
	}, []);

	const handleOnChange = (e, index) => {
		const inputValue = e.target.value.trim(); // Remove whitespace from input value

		if (isNaN(inputValue)) return; // Prevent non-numeric input

		const newArray = [...inputArray];
		newArray[index] = inputValue;
		setInputArray(newArray);

		inputValue && inputRefs.current[index + 1]?.focus(); // Focus on next input box if current input is not empty
	};

	const handleOnKeyDown = (e, index) => {
		if (e.key === "Backspace" && inputArray[index] === "") {
			e.preventDefault(); // Avoid deleting character in previous input box
			inputRefs.current[index - 1]?.focus(); // Focus on previous input box if Backspace is pressed and current input is empty
		}
		if (e.key === "ArrowLeft") {
			e.preventDefault(); // Avoid moving the cursor
			inputRefs.current[index - 1]?.focus(); // Focus on previous input box if ArrowLeft is pressed
		}
		if (e.key === "ArrowRight") {
			e.preventDefault(); // Avoid moving the cursor
			inputRefs.current[index + 1]?.focus(); // Focus on next input box if ArrowRight is pressed
		}
		if (e.key === "Enter") {
			submitOTP(); // Submit OTP when Enter is pressed
		}
	};

	const clearInputs = () => {
		setInputArray(new Array(OTP_LENGTH).fill("")); // Reset input array to empty strings
		inputRefs.current[0]?.focus(); // Focus on first input box after clearing
	};

	const submitOTP = () => {
		const otp = inputArray.join(""); // Join the input values to form the OTP
		if (otp.length === OTP_LENGTH) {
			alert(`OTP Submitted: ${otp}`);
			clearInputs(); // Clear inputs after submission
		} else {
			alert("Please enter a complete OTP.");
		}
	};

	return (
		<div className="app">
			<div className="otp-container">
				<h1>OTP Input</h1>
				<p>Enter the OTP</p>
				<div className="otp-input">
					{inputArray.map((inputValue, index) => (
						<input
							key={index}
							type="text"
							className="input-box"
							value={inputValue}
							ref={(domElement) => (inputRefs.current[index] = domElement)} // Store the reference to each input box
							onChange={(e) => handleOnChange(e, index)}
							onKeyDown={(e) => handleOnKeyDown(e, index)}
							onClick={(e) => e.target.select()} // Select the input value on click
							onFocus={(e) => e.target.select()} // Select the input value on focus
							maxLength={1} // Limit input to a single character
						/>
					))}
				</div>
				<div>
					<button className="button" onClick={clearInputs}>
						Clear
					</button>
					<button className="button" onClick={submitOTP}>
						Submit
					</button>
				</div>
			</div>
			<div className="footer">
				<p>
					Made with ❤️ by&nbsp;
					<a href="https://www.linkedin.com/in/mahesh-sai-kumar-narava/" target="_blank">
						Mahesh
					</a>
					. Check it out on&nbsp;
					<a href="https://github.com/mahesh-pgit/otp-input" target="_blank">
						Github
					</a>
					&nbsp;for more details.
				</p>
			</div>
		</div>
	);
};

export default App;

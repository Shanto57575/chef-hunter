/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Mood = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => setIsDarkMode(!isDarkMode);

	// Update the root element with the current theme values
	useEffect(() => {
		const root = window.document.documentElement;
		root.style.setProperty("--bg-color", isDarkMode ? "#1A1A1A" : "#F7FAFC");
		root.style.setProperty("--text-color", isDarkMode ? "#FFFFFF" : "#1A1A1A");
	}, [isDarkMode]);

	return (
		<button
			className={`p-2 rounded-full transition-colors duration-300 ${
				isDarkMode ? "bg-white text-black" : "bg-black text-white"
			}`}
			onClick={toggleTheme}
		>
			{isDarkMode ? "Light" : "Dark"} Mode
		</button>
	);
};

export default Mood;

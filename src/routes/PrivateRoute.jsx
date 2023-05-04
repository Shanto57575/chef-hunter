/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div>
				<div className="radial-progress" style={{ "--value": 0 }}>
					0%
				</div>
				<div className="radial-progress" style={{ "--value": 20 }}>
					20%
				</div>
				<div className="radial-progress" style={{ "--value": 60 }}>
					60%
				</div>
				<div className="radial-progress" style={{ "--value": 80 }}>
					80%
				</div>
				<div className="radial-progress" style={{ "--value": 100 }}>
					100%
				</div>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return (
		<Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
	);
};

export default PrivateRoute;

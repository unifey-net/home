import React from "react";
import "./Homepage.css"
import { Link } from "react-router-dom";

export default (): JSX.Element => {
    return (
        <div className="flex justify-center items-center flex-col gap-8">
            <h1 className="mb-4 mt-48 title">Unifey</h1>
            <h2 className="-mt-16 subtitle">The open source social media platform.</h2>
            <Link to="/about" className="text-xl mt-32 text-gray-400 underline">Learn more about Unifey</Link>
        </div>
    );
};

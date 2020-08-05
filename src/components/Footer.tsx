import React from "react"
import { Link } from "react-router-dom"

export default (): JSX.Element => {
    return (
        <footer>
            <Link to="/privacy" className="text-blue-400 hover:text-blue-600">
                Privacy
            </Link>{" "}
            — Unifey
        </footer>
    );
}
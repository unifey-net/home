import React from "react"
import { Link } from "react-router-dom";

export default (): JSX.Element => {
    return (
        <header className="flex justify-evenly flex-row py-2">
            <div className="flex flex-row gap-2">
                <Link to="/" className="text-xl">
                    <img
                        src="/favicon.png"
                        className="inline-block mr-1 mb-1"
                        alt="Logo"
                        height={24}
                        width={24}
                    />
                    Unifey
                </Link>
                <Link to="/about" className="ml-2 mt-1 hover:text-blue-600">
                    About
                </Link>
                <Link to="/discord" className="mt-1 hover:text-blue-600">
                    Discord
                </Link>
                <Link to="/github" className="mt-1 hover:text-blue-600">
                    GitHub
                </Link>
            </div>
            <div>
                <Link to="/beta" className="block underline mt-1">
                    Beta
                </Link>
            </div>
        </header>
    );
}
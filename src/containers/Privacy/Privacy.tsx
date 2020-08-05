import React from "react";
import "./Privacy.css"

export default (): JSX.Element => {
    return (
        <div className="flex items-center flex-col">
            <h1 className="mt-6 text-2xl">Privacy Policy</h1>
            <div className="w-64 lg:w-auto lg:max-w-lg">
                <h1 className="text-gray-300 text-lg my-2">1. Cookies</h1>
                <p className="privacy-paragraph">
                    Unifey uses cookies. Cookies are small text files that are
                    stored on your browser while you're browsing Unifey. Sites
                    using cookies can "recognize" you through this cookies. On
                    one hand, they allow sites to store configurations you've
                    created or login information. On another hand they provide a
                    means for collecting statistical data on website use for
                    marketing purposes.
                </p>
                <p className="privacy-paragraph">
                    Some cookies will be deleted automatically as soon as you
                    leave the site (session cookies). Other cookies will
                    be stored for a specific amount of time, up to two years (persistent cookies).
                    Unifey utilizes third party cookies, which are managed by
                    third party to offer certain services. We explain these
                    third parties later.
                </p>
                <p className="privacy-paragraph">
                    Users can influence the use of cookies. Most browsers have
                    an option that limits or prevents the use.
                </p>
                <h2 className="text-md text-gray-300 my-2">
                    1.1. Third Party Cookies
                </h2>
                <p className="privacy-paragraph">
                    Third party cookies are cookies that are managed by a third
                    party. These offer different services to Unifey.
                </p>
                <h3 className="text-md text-gray-300 my-2">Google Analytics</h3>
                <p className="privacy-paragraph">
                    We are using Google Analytics to improve the functionality
                    of our website. You can disable this by installing the
                    Google Analytics Opt-out Browser Add-on:{" "}
                    <a
                        rel="noopenner noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                        href="https://tools.google.com/dlpage/gaoptout/"
                    >
                        https://tools.google.com/dlpage/gaoptout/
                    </a>

                    <br/>
                    For more information on how Google handles your data, visit:{" "}
                    <a
                        rel="noopenner noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                        href="https://policies.google.com/privacy?hl=en"
                    >
                        https://policies.google.com/privacy?hl=en
                    </a>
                </p>
                <h1 className="text-gray-300 text-lg my-2">
                    2. Personal Information
                </h1>
                <p className="privacy-paragraph">
                    We collect personal information when you submit it through
                    forms. We do not share this information you have submitted
                    to third parties.
                </p>
                <h1 className="text-gray-300 text-lg my-2">3. Email</h1>
                <p className="privacy-paragraph">
                    When providing us with your email, you agree to receive
                    emails marketing and account notifications regarding Unifey.
                </p>
            </div>
        </div>
    );
}
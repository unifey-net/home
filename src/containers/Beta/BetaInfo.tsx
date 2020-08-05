import React from "react"

export default (): JSX.Element => {
    return (
        <div className="mx-8 lg:mx-0">
            <h1 className="text-5xl lg:text-6xl text-gray-300">Beta Access</h1>
            <p className="max-w-lg">
                Unifey is currently in it's alpha stages. This means features
                are definitely not in working order, and there are too many bugs
                to count. However, in the near future we will have a beta run.
                What this means is that we'll allow users who have signed up to
                use Unifey to it's extent to attempt to find bugs.
                <br />
                <br />
                If you'd like to join and help us in beta, please sign up below.
                When you do sign up, you will be notified through email when
                beta begins. This email will include the account created for
                you.
            </p>

            <p className="text-4xl text-gray-300 mt-4">Beta Signup</p>
            <p className="max-w-lg">
                This is the area to sign-up for beta access. Make sure both your
                email and username have not been used in a previous beta signup.
                Remember: Unless you verify your email, the signup will not be
                available on beta and other users may potentially be able to
                take your name.
            </p>
        </div>
    );
}
import React from "react";
import { Link } from "react-router-dom";

type Question = {
    question: string,
    answer: JSX.Element
}

export default (): JSX.Element => {
    const questions: Question[] = [
        {
            question: "What is Unifey?",
            answer: <>Unifey is an open source social media platform.</>,
        },
        {
            question: "Where can I find the source code to Unifey?",
            answer: (
                <>
                    You can find the source code to Unifey on our{" "}
                    <Link to="/github" className="text-blue-400">
                        GitHub
                    </Link>
                    .
                </>
            ),
        },
        {
            question: "When will Unifey release?",
            answer: (
                <>
                    At the moment, we don't know. However, you can estimate
                    around October.
                </>
            ),
        },
        {
            question: "I've found an issue with something Unifey related.",
            answer: (
                <>
                    If you've found something wrong with Unifey, we'd be very
                    greatful if you notified us in our{" "}
                    <Link to="/discord" className="text-blue-400">
                        Discord
                    </Link>
                    .
                </>
            ),
        },
    ];

    return (
        <div className="flex justify-center items-center flex-col gap-8">
            <h1 className="text-4xl mt-4">About Unifey</h1>
            <div className="flex flex-col lg:gap-8 lg:w-2/5">
                {questions.map((question: any, index: number) => {
                    return (
                        <div
                            className={`${
                                index % 2 === 0 ? "self-start" : "self-end"
                            } p-8 rounded`}
                        >
                            <h1 className="text-lg mb-2 text-gray-300">
                                {question.question}
                            </h1>
                            <p className="max-w-sm">{question.answer}</p>
                        </div>
                    );
                })}
            </div>
            <div>
                <h2 className="text-gray-300 text-lg">If you have more questions</h2>
                <p>
                    Ask in our <Link to="/discord" className="text-blue-400">Discord</Link>.
                </p>
            </div>
        </div>
    );
};

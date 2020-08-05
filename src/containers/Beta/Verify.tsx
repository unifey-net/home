import React, { useEffect } from "react";
import { Redirect } from "react-router";
import { notification, Spin } from "antd";
import queryString from "query-string";

export default (props: any) => {
    useEffect(() => {
        const attemptVerify = async (secret: string) => {
            let form = new FormData();
            form.append("verify", secret);

            let request = await fetch("https://api.unifey.net/email/betaverify", {
                method: "POST",
                body: form,
            });

            if (request.status !== 200) {
                notification.open({
                    message: "Unifey Beta",
                    description:
                        "There was an issue verifying your account. Please contact us in our Discord for further assitance.",
                });
            } else {
                notification.open({
                    message: "Unifey Beta",
                    description:
                        "You have successfully verified your Beta account! You will be emailed when the Beta begins so you can log in.",
                });
            }
            
            props.history.push("/beta");
        };

        const verify = queryString.parse(window.location.search).verify as string

        if (verify !== "" && verify != undefined)
            attemptVerify(verify);
        else {
            notification.open({
                message: "Unifey Beta",
                description:
                    "There was an issue verifying your account. Please contact us in our Discord for further assitance.",
            });
            props.history.push("/beta")
        }
    }, []);

    return <div className="flex items-center">
        <Spin/>
    </div>;
};

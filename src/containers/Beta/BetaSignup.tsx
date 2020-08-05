import React from "react";
import { Input, Button, Form, Checkbox, message, notification } from "antd";
import { Link } from "react-router-dom";

export default (): JSX.Element  => {
    const [form] = Form.useForm();
    
    const signUp = async (values: any) => {
        const { username, email } = values;

        let data = new FormData();
        data.append("username", username);
        data.append("email", email);

        let req = await fetch("http://localhost:8077/beta", {
            method: "PUT",
            body: data
        })

        if (req.status === 200) {
            form.resetFields();
            notification.open({
                message: "Unifey Beta",
                description:
                    "You have successfully signed up for the beta. Make sure to verify your email.",
            });
        } else {
            let json = await req.json()
            message.error(json.payload);
        }
    };

    return (
        <div className="mt-8 max-w-xs">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={signUp}
                onFinishFailed={() => {}}
                form={form}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        {
                            type: "email",
                            message: "The input is not valid email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <div>
                    <Form.Item
                        name="accept"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_: any, value: any) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              "You must accept our Privacy Policy before signing up."
                                          ),
                            },
                        ]}
                    >
                        <Checkbox>
                            I accept the <Link className="text-blue-400" to="/privacy">Privacy Policy</Link>.
                        </Checkbox>
                    </Form.Item>

                    <Form.Item
                        name="email-policy"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_: any, value: any) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              "You must accept the email policy."
                                          ),
                            },
                        ]}
                    >
                        <Checkbox>
                            I understand I will be emailed to verify my beta
                            account.
                        </Checkbox>
                    </Form.Item>

                    <Form.Item
                        name="age"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_: any, value: any) =>
                                    value
                                        ? Promise.resolve()
                                        : Promise.reject(
                                              "You must be at least the age of 13."
                                          ),
                            },
                        ]}
                    >
                        <Checkbox>I am at least the age of 13.</Checkbox>
                    </Form.Item>
                </div>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

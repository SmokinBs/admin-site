import { InputGroup, Checkbox, Button } from "@paljs/ui";
import { signIn } from "next-auth/client";
import Auth, { Group } from "components/Auth";
import Socials from "components/Auth/Socials";
import Layout from "Layouts";
import Link from "next/link";
import React from "react";

const SignIn = () => {
    const onCheckbox = () => {
        // v will be true or false
    };
    return (
        <Layout title="Login">
            {/* <Auth title="Login" subTitle="Hello! Login with your email">
                <form>
                    <InputGroup fullWidth>
                        <input type="tel" placeholder="Phone Number" />
                    </InputGroup>
                    <InputGroup fullWidth>
                        <input type="password" placeholder="Password" />
                    </InputGroup>
                    <Group>
                        <Checkbox checked onChange={onCheckbox}>
                            Remember me
                        </Checkbox>
                        <Link href="/auth/request-password">
                            <a>Forgot Password?</a>
                        </Link>
                    </Group>
                </form>
                <Socials />
                <p></p>
            </Auth> */}

            <Button
                status="Success"
                type="button"
                shape="SemiRound"
                fullWidth
                onClick={() => {
                    signIn("google");
                }}
            >
                Login
            </Button>
        </Layout>
    );
};
export default SignIn;

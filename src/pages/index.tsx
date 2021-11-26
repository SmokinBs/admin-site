import Layout from "Layouts";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/client";

const Home = () => {
    return (
        <Layout title="Home">
            <>
                <h1>Hello Please sign in!</h1>
                <Link href="/api/auth/signin/google">
                    <a
                        onClick={() => {
                            signIn("google");
                        }}
                    >
                        Sign In
                    </a>
                </Link>
            </>
        </Layout>
    );
};
export default Home;

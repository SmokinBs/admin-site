import React from "react";
import Layout from "Layouts";

import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";

const Dashboard = () => {
    const [session] = useSession();

    return (
        <Layout title="Home">
            {!session ? (
                <>
                    <h1>Hello Please sign in!</h1>
                    <Link href="/api/auth/signin">
                        <a
                            onClick={() => {
                                signIn();
                            }}
                        >
                            Sign In
                        </a>
                    </Link>
                </>
            ) : (
                <>
                    <h1>Hello do you want to sign out?</h1>
                    <Link href="/api/auth/signout">
                        <a
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Sign Out
                        </a>
                    </Link>
                </>
            )}
        </Layout>
    );
};
export default Dashboard;

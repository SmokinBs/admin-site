import Layout from "Layouts";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Home = () => {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <Layout title="Home">
            {user ? (
                <div>
                    Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
                </div>
            ) : (
                <a href="/api/auth/login">Login</a>
            )}
        </Layout>
    );
};
export default Home;

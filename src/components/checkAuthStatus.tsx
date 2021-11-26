import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

function CheckAuthStatus({ children }: { children: ReactNode }) {
    const [session] = useSession();
    const router = useRouter();

    return (
        <>
            {session ? (
                <>{children}</>
            ) : (
                <>
                    {useEffect((): any => {
                        router.push("/api/auth/signin");
                        signIn();
                    })}
                </>
            )}
        </>
    );
}

export default CheckAuthStatus;

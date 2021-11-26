import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { DefaultTheme } from "styled-components";
import { LayoutHeader } from "@paljs/ui/Layout";
import { Actions } from "@paljs/ui/Actions";
import ContextMenu from "@paljs/ui/ContextMenu";
import User from "@paljs/ui/User";
import { breakpointDown } from "@paljs/ui/breakpoints";

const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    ${breakpointDown("sm")`
    .right{
      display: none;
    }
  `}
    .right > div {
        height: auto;
        display: flex;
        align-content: center;
    }
    .logo {
        font-size: 1.25rem;
        white-space: nowrap;
        text-decoration: none;
    }
    .left {
        display: flex;
        align-items: center;
        .github {
            font-size: 18px;
            margin-right: 5px;
        }
    }
`;

interface HeaderProps {
    title: String;
    toggleSidebar: () => void;
    theme: {
        set: (value: DefaultTheme["name"]) => void;
        value: DefaultTheme["name"];
    };
    dir: "ltr";
}

const Header: React.FC<HeaderProps> = (props, { session }) => {
    const router = useRouter();

    return (
        <LayoutHeader fixed>
            <HeaderStyle>
                <Actions
                    size="Medium"
                    actions={[
                        {
                            icon: { name: "menu-2-outline" },
                            url: {
                                onClick: props.toggleSidebar,
                            },
                        },
                        {
                            content: (
                                <Link href="/">
                                    <a className="logo">{props.title}</a>
                                </Link>
                            ),
                        },
                    ]}
                />
                <Actions
                    size="Small"
                    className="right"
                    actions={[
                        {
                            content: (
                                <a href="https://discord.gg/NRmdvDxsT8" target="_blank" rel="noreferrer">
                                    <img height="20" src="/discord.svg" alt="slack" />
                                </a>
                            ),
                        },
                        {
                            icon: "twitter",
                            url: { href: "https://twitter.com/AhmedElywh", target: "_blank" },
                        },
                        {
                            icon: "settings",
                            url: { href: "/user/settings" },
                        },
                        // {
                        //     content: (
                        //         <ContextMenu
                        //             nextJs
                        //             style={{ cursor: "pointer" }}
                        //             placement="bottom"
                        //             currentPath={router.pathname}
                        //             items={[
                        //                 { title: "Profile", link: { href: "/modal-overlays/tooltip" } },
                        //                 { title: "Log out", link: { href: "/logout" } },
                        //             ]}
                        //             Link={Link}
                        //         >
                        //             <User
                        //                 image={session?.user?.image?.toString()}
                        //                 name={session?.user?.name?.toString()}
                        //                 size="Large"
                        //             />
                        //         </ContextMenu>
                        //     ),
                        // },
                    ]}
                />
            </HeaderStyle>
        </LayoutHeader>
    );
};
export default Header;

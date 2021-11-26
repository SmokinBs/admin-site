import Layout from "Layouts";
import React, { useRef } from "react";
import { Accordion, AccordionItem, Button, EvaIcon, Popover, Tab, Tabs, Toastr, ToastrRef } from "@paljs/ui";

export async function getServerSideProps() {
    const data = await (await fetch("https://admin.smokinbsbbqtest.tk/api/findAllAlerts")).json();
    console.log(data);

    return {
        props: {
            alerts: data.alerts,
        },
    };
}

export let toastrRef: any;

const Alert = (props: { alerts: any }) => {
    toastrRef = useRef<ToastrRef>();

    function MakeCard({ id, title, content }: { id: any; title: string; content: string }) {
        const deleteItem = async (itemId: string, title: string) => {
            console.log(itemId);
            if (confirm("Are you sure you want to delete this? !! THIS IS IRREVERSIBLE !!")) {
                await fetch(`/api/database/alert/delete`, {
                    method: "POST",
                    body: JSON.stringify({
                        id,
                    }),
                })
                    .then(() => {
                        location.reload();
                        toastrRef.current?.add("Refreshing...", `Deleted ${title}`, {
                            position: "topEnd",
                            duration: 10_000,
                            status: "Success",
                            hasIcon: true,
                            destroyByClick: true,
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                        toastrRef.current?.add(`Couldn't delete item. Error: ${err}`, `Error Deleting ${title}`, {
                            position: "topEnd",
                            duration: 10_000,
                            status: "danger",
                            hasIcon: true,
                            destroyByClick: true,
                        });
                    });
            }
        };
        return (
            <Accordion>
                <AccordionItem uniqueKey={id} title={title}>
                    {content}
                    <br />
                    <Button className="food-button">
                        <EvaIcon name="edit" />
                    </Button>
                    <Button status="Danger" onClick={() => deleteItem(id, title)}>
                        <EvaIcon name="trash" />
                    </Button>
                </AccordionItem>
            </Accordion>
        );
    }

    return (
        <Layout title="Alert Dashboard">
            <Toastr ref={toastrRef} />
            <Button
                appearance="hero"
                className="mB1"
                onClick={() => {
                    window.location.href = "/dashboard/alerts/create";
                }}
            >
                <Popover trigger="hint" placement="top" overlay="Create Alert">
                    <EvaIcon name="file-add" />
                </Popover>
            </Button>
            <Tabs fullWidth>
                <></>
                <Tab
                    title="All Alerts"
                    badge={{
                        status: "Info",
                        position: "topStart",
                        title: props.alerts.length,
                    }}
                    responsive
                >
                    {!(props.alerts.length > 0) ? (
                        <>
                            <h1>No Alerts!</h1>
                        </>
                    ) : (
                        <>
                            {props.alerts.map((item: { _id: any; title: any; content: any }) => (
                                <MakeCard id={item._id} title={item.title} content={item.content} />
                            ))}
                        </>
                    )}
                </Tab>
            </Tabs>
        </Layout>
    );
};

export default Alert;

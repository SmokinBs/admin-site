import { Button, EvaIcon, InputGroup, Toastr, ToastrRef } from "@paljs/ui";
import Layout from "Layouts";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { DateTimePicker } from "@material-ui/pickers";

const Input = styled(InputGroup)`
    margin-right: 1rem;
    display: inline-flex !important;
`;
const TextArea = styled(InputGroup)`
    margin-top: 1rem;
`;

const CreateAlert = () => {
    const [startDate, setStartDate] = useState(new Date());
    let toastrRef = useRef<ToastrRef>(null);

    const SubmitForm = async (e: any) => {
        e.preventDefault();

        const res = await fetch("/api/database/alert/create", {
            method: "POST",
            body: JSON.stringify({
                name: e.target.name.value,
                content: e.target.content.value,
                expires: new Date(e.target.datetime.value),
            }),
        }).then((res) => res.json());

        if (res.success) {
            location.reload();
            toastrRef.current?.add("Successfully created Alert", "Created Alert", {
                position: "topEnd",
                duration: 10_000,
                status: "Success",
                hasIcon: true,
                destroyByClick: true,
            });
        } else {
            location.reload();
            toastrRef.current?.add("Couldn't create Alert", "Issue with Alert", {
                position: "topEnd",
                duration: 10_000,
                status: "Danger",
                hasIcon: true,
                destroyByClick: true,
            });
        }
    };

    return (
        <Layout title="Alert Creation">
            <Toastr ref={toastrRef} />
            <h1>Create an Alert</h1>

            <form onSubmit={SubmitForm} id="alertCreate">
                <Input shape="SemiRound" size="Large">
                    <input type="text" placeholder="Name of Alert" name="name" required />
                </Input>

                <DateTimePicker name="datetime" value={startDate} onChange={setStartDate} />
                <TextArea size="Giant" shape="SemiRound" fullWidth>
                    <textarea id="content" placeholder="Alert Content" name="content" required />
                </TextArea>
            </form>

            <Button type="submit" className="mT1" form="alertCreate">
                <EvaIcon name="file-add" /> Submit
            </Button>
        </Layout>
    );
};

export default CreateAlert;

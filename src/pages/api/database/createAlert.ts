import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(JSON.stringify(req.body));

    fetch(
        `https://admin.smokinbsbbqtest.tk/api/createAlert?name=${body.name}&content=${body.content}&expires=${body.expires}`,
    )
        .then((res) => res.json())
        .then((data) => {
            res.json({ success: data.success });
        })
        .catch((e) => {
            console.log(e);
            res.json({ success: false });
        });
}

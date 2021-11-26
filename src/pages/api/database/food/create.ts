import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    fetch(
        `https://admin.smokinbsbbqtest.tk/api/createFood?name=${body.name}&price=${body.price}&category=${
            !(body.category === "" || body.category === "No Category") ? body.category : "No-Category"
        }&description=${body.description}`,
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            return res.json({ success: data.success });
        })
        .catch((e) => {
            console.log(e);
            res.json({ success: false });
        });
}

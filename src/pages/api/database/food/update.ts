import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    fetch(``)
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

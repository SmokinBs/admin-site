import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    await fetch(`https://admin.smokinbsbbqtest.tk/api/d/food/${body.id}`)
        .then((res) => res.json())
        .then((data) => {
            res.json({ success: data.success });
        });
}

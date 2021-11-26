import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    await fetch(`https://admin.smokinbsbbqtest.tk/api/d/food/${body.id}`)
        .then((res) => res.json())
        .then((data) => {
            data.success ? res.json({ success: true }) : res.json({ success: false });
        });
}

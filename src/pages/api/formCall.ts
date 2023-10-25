import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const key = process.env.WEB3_FORM_ACCESS_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const data = req.body;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: key,
      ...data,
    }),
  });
  if (response.ok) {
    return res.status(200).json({ message: "Message sent successfully!" });
  } else {
    return res
      .status(500)
      .json({ message: "Something went wrong! Please try again later." });
  }
}

import { Request, Response, NextFunction } from "express";
import { isHeaderValid } from "ondc-crypto-sdk-nodejs";
import { getPublicKeys } from "../utils/headerUtils";
import { setAckResponse } from "../utils/ackUtils";

export default async function validateSignature(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const header = JSON.stringify(req.headers);
		const body = JSON.stringify(req.body);
		const valid = await isHeaderValid({
			header: header,
			body: body,
			publicKey: await getPublicKeys(header, body),
		});
		if (!valid) {
			res.status(200).send(setAckResponse(false, "Invalid Signature", "10001"));
			return;
		}
		next();
	} catch (error) {
		res.status(200).send(setAckResponse(false, "Invalid Signature", "10001"));
		return;
	}
}

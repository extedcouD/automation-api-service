import axios from "axios";
import logger from "../utils/logger";
import {RedisService} from "ondc-automation-cache-lib";
import {SessionData} from "../types/session-types";
import {loadData} from "../utils/data-utils/cache-utils";


export class DataService {
    saveSessionToDB = (
        subscriberUri: string,
        payload: any,
        response: any,
        code: number,
    ) => {
        const dbUrl = process.env.DATA_BASE_URL;
        loadData(subscriberUri).then((sessionData: SessionData) => {
            const body = {
                "messageId": payload.context.message_id,
                "transactionId": payload.context.transaction_id,
                "action": payload.context.action,
                "bppId": payload.context.bpp_id ?? "",
                "bapId": payload.context.bap_id,
                "jsonObject": response,
                "type": "RESPONSE",
                "httpStatus": code,
                "sessionDetails": {
                    "sessionId": sessionData.active_session_id
                }
            };
            const url = `${dbUrl}/payload`;
            axios
                .post(url, body, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    logger.info("Data saved to DB", res.data);
                })
                .catch((err) => {
                    logger.error("Error in saving data to DB", err.message || err);
                });
        });
    }

    checkSessionExistence = async (subscriberUri: string) => {
        const sessionKeyExists = await RedisService.keyExists(subscriberUri);
        if (!sessionKeyExists) {
            return false;
        }
    };
}

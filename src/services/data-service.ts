import axios from "axios";
import logger from "../utils/logger";
import {RedisService} from "ondc-automation-cache-lib";
import {loadData} from "../utils/data-utils/cache-utils";
import {getAxiosErrorMessage} from "../utils/axiosUtils";


export class DataService {
    saveSessionToDB = async (
        subscriberUri: string,
        payload: any,
        response: any,
        code: number,
    ) => {
        try {
            const dbUrl = process.env.DATA_BASE_URL;
            const sessionData = await loadData(subscriberUri);
            const checkSessionUrl = `${dbUrl}/api/sessions/check/${sessionData.active_session_id}`
            const postUrl = `${dbUrl}/api/sessions`;
            const exists = await axios.get(checkSessionUrl);
            if (!exists.data) {
                logger.info("Session does not exist in DB, creating new session");
                await axios.post(
                    postUrl,
                    {
                        "sessionId": sessionData.active_session_id,
                        "npType": sessionData.type,
                        "npId": sessionData.context_cache.subscriber_id,
                        "domain": sessionData.domain,
                        "version": sessionData.version,
                        "sessionType": "AUTOMATION",
                        "sessionActive": true
                    }
                )
            }
            const responseBody = {
                "messageId": payload.context.message_id,
                "transactionId": payload.context.transaction_id,
                "action": payload.context.action,
                "bppId": payload.context.bpp_id ?? "",
                "bapId": payload.context.bap_id,
                "jsonObject": response,
                "type": "RESPONSE",
                "httpStatus": code,
                "flowId": sessionData.current_flow_id,
                "sessionDetails": {
                    "sessionId": sessionData.active_session_id
                }
            };
            const requestBody = {
                "messageId": payload.context.message_id,
                "transactionId": payload.context.transaction_id,
                "action": payload.context.action,
                "bppId": payload.context.bpp_id ?? "",
                "bapId": payload.context.bap_id,
                "jsonObject": payload,
                "type": "REQUEST",
                "httpStatus": code,
                "flowId": sessionData.current_flow_id,
                "sessionDetails": {
                    "sessionId": sessionData.active_session_id
                }
            }
            await axios.post(postUrl, responseBody);
            await axios.post(postUrl, requestBody);
        } catch (error) {
            console.log(JSON.stringify(error));
            logger.error("Error in saving data to DB ", getAxiosErrorMessage(error));
        }
    }

    checkSessionExistence = async (subscriberUri: string) => {
        return await RedisService.keyExists(subscriberUri);
    };
}


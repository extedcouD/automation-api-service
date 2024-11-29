"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBadRequestNack = exports.setIneternalServerNack = exports.setAckResponse = void 0;
const setAckResponse = (ack = true, error, errorCode) => {
    const resp = {
        message: {
            ack: {
                status: ack ? "ACK" : "NACK",
            },
        },
    };
    if (error && errorCode) {
        resp.error = {
            code: errorCode,
            message: error,
        };
    }
    return resp;
};
exports.setAckResponse = setAckResponse;
exports.setIneternalServerNack = {
    message: {
        status: "NACK",
        error: {
            code: "23001",
            message: "Internal Server Error",
        },
    },
};
exports.setBadRequestNack = {
    message: {
        status: "NACK",
        error: {
            code: "10000",
            message: "Bad Request",
        },
    },
};

type AckResponse = {
	context?: any;
	message: {
		ack: {
			status: "ACK" | "NACK";
		};
	};
	error?: any;
};

export const setAckResponse = (
	ack: boolean = true,
	error?: string,
	errorCode?: string
): AckResponse => {
	const resp: AckResponse = {
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

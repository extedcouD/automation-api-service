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
	context: any = null,
	ack: boolean = true,
	error: any = null
): AckResponse => {
	const resp: AckResponse = {
		context: context,
		message: {
			ack: {
				status: ack ? "ACK" : "NACK",
			},
		},
	};

	if (error) {
		resp.error = error;
	}

	return resp;
};

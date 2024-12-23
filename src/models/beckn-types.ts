export type BecknContext = {
	action: string; // ! extepected action
	bap_id: string;
	bap_uri: string;
	bpp_id?: string;
	bpp_uri?: string;
	domain: string;
	location: {
		city: {
			code: string;
		};
		country: {
			code: string;
		};
	};
	message_id: string; // ! should be unique
	timestamp: string; // ISO 8601 format
	transaction_id: string;
	ttl: string; // Duration in ISO 8601 format (e.g., PT30S)
	version: string;
};

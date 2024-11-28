import axios from "axios";

export class CommunicationService {
	async forwardApiToNp(
		body: any,
		headers: any,
		npUrl: string,
		action: string
	): Promise<any> {
		try {
			const response = await axios.post(`${npUrl}/${action}`, body, {
				headers,
			});
			return response.data;
		} catch (error) {
			throw new Error("Failed to forward request to external server");
		}
	}
	async forwardApiToMock(body: any, action: string) {
		const url = process.env.MOCK_SERVER_URL;
		const response = await axios.post(`${url}/${action}`, body);
		return response.data;
	}
}

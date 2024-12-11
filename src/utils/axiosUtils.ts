export function getAxiosErrorMessage(error: any) {
    if (error.response) {
        // Server responded with a status code outside the 2xx range
        return error.response.data?.message || error.response.statusText || 'Unknown error from server';
    } else if (error.request) {
        // No response was received
        return 'No response received from server';
    } else {
        // Error occurred while setting up the request
        return error.message || 'An unknown error occurred';
    }
}
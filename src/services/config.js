const devBaseURL = "your development baseURL";
const proBaseURL = "your production baseURL";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;

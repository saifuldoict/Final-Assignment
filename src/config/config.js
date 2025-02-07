export const PORT = 5090;
export const DATABASE = "mongodb+srv://saifulnhk:qjNJl1cTgi02MiiT@cluster0.ul34j.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";
export const JWT_SECRET = "ABC12341241234";
export const JWT_EXPIRATION_DURATION = 60 * 60 * 24 * 7 * 1000;

export const Cookie_ExpiresIn = 60 * 60 * 24 * 7 * 1000;
export const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};


export const WEB_CACHE = false;

export const MAX_JSON_SIZE = "10MB";
export const URL_ENCODE = true;

export const REQUEST_TIME = 20 * 60 * 1000;
export const REQUEST_NUMBER = 2000;

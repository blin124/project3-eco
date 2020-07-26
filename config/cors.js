const whitelist = [
    // config.appUrl,
    "*",
    "http://localhost:3000",
    "http://localhost:5001",
    "localhost:3000",
    "localhost:5001",
    undefined,
];

module.exports =  {
    origin: function (origin, callback) {
        console.log({origin});
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
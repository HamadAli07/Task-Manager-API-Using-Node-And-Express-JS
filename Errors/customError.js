class customAPIErrors extends Error {
    constructor(message, statusCode) {
        super(message) 
        this.statusCode = statusCode;
    }
}

const customError = (msg,statusCode) => {
    return new customAPIErrors(msg,statusCode);
}

module.exports = {customAPIErrors, customError};
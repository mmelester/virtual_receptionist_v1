
const validateAdmin = (username, password) => {
    const adminUsername = process.env.ADMINUSERNAME;
    const adminPassword = process.env.ADMINPASSWORD;

    return username === adminUsername && password === adminPassword;
};

module.exports = {
    validateAdmin
};

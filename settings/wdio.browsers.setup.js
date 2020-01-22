module.exports = {
    baseURL: 'https://selenium-release.storage.googleapis.com',
    version: '3.4.0',
    drivers: {
        chrome: {
            version: '2.42',//'2.42',
            arch: process.arch,
            // - Recent versions of the driver: https://sites.google.com/a/chromium.org/chromedriver/
            baseURL: 'https://chromedriver.storage.googleapis.com'
        }  
    }   
};

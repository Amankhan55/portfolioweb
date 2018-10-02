const fs = require('fs');
var importedCredentials = require('../mock-data/credential');
var credentials = JSON.parse(importedCredentials.credentials);

class CredentialService {
    addCredential(data) {
        credentials.push(data);
        return credentials;
    };

    findUserByCred(credData) {
        var checkResult = {"checkFlag": false};
        credentials.forEach(element => {
            if(element.email === credData.email && element.password === credData.password){
                checkResult = {
                    "checkFlag": true,
                    "firstname": element.firstname,
                    "lastname": element.lastname,
                    "email": element.email,
                    "mb_no": element.ph_no,
                    "address": element.address,
                    "city": element.city,
                    "country": element.country
                }
            }
        });
        return checkResult;
    };

    writeLoaclCredFile(credentials) {
        const streamFilePathCred = '../server/mock-data/pwdData.json';
        const writeStreamCred = fs.createWriteStream(streamFilePathCred);
        const streamDataCred = JSON.stringify(credentials);
        writeStreamCred.write(streamDataCred, 'UTF8');
        writeStreamCred.end();
    };
}

module.exports = CredentialService;
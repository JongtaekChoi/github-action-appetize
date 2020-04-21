const core = require('@actions/core');
import fetch from 'node-fetch';

try {
    const token = core.getInput('APPETIZE_TOKEN');
    const publickKey = core.getInput('PUBLICKEY');
    const fileUrl = core.getInput('FILE_URL');
    const platform = core.getInput('PLATFORM');
    fetch(
        `https://api.appetize.io/v1/apps/${publickKey}`,
        {
            method: 'POST',
            headers: {
                'Conetent-Type': 'application/json',
                Accept: 'application/json, text/plain, */*',
                Authorization: 'Basic ' + Buffer.from(`${token}:`).toString('base64')
            },
            body: JSON.stringify({
                url: fileUrl,
                platform: platform
            })
        }).then(response => {
            if (response.status == 200) {
                console.log('Success')
            } else {
                throw new Error(`RequestError (${response.status}) : ${response.statusText}`);
            }
        }).catch(error => {
            core.setFailed(error.message);
        });
} catch (error) {
    core.setFailed(error.message);
}
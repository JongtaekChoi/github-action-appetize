const core = require('@actions/core');
import fetch from 'node-fetch';

try {
    const token = core.getInput('APPETIZE_TOKEN');
    const publickKey = core.getInput('PUBLICKEY');
    const fileUrl = core.getInput('FILE_URL');
    const platform = core.getInput('PLATFORM');
    const fetchOptions = {
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
    };
    fetch(`https://api.appetize.io/v1/apps/${publickKey}`, fetchOptions)
        .then(response => {
            if (response.status == 200) {
                console.log('Success')
            } else {
                throw new Error(`RequestError (${response.status}) : ${response.statusText}`);
            }
        }).catch(error => {
            const message = `
${error.message}
${JSON.stringify(fetchOptions.headers)}
${fetchOptions.body}
`
            core.setFailed(message);
        });
} catch (error) {
    core.setFailed(error.message);
}
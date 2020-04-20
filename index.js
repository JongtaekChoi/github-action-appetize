const core = require('@actions/core');
import fetch from 'node-fetch';

try {
    const token = core.getInput('APPETIZE_TOKEN');
    const publickKey = core.getInput('PUBLICKEY');
    const fileUrl = core.getInput('FILE_URL');
    const platform = core.getInput('PLATFORM');
    fetch(
        `https://${token}@api.appetize.io/v1/apps/${publickKey}`,
        {
            method: 'POST',
            headers: {
                contentType: 'application/json',
                Accept: 'application/json, text/plain, */*',
            },
            body: JSON.stringify({
                url: fileUrl,
                platform: platform
            })
        }).then(response => {
            // core.setOutput("time", time);
        }).catch(error => {
            core.setFailed(error.message);
        });
} catch (error) {
    core.setFailed(error.message);
}
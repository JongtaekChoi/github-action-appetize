import core from '@actions/core';

try {
    const token = core.getInput('APPETIZE_TOKEN');
    const publickKey = core.getInput('PUBLICKEY');
    const fileUrl = core.getInput('FILE_URL');
    const platform = core.getInput('PLATFORM');
    fetch({
        method: 'POST',
        url: `https://${token}@api.appetize.io/v1/apps/${publickKey}`,
        headers: {
            contentType: 'application/json',
            Accept: 'application/json, text/plain, */*',
        },
        body: JSON.stringify({
            url: fileUrl,
            platform: platform
        })
    }).catch(error => {
        core.setFailed(error.message);
    });
} catch (error) {
    core.setFailed(error.message);
}
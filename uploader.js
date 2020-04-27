const core = require('@actions/core');
import fetch from 'node-fetch';

const baseUrl = 'https://api.appetize.io/v1/apps'

exports.uploadToAppetize = (input) => {
  const { token, publicKey, fileUrl, platform } = input;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      Authorization: 'Basic ' + Buffer.from(`${token}:`).toString('base64')
    },
    body: JSON.stringify({
      url: fileUrl,
      platform: platform
    })
  };
  const postfix = (publicKey && publicKey.length > 0) ? `/${publicKey}` : ``;
  const url = `${baseUrl}${postfix}`;
  fetch(url, fetchOptions)
    .then(response => {
      if (response.status == 200) {
        console.log('Success')
        response.text()
          .then(jsonResult => JSON.parse(jsonResult))
          .then(result => core.setOutput('appetize_public_key', result.publicKey))
          .catch(error => {
            console.error('response parsing error: ' + error.message);
          });
      } else {
        response.text().then(text => console.error({ 'error': text }));
        throw new Error(`RequestError (${response.status}) : ${response.statusText}`);
      }
    }).catch(error => {
      const message = `
${error.message}
${JSON.stringify(fetchOptions.headers)}
${fetchOptions.body}
`
      console.error(message);
      core.setFailed(message);
    });
};

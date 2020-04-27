const core = require('@actions/core');
const uploader = require('./uploader');

if (!global.__TEST__) {
  try {
    const token = core.getInput('APPETIZE_TOKEN');
    const publickKey = core.getInput('PUBLICKEY');
    const fileUrl = core.getInput('FILE_URL');
    const platform = core.getInput('PLATFORM');
    uploader.uploadToAppetize({ token, publickKey, fileUrl, platform });
  } catch (error) {
    core.setFailed(error.message);
  }
}


const core = require('@actions/core');
import uploadToAppetize from './uploader';

if (!global.__TEST__) {
  try {
    const token = core.getInput('APPETIZE_TOKEN');
    const publickKey = core.getInput('PUBLICKEY');
    const fileUrl = core.getInput('FILE_URL');
    const platform = core.getInput('PLATFORM');
    uploadToAppetize({ token, publickKey, fileUrl, platform });
  } catch (error) {
    core.setFailed(error.message);
  }
}

export { uploadToAppetize };

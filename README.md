# Upload app to Appetize action

This action upload built app to Appetize.io.

## Inputs

### `APPETIZE_TOKEN`

**Required** Appetize api token.
### `PUBLICKEY`
**Required** App public key. You can get this value at response of upload first file.
### `FILE_URL`
**Required** Url of the built app.
### `PLATFORM`
**Required** Platform of the app (ios or android).

## Example usage
```
uses: JongtaekChoi/github-action-appetize@master
with:
    APPETIZE_TOKEN: "appetize_api_token"
    PUBLICKEY: "public_key"
    FILE_URL: https://s3.amazonaws.com/mybucket/app.apk
    PLATFORM: "android"
```
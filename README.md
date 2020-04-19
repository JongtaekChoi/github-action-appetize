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
For security, It is strongly recommended to use secrets for Appetize api token.
```
uses: JongtaekChoi/github-action-appetize@master
with:
    APPETIZE_TOKEN: ${{ secrets.APPETIZE_TOKEN }} 
    PUBLICKEY: "public_key"
    FILE_URL: https://s3.amazonaws.com/mybucket/app.apk
    PLATFORM: "android"
```
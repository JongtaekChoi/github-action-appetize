# Upload app to Appetize action

This action upload an built app to Appetize.io. 

## Inputs

### `APPETIZE_TOKEN`

**Required** Appetize api token.
### `PUBLICKEY`
**Optional** App public key. If it's empty, a new app will be created.
### `FILE_URL`
**Required** Url of the built app.
### `PLATFORM`
**Required** Platform of the app (ios or android).

## Example usage
For security, It is strongly recommended to use secrets for Appetize api token.
```
uses: JongtaekChoi/github-action-appetize@master
id: apppetize_upload
with:
    APPETIZE_TOKEN: ${{ secrets.APPETIZE_TOKEN }} 
    PUBLICKEY: "public_key"
    FILE_URL: https://s3.amazonaws.com/mybucket/app.apk
    PLATFORM: "android"
```
## Output
### `appetize_public_key`
If the request success, the public key of the uploaded app will be set to the value of the key `appetize_public_key` of the steps output.


# Upload app to Appetize action

This action upload an built app to Appetize.io. 

## Inputs

| key           | description                | required |
| ------------- | -------------------------- | -----    |
| APPETIZE_TOKEN| Appetize api token.        | o        |
| PUBLICKEY | App public key. If it's empty, a new app will be created. | x |
| FILE_URL | Url of the built app.           | o |
| APPETIZE_TOKEN| Platform of the app (ios or android). | o |


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


| key           | description                | 
| ------------- | -------------------------- | 
| appetize_public_key| The public key of the uploaded app.    |





## Spotify Currently Playing Song

This is small demo that uses the Spotify API to display the song you are currently listening to.

You can see a live example in [here](https://spotify.kevinzunigacuellar.com)

### Getting Started with Spotify Developer API

1. Get your Spotify credentials (Client ID and Secret). 

Create an account in [Spotify Developers](https://developer.spotify.com/dashboard/applications) and create a new application. Click the **edit settings** button and set your redirect URI to `http://localhost:3000`.

2. Authorize your app

The following link sets the authorization scopes to `user-read-currently-playing`, redirect uri to `http://localhost:3000` and client_id to `<your_client_id>`. Do not forget to replace `<your_client_id>` with your own. Copy and paste this link into your browser.

```
https://accounts.spotify.com/authorize?client_id=<your_client_id>&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing
```

After authorizing, this will return a URL with the following form:

```
http://localhost:3000/callback?code=<code>
```
Save this code string, we will use this to request a `refresh_token`

3. Get your refresh token.

To get a refresh token just copy the following command and paste it into a new terminal window. Replace the client ID, client secret and code with your own. To base64 encode you can use [base64econde.org](https://www.base64encode.org/).

```shell
curl -H "Authorization: Basic <base64 encoded client_id:client_secret>"
-d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

### Getting started

Fork this repo and add a .env.local file with the following content:

```
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

Run the following command to start the development server.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

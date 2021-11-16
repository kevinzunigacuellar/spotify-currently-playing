

## Spotify Currently Playing Song

This is small demo that uses the Spotify API to search for the song you are currently listening to.

You can see a live example in [here](https://spotify-currently-playing-blue.vercel.app/)

## Getting Started with Spotify Developer API

The first step is to get your Spotify credentials. You can do this by creating an account in [Spotify Developers](https://developer.spotify.com/dashboard/applications) and creating a new application.

Once you create an application it will give you a client ID and a client secret. You will use these to authorize your app and get your refresh token.

To authorize your app and get the current song playing in your Spotify account paste the following link into your browser. Don't forget to add the client ID to the url.

```
https://accounts.spotify.com/authorize?client_id=<your_client_id>&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing
```

This will return a url with code as a query parameter. We will use this code to get a refresh token.

```
http://localhost:3000/callback?code=<code>
```

To get a refresh token just copy the following command and paste it into a new terminal window. Don't forget to replace the client ID, client secret and code with your own. To base64 encode you can use [base64econde.org](https://www.base64encode.org/).

```
curl -H "Authorization: Basic <base64 encoded client_id:client_secret>"
-d grant_type=authorization_code -d code=<code> -d redirect_uri=http%3A
%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

## Getting started

Fork this repo and add a .env.local file with the following content:

```bash
SPOTIFY_CLIENT_ID=<your_client_id>
SPOTIFY_CLIENT_SECRET=<your_client_secret>
SPOTIFY_REFRESH_TOKEN=<your_refresh_token>
```

Run the following command to start the development server.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# CHMM API Week project - Weather Tunes

- pages address: https://fac-15.github.io/weatherTunes/.

## Proposed APIs:

### Spotify
 - [Getting a track by Spotify ID](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/)
 - [Searching for a track](https://developer.spotify.com/documentation/web-api/reference/search/search/)

### Examples of API calls on Open Weather Map:

```
api.openweathermap.org/data/2.5/weather?q=London
```

- [London](api.openweathermap.org/data/2.5/weather?q=London)


```
api.openweathermap.org/data/2.5/weather?q=London,uk
```
- [London, UK](api.openweathermap.org/data/2.5/weather?q=London,uk)


### Dev Dependencies to install (and other bits to do that are .gitignored):
- Create tests folder (using jest to test - please don't judge)
- Create API keys folder (if API keys are required)
- Install jest with the following:  
    ```npm install --save-dev jest```


### Autocomplete with API example (Wes Bos JS 30)
 - Useful for eliminating user error (i.e. missplelling of location) in text input.
 - [Video Tutorial](https://www.youtube.com/watch?v=y4gZMJKAeWs)
 - [Github](https://github.com/wesbos/JavaScript30/tree/master/06%20-%20Type%20Ahead)

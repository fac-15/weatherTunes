# CHMM API Week project - Weather Tunes


**:mag: If you're reviewing our project, please:**
1. clone the repo 
2. run `npm i`
3. send us a Gitter message :) @zurda @onwordi @HStewart23 @mr-bagglesworth

- github pages address: https://fac-15.github.io/weatherTunes/.

**Dev Dependencies to install (and other bits to do that are .gitignored):**
- Create tests folder (using jest to test - please don't judge)
- Create API keys folder (if API keys are required)
- Install jest with the following:  
    ```npm install --save-dev jest```



## :ring: Proposed APIs:

### Spotify
 - [Getting a track by Spotify ID](https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/)
 - [Searching for a track](https://developer.spotify.com/documentation/web-api/reference/search/search/)
 - **found out this required oAuth authentication with curl or whatever, seemed like a faff, so went with YoutTube**

### Open Weather Map:

```
api.openweathermap.org/data/2.5/weather?q=London
```
[London](api.openweathermap.org/data/2.5/weather?q=London)

```
api.openweathermap.org/data/2.5/weather?q=London,uk
```
[London, UK](api.openweathermap.org/data/2.5/weather?q=London,uk)


### User Stories
- User views app
- User types in city
- User presses enter
- User is given predicted weather
- User can hear a song that is linked to the weather

### :goal: Goals
- Get the weather of any city.
- Handle cases where the location isn’t recognised.
- Print the weather back to the html.
- Manipulate the weather into usable text/phrase.
- Sent the weather phrase to music api.
- Song as a response from the music api to the html.
- Display/ play song.

### :left_right_arrow: Stretch Goals
- Ability to play/pause youtube video (music source)
- Autocomplete in the form field as you type
    - Would help to eliminate user error (i.e. misspelling of location) in text input
    - example from **Wes Bos** tutorials (using fetch API), as follows:
    - [Video Tutorial](https://www.youtube.com/watch?v=y4gZMJKAeWs)
    - [Github](https://github.com/wesbos/JavaScript30/tree/master/06%20-%20Type%20Ahead)


### Things learned / compromises etc
- We need better handling of errors, e.g.
    - same named cities (e.g. London U.K. and London, Canada)
    - misspelling of cities could be handled by an autocomplete (see above)
    - this is probably going to be difficult
- YouTube isn't the best way to get good music, but we couldn't use Spotify!
    - had some disappointing results. I want purple rain dammit! :purple_heart:
- Objects act weird (and return `undefined`) if their keys start with a number.
    - this was discovered when mapping icons supplied from [Open Weather API](https://openweathermap.org/weather-conditions) (a bit :shit:) to [Erik Flowers Weather Icons](https://erikflowers.github.io/weather-icons/)
    - used a string from API call, which began with a number, (e.g. `50d`) to select a key in an object, which would supply the icon class from [Weather Icons](https://erikflowers.github.io/weather-icons/)
    - issue fixed by modifying strings such as `50d` to become `a50`, and `01` to become `a01`, which worked as predicted.
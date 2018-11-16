# :sunny: CHMM API Week project - Weather Tunes

If you're reviewing our project, please:
1. clone the repo 
2. run `npm i`
3. send us a Gitter message :) @zurda @onwordi @HStewart23 @mr-bagglesworth

- pages address: https://fac-15.github.io/weatherTunes/.

## Proposed APIs:


### Open Weather Map:

```
api.openweathermap.org/data/2.5/weather?q=London
```

- [London](api.openweathermap.org/data/2.5/weather?q=London)


```
api.openweathermap.org/data/2.5/weather?q=London,uk
```
- [London, UK](api.openweathermap.org/data/2.5/weather?q=London,uk)


### Youtube
- https://developers.google.com/youtube/
- Although we did manage it eventually we found this api less simple to understand how to use. This was partly because the call we are making to it is more complex but also because we found the documentaiton more obtuse.


### Dev Dependencies to install (and other bits to do that are .gitignored):
- Create tests folder (using jest to test - please don't judge)
- Create API keys folder (if API keys are required)
- Install jest with the following:  
    ```npm install --save-dev jest```


### User Stories
- User views app
- User types in city
- User presses enter
- User is given predicted weather
- User can hear a song that is linked to the weather


### Goals
- Get the weather of any city.
- Handel cases where the location isn’t recognised.
- Print the weather back to the html.
- Manipulate the weather into usable text/phrase.
- Sent the weather phrase to music api.
- Song as a response from the music api to the html.
- Display/ play song.

### Stretch Goals
- Ability to play/pause youtube video (music source).
- Auto complete of city name. 

### What we learned


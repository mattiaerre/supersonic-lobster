# falcor-routes

You can play with the endpoints and queries listed below using [falcor-postman](https://github.com/opentable/falcor-postman) at the following url:

[https://supersonic-lobster.herokuapp.com/falcor-postman/](https://supersonic-lobster.herokuapp.com/falcor-postman/)

## apod

### Query

```json
[["apod",["copyright","date","explanation","hdurl","media_type","title","url"]]]
```

### Response

```json
{
  "apod": {
    "copyright": "",
    "date": "2017-02-27",
    "explanation": "An odd thing about the group of lights near the center is that four of them are the same distant quasar.  This is because the foreground galaxy -- in the center of the quasar images and the featured image -- is acting like a choppy gravitational lens. A perhaps even odder thing is that by watching these background quasars flicker, you can estimate the expansion rate of the universe.  That is because the flicker timing increases as the expansion rate increases.  But to some astronomers, the oddest thing of all is that these multiply imaged quasars indicate a universe that is expanding a bit faster than has been estimated by different methods that apply to the early universe. And that is because ... well, no one is sure why.  Reasons might include an unexpected distribution of dark matter, some unexpected effect of gravity, or something completely different.  Perhaps future observations and analyses of this and similarly lensed quasar images will remove these oddities.",
    "hdurl": "//apod.nasa.gov/apod/image/1702/QuadQuasarLens_Hubble_2020.jpg",
    "media_type": "image",
    "title": "Four Quasar Images Surround a Galaxy Lens",
    "url": "//apod.nasa.gov/apod/image/1702/QuadQuasarLens_Hubble_960.jpg"
  }
}
```
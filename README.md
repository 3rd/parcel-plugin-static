# parcel-plugin-static

Parcel plugin for copying everything from a configurable source directory to the a configurable directory inside the bundle.

Made this because I needed it.

Default source: 'static' - will be the "static" folder in the root of your project

Default destination: 'static' - will be "dist/static" for most people, leave it empty if you want to copy the files _directly_ into the dist directory.

#### Install

`npm i -D parcel-plugin-static`

#### Configuration

Inside your main package.json add this:

```json
"parcel-plugin-static": {
  "source": "static",
  "destination": "static"
}
```

Remember that **source** is relative to the root of your project and **destination** is relative to the dist folder.

![Test](https://github.com/jeremyhalin/noir/workflows/Test/badge.svg)

# Noir

A minimal responsive dark theme for [Ghost](https://ghost.org/).

## Screenshots

![Screenshot of Noir theme](https://raw.githubusercontent.com/jeremyhalin/noir/master/assets/screenshot-desktop.jpg)

## Features

-   dark theme (always enabled)
-   custom styles for tags : HTML, CSS, NodeJS, PHP, React...
-   code highlight

## Localization

-   English
-   French

## TODO

-   [x] set dark theme
-   [x] make it minimal
-   [x] add demo url to `package.json`
-   [x] highlight code
-   [x] custom link style
-   [x] remove jQuery dependency
-   [x] display tags on post card
-   [x] change mobile menu
-   [x] add license
-   [ ] add badges to README file
-   [x] add screenshots
-   [ ] try [publishing](https://ghost.org/marketplace/submit/) theme
-   [x] create custom styling and layouts for posts which are marked as "featured"
-   [ ] improve accessibility (aria labels, roles...)
-   [ ] support "Subscribe" Ghost's feature
-   [ ] add mobile screenshot
-   [ ] [validate](https://validator.w3.org) HTML on all pages

## Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/noir.zip`, which you can then upload to your site.

```bash
yarn zip
```

## PostCSS Features Used

-   Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
-   Variables - Simple pure CSS variables
-   [Color Function](https://github.com/postcss/postcss-color-function)

## Copyright & License

Copyright (c) 2020 Jérémy Halin - Released under the [MIT license](LICENSE).

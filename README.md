# Multilanguage MDX JAMStack

_Based on https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote_

Starter for CMS-less sites MDX powered content.

## Key Features

* simple url composition and duplicities control (via filesystem limitations)
* content versioning (via Git)
* multilanguage support (suitable for multiple single language builds strategy _(samepage.com, samepage.cz, samepage.de, etc...)_)
* designed for `next export`
* flat component structure, styled components, CSS custom properties

## Dev setup

Prerequisites: `yarn 1+`, `node 12+`

1) `git clone` _(cloning creates a project folder in cwd)_
2) Run `yarn`
3) Run `yarn dev`
4) Happy developing

## How to use

### Adding new page

Simply add new .mdx file into `content/{{locale}}/` folder. _(or copy similar existing page to speed you up)_

### Adding new content component

1) Create new component in `components/` folder
2) Register dynamic import of your component into the `Page` component
3) Use whenever you want

### Edit menu (or any language dependent static text)

Edit `locales/{{locale}}.js` file

### Add new language

1) mkdir `contents/{{newLanguage}}/` _(content structure is totally independent on other languages)_
2) create locales file `locales/{{newLanguage}}.js` _(copy existing saves time)_
3) Now you can use `{{newLanguage}}` in `.env` to build new language website

## Publish

1) set proper .env locale for desired build
2) `yarn export`
3) Copy contents of `/out/` folder to desired CDN location or litterally everywhere acccesible via Internet (potato powered raspberry pi should be fine too)
4) Profit!

## Known issues/TODO

* sustainable demo

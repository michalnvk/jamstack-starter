# Multilanguage MDX JAMStack

* Based on [https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote](with-mdx-remote example)*

Starter for CMS-less sites MDX powered content.

## Key Features

* simple url composition and duplicities control (via filesystem limitations)
* content versioning (via Git)
* multilanguage support (suitable for multiple single language builds strategy _(samepage.com, samepage.cz, samepage.de, etc...)_)

## Dev setup

Prerequisites: `yarn 1+`, `node 12+`

1) `git clone` _(cloning creates a project folder in cwd)_
2) Run `yarn`
3) Run `yarn dev`
4) Happy developing

## Publish

1) `yarn export`
2) Copy contents of `/out/` folder to desired CDN location or litterally everywhere acccesible via Internet (potato powered raspberry pi should be fine too)
3) Profit!

## Known issues/TODO

* i18n own minimalistic solution
* styled components
* sustainable demo

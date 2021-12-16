# Multilanguage MDX JAMStack

_Based on https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote_

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

## Content editing notes

* For adding a new page simply create new .mdx file in `contents/{{lng}}/` folder
* Menu is structure independent, defined in i18n

## Publish

1) set proper .env locale for desired build
2) `yarn export`
3) Copy contents of `/out/` folder to desired CDN location or litterally everywhere acccesible via Internet (potato powered raspberry pi should be fine too)
4) Profit!

## Known issues/TODO

* i18n own minimalistic solution
* styled components
* sustainable demo

# react-avatar

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]


# Avatar

It can display image or abbreviation with background. Can be round.

## Usage

```javascript

import Avatar, { SIZES, COLORS } from  "@crpt/react-avatar";


<Avatar abbr="LG" size={SIZES.large} color={COLORS.dark} />

```

| PropName | Description | Example |
|---|---|---|
| abbr: String | Abbreviation to display. Showed only when no src passed. |  `<Avatar abbr="LG" />` |
| size: String | Size type, one of keys of SIZES object. |  `<Avatar size={SIZES.small}  />` |
| color: String | Color type, one of keys of COLORS object. |  `<Avatar color={COLORS.light}  />` |
| src: String | Image path. |  `<Avatar src="/images/no-ava.png" />` |
| round: Boolean | If true, avatar have border radius = 50%. |  `<Avatar round abbr="WL" />` |


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

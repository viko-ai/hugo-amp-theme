# Bulma based Hugo theme

The theme used for the Viko Ai website. See [www.viko.ai][1] for a real world example. We decided to make this
theme available to the wider community. We hope it will be of use. This repo also contains a sample Hugo site 
illustrating how the theme can best be used. The theme itself can be found in the [themes/viko](themes/viko) directory.

## Features

* Responsive, [Bulma][2] based layout
* Tiny CSS footprint ~ 6kb (minified and compressed)
* Includes standard and [AMP][4] pages
* AWS Amplify and Netlify support
* ld+json Microdata for [Google AMP search][5]
* SEO
* Fast

## Getting started

Please see [DOCS.md](DOCS.md)

## Bulma

This theme is based on the excellent [Bulma framework][2]. We chose Bulma as it's simple, yet powerful. Bulma does not
require Javascript to function and is well documented.

## Tiny CSS footprint

During a production build the SCSS is transformed to CSS then unused classes are purged using [PurgeCSS][3]. 
The final CSS comes in around 6kb minified and compressed.

## AMP support

New and Blog style pages automatically generate an [AMP][4] version with the appropriate link tags. 

These pages also include the ld+json microdata to feature in [Google's rich results][5]

## SEO

Forget the crazy hacks or spammy stuff. Modern SEO basically boils down to:

* Content content content!
* Valid, well structured HTML
* Mobile friendly
* Fast
* Secure

We've done our best to achieve these goals.

## Fast

Slim JS and CSS along with best practices (e.g. preloading) results in a Pagespeed score of 100. 

![Optimised for speed](https://viko-assets.s3.eu-west-2.amazonaws.com/google-pagespeed-report.png)

**Note**: This score is based on the [www.viko.ai][1] homepage

[1]: https://www.viko.ai
[2]: https://bulma.io
[3]: https://purgecss.com
[4]: https://amp.dev
[5]: https://developers.google.com/search/docs/guides/about-amp
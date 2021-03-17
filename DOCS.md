# Getting started

## Contents

* [Requirements](#requirements)
* [Config](#config)
* [Adding a blog post](#adding-a-blog-post)
* [Adding a news article](#adding-a-news-article)
* [Use of images](#use-of-images)
* [Modifying specific pages](#modifying-specific-pages)
    * Home
    * Careers
    * Features
    * Benefits
    * Terms & Privacy
* [Deployment](#deployment)

## Requirements

This theme requires the extended Hugo version 0.80.0 or later.

**Note**: Please use the extended version of Hugo for the SASS and PostCSS support

## Config

1. Check out the source code: `git clone git@github.com:viko-ai/hugo-theme.git`
2. Modify `config.toml` to suit your needs
3. Run in dev mode: `hugo -D server`

## Adding a blog post

Create a new post using `hugo new blog/xxx` where `xxx` is your chosen slug.

**Important**: don't use a file extension e.g. `hugo new blog/xxx.md`. This theme makes use of
Hugo [page resources][1]. `hugo new blog/xxx` will use the archetype found at `archetypes/blog` and create the
appropriate directory structure.

You can edit the new blog post by modifying `content/blog/xxx/index.md`.

### Schema.org markup

The generated page will contain ld+json markup for an article of type [BlogPosting][2]

### AMP support

Creating a new blog entry will automatically create AMP enabled versions which can be found at
`/amp/blog/xxx` where `xxx` is your chosen slug.

## Adding a news article

Create a news article using `hugo new press/xxx` where `xxx` is your chosen slug.

**Important**: As with blog posts, don't use a file extension e.g. `hugo new press/xxx.md`. This theme makes use of
Hugo [page resources][1]. `hugo new press/xxx` will use the archetype found at `archetypes/press` and create the
appropriate directory structure.

You can edit the new blog post by modifying `content/press/xxx/index.md`.

### Schema.org markup

The generated page will contain ld+json markup for an article of type [NewsArticle][3]

### AMP support

Creating a new press entry will automatically create AMP enabled versions which can be found at `/amp/press/xxx`
where `xxx` is your chosen slug.

## Images

The list, single and single AMP templates assume various sizes of images are present under the
`content/blog/xxx/images/primary` or `content/press/xxx/images/primary` directories. Specifically:

* 1x1.png
* 4x3.png
* 16x9.png
* 16x9.svg

You should replace these images but ensure the appropriate aspect ratios are preserved. These images are also
referenced in the generated ld+json microdata which is needed for AMP rich results.

## Modifying individual pages

### Home page

The contents of the home page can be changed simply by editing the settings in config.toml. See the `[params.home]`
section. The home page image can be replaced at `static/images/home.png`. The logo can be replaced at
`static/images/logo.png`

The home page is based on the template at `themes/viko/layouts/index.html`

### Careers

The careers page (`/careers/`) can be changed by modifying the contents of `contents/careers.md`. As you can
see it makes use of two custom shortcodes: `careers/benefits` and `careers/benefit`.

The careers page is based on the template at `themes/viko/layouts/_default/careers.html`

### Features

The careers page (`/features/`) can be changed by modifying the contents of `contents/features/_index.md`. As you can
see it makes use of three custom shortcodes: `features/intro`, `features/row` and `features/feature`.

The features page is based on the template at `themes/viko/layouts/_default/features.html`

### Benefits

The careers page (`/benefits/`) can be changed by modifying the contents of `contents/benefits.md`. It also makes use
of three custom shortcodes: `features/intro`, `features/row` and `features/feature`.

The benefits is based on the template at `themes/viko/layouts/_default/features.html`

### Contact

The contents of the contact us page (`/contact/`) can be changed simply by editing the settings in config.toml.
The image can be replaced at `static/images/contact.png`. The logo can be replaced at

The contact us page is based on the template at `themes/viko/layouts/_default/contact.html`

### Terms and privacy

These are both standard markdown powered pages and can be changed by editing `content/terms.md` and
`content/privacy.md`. They are based on the default single template at `themes/viko/layouts/_default/single.html`

## Deployment

There's nothing special about this theme or sample site so the usual Hugo deployment steps apply. However, it's
important to use the latest extended version of Hugo due to the need for SASS and PostCSS. To help with this we've
added some files to support [AWS Amplify][4] and [Netlify][5].

## AWS Amplify

We've included sample [amplify.yml](amplify.yml) and [customHttp.yml](customHttp.yml) files for AWS amplify deployment.

## Netflify

We've also included a sample [netlify.toml](netlify.toml) file.

## Using the theme with an existing site

If you have already developed an existing site you can use the viko theme by copying themes/viko into your
own themes/ directory. Enable the theme in your config.toml / config.yml with `theme = "viko"`

[1]: https://gohugo.io/content-management/page-resources/
[2]: https://schema.org/BlogPosting
[3]: https://schema.org/NewsArticle
[4]: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
[5]: https://docs.netlify.com/configure-builds/file-based-configuration/
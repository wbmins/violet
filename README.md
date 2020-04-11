# Getting Started

Clone this repository to your hugo theme directory.

```bash
cd themes
git clone https://github.com/liuzc/LeaveIt.git
```

Next, open config.toml in the base of the Hugo site and ensure the theme option is set to mainroad:

```bash
theme = "LeaveIt"
```

For more information read the [official setup guide](https://gohugo.io/documentation/) of Hugo.

# Site Configuration

Take a look in the `exampleSite` folder.

This directory contains an example config file and the content for the demo. It serves as an example setup for your documentation.

Copy the `config.toml` in the root directory of your website. Overwrite the existing config file if necessary.

# Content Suggestions

A few suggestions to help you get a good looking site quickly:

* Keep blog posts in the content/posts directory, for example: content/posts/my-first-post.md
* Keep static pages in the content directory, for example: content/about.md
* Keep media like images in the static directory, for example: static/images/2016/10/screenshot.png

# Customizing styles for your website

If you want to change some styling to fit your own website needs, you can edit them:

* `assets/css/_varibales/default.scss`:  You can override the variables in `_variables.scss` to customize the style
* `assets/css/_custom.scss` :  You can put your custom css in this file

# Favicons, Browserconfig, Manifest

It is recommended to put your own favicons

* apple-touch-icon.png (180x180)
* favicon-32x32.png (32x32)
* favicon-16x16.png (16x16)
* mstile-150x150.png (150x150)
* android-chrome-192x192.png (192x192)
* android-chrome-512x512.png (512x512)

into `/static`. They’re easily created via <https://realfavicongenerator.net/.>

Customize browserconfig.xml and site.webmanifest to set theme-color and background-color for example.

# Tips

#### Set production environment when generating site

Because some functions are only in production mode, So you **need to add a production** environment variables when generating your site.

```bash
HUGO_ENV=production hugo --gc --minify
```

#### Hugo “extended” Sass/SCSS version required

This theme write style with scss, So you must download and install the “extended” Sass/SCSS version

#### How to toggle dark-light mode

* You can click the love heart ❤️ in front of your blog title to toggle dark-light mode. I don't think it's a good interaction design. But I don't have a good idea.
* If you want to make your own theme toggle-able element, you can create an element with a class `.theme-switch`. See [here](https://github.com/liuzc/LeaveIt/blob/4e8672ebbc636ba1d0e96573d25739a5295d879b/assets/js/main.js#L32)

# Home Post model

If you want to show posts on index instead of a personal profile, just open config.toml in the base of the Hugo site, add the following line to config.toml

```toml
[params]
 home_mode = "post" # post or other
```

# Author

[wbmins](https://github.com/wbmins)

# See Also

* [Coder](https://themes.gohugo.io/hugo-coder/)
* [hello-friend](https://themes.gohugo.io/hugo-theme-hello-friend/)

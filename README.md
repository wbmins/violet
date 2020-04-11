# Getting Started

## Requirements

Hugo 0.68.3 or higher

**Hugo extended version**, read more [here](https://gohugo.io/news/0.48-relnotes/)

## Installation

Navigate to your hugo project root and run:

```bash
git submodule add https://github.com/Mogeko/mogege themes/mogege
```

Then run hugo (or set `theme: mogege` in configuration file)

```bash
hugo server --minify --theme mogege
```

## Creating site from scratch

Below is example how to create new site from scratch

```bash
hugo new site mydocs; cd mydocs
git init
git submodule add https://github.com/Mogeko/mogege  themes/mogege
cp -R themes/mogege/exampleSite/content .
```

```bash
hugo server --minify --theme mogege
```

## Embedded BiliBili video

You can embed BiliBili videos via Shortcodes, just provide the AV号 of the bilibili video

```txt
{{< bilibili [AV号] >}}
```

Click [here](https://mogeko.github.io/2020/079#biliplayer) for examples

## Hidden text

You can use "hidden text" to hide spoiler content

```txt
{{< spoiler >}} HIDDEN TEXT {{< /spoiler >}}
```

## Embedded BiliBili video

You can embed BiliBili videos via Shortcodes, just provide the AV号 of the bilibili video

```txt
{{< bilibili [AV号] >}}
```

Click [here](https://mogeko.github.io/2020/079#biliplayer) for examples

## Hidden text

You can use "hidden text" to hide spoiler content

```txt
{{< spoiler >}} HIDDEN TEXT {{< /spoiler >}}
```

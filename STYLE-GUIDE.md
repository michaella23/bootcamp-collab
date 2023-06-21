# Form Follows Function🤔
**_⚠️ If you haven't already, please go through the following documents ⚠️_** 

[README.md](./README.md) | [CONTRIBUTING.md](./CONTRIBUTING.md)

<br>

## Welcome to the Style Guide
- [Introduction](#introduction)
  - [What you can expect from reading this style guide?](#what-you-can-expect-from-reading-this-style-guide)
- [Getting started](#getting-started)
  - [Folder Structure, Multiple CSS files & Comments](#folder-structure-multiple-css-files--comments)
  - [Why multiple CSS files?](#why-multiple-css-files)
  - [Getting down to writing comments ](#getting-down-to-writing-comments)
  - [Example of how to use the @import rule](#an-example-of-how-to-use-the-import-rule)
  - [So which files do I link in my html head?](#which-files-do-i-link-in-my-html-head)
- [Root variables](#root-variables)
  - [Root variables & How to select them](#root-variables--how-to-select-them)
  - [Setting & selecting :root variables inside of CSS](#setting--selecting-root-variables-inside-of-css)
  - [Selecting & setting :root variables and properties inside of JavaScript](#selecting--setting-root-variables-and-properties-inside-of-javascript)
- [Contribution](#contribution)
  - [Got something to add?](#got-something-to-add)
- [Contributors](#contributors)
  - [Who has contributed to this document](#who-has-contributed-to-this-document)

<br>

#### INTRODUCTION
## What you can expect from reading this style guide?
The purpose of this style guide is to help you understand the concepts found within the [bootcamp-collab](https://github.com/michaella23/bootcamp-collab) open source project, which was created by the wonderful bootcamp instructor [michaella23 (Micha)](https://github.com/michaella23), to get you started contributing no matter the module you are in. 

Take the time to read through this and other documentation on this repository if you are unsure of any concepts found in the project.

<br>

#### GETTING STARTED
## Folder Structure, Multiple CSS files & Comments
When starting with the bootcamp-collab project you will hopefully notice the folder structure and multiple CSS files within the repository. _At the time of writing this, there is currently the [base.css](./assets/css/base.css) & [index.css](./assets/css/index.css)_.

### Why multiple CSS files?

It is structured like this to help everyone reduce the need of reading through a huge single CSS file. Not only does it help everyone maintain the code, but it also teaches you a workflow you can incorporate within your projects if you find your CSS files are becoming too large.

### Getting down to writing comments 

When you add something, try to explain your addition with a comment so that other contributors working on this project in the future can either learn from you or understand what is being done.
<br>
##### _An example of how to use the `@import` rule_

```CSS
/* within the index.css file we import the base.css */
@import url('./base.css'); /* prefered way of writing */
@import './base.css'
```

For each `.html` file made, it should be accompanied by its own `.css` file. We then import the `base.css` file into that newly created `.css` file so that it can obtain the styles & variables already declared by the generic `base.css` file. 

The [base.css](./assets/css/base.css) file is a generic CSS document that contains styles that are implemented across the entire site. While [index.css](./assets/css/index.css) and whatever other newly created file contains styles only pertaining to them.

### **Which files do I link in my html head?**

```html
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootcamp Collab</title>
    <link rel="stylesheet" href="./assets/css/index.css"> <!-- here -->
  </head>
```

Within the `index.html` head tags, we only need to link the `index.css` file as shown above and not the `base.css` file as that is already being imported within the `index.css` file. We should follow this same process with any other file we decide to add.

<br>

#### ROOT VARIABLES
## Root variables & How to select them

##### _setting & selecting :root variables inside of CSS_

```css
  :root {
    /* contributors color flavor */
    --clr-blueberrypink-awcoetzer: #447398;
    /*  \_______\__________\__(prefix / color-name / contributor) */

    /* styles pertaining to the document */
    --clr-background: var(--clr-blueberrypink-awcoetzer);
    /*  \______\_________\__(prefix / purpose / contributors-variable) */
  }

  body {
    background-color: var(--clr-background);
    /*  \________________\__ (property / pointing-to-variable) */
  }
  
```

In CSS, the double dash `(--)` is used as a convention to denote custom properties, also known as `CSS variables`. It helps differentiate custom properties from regular CSS properties. The double dash convention was introduced to prevent conflicts with existing CSS properties and to indicate that a property is a custom variable that can be defined and used throughout the stylesheet.

CSS variables are placed within the `:root` pseudo-class, which represents the root element of the document (typically the `<html>` element). The `var() function` is used to reference and use the CSS variables in other parts of the stylesheet.

In our example above we see that a contributor has declared a custom color css variable for themself, `--clr-blueberrypink-awcoetzer`, which denotes the prefix of `clr` short for color, the color name `blueberrypink` and the contributor `awcoetzer`, so we can all know who it belongs to followed by a value.

We then use that contributors variable inside another CSS variable pertaining to the document styling and then we use that on the actual css property. 

This was a small example of how we can use CSS variables, of course we could have used the contributors variable directly on the `background-color:;` property itself. However, this felt like a more structured approach, especially due to this being an open source project. We can therefore keep other contributors work without deleting it completely.

<br>

##### _selecting & setting :root variables and properties inside of JavaScript_

```javascript
  // selecting it directly (not preferred)
  document.documentElement.style.setProperty(
  '--clr-paragraph',
  '--my-flavor-clr'
  );

  // saving it to a variable (preferred)
  const rootCSS = document.documentElement.style;

  rootCSS.setProperty(
  '--clr-paragraph',
  '--my-flavor-clr'
  );
  
```

Above illustrates how you can go about selecting `root` variables within JavaScript. _Hopefully it is self explaining_ 

<br>

#### CONTRIBUTION
## Got something to add?

See a mistake? A typo? or just want to contribute to this document? Feel free to add/change anything you want, that being said, please only add/change content that would be considered helpful to other contributors.

<br>

#### CONTRIBUTORS
## Who has contributed to this document

Here you can see who has contributed to this particular document. If you have contributed to this document, please feel free to add your GitHub Profile below so others can connect with you.

- [Andre W. Coetzer](https://github.com/awcoetzer)
- [Ali Asim Kazmi](https://github.com/aliasimkazmi)


<br/>
<p align="center">
  <a href="https://codestitch.app/">
    <img src="https://codestitch.app/frontend/images/icon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Intermediate Starter Kit (Astro + LESS)</h3>

  <p align="center">
    Introducing the <em>un</em>-official intermediate starter kit, presented by CodeStitch. This kit includes a pre-configured Astro setup, along with a seamless integration of Decap CMS, providing an easy way to manage a blog. Everything is ready to go right from the start, offering a fantastic introduction to the advantages of a Static Site Generator, complete with LESS preprocessing.
    <br/>
    <br/>
    <a href="https://codestitch-intermediate-astro.netlify.app">View Live Result</a>
  </p>
</p>

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [File Structure](#fileStructure)
  - [Root Files and Folders](#rootFilesAndFolders)
  - [Source Files and Folders](#sourceFilesAndFolders)
- [Getting Started](#gettingStarted)
- [Expanding the Project](#expandingTheProject)
  - [Reusing Code](#reusingCode)
  - [Adding More Pages](#addingMorePages)
  - [Navigation via Front Matter](#navigationViaFrontMatter)
  - [Configuring the CMS](#configuringTheCms)
- [Deployment](#deployment)

<a name="overview"></a>

## Overview

The intermediate starter kits build off the beginner kits, mainly by including a pre-configured <a href="https://www.astro.build">Astro</a> environment, which
allows for repeated components, centralized data and greater room to scale as your clients grow. On top of this, a blog has been provided through
<a href="https://decapcms.org/">Decap CMS</a> to allow your clients to manage their content on their own. This can easily be adapted to anything which requires
changing content, such as menus, job listing boards, portfolios and much more.

An example website has also been provided, with easy substitution of website sections possible through the use of <a href="https://codestitch.app/">CodeStitch's
vanilla component library</a>. This kit aims to get any project off the ground in as little time as possible, with deployment being possible in as little as two
minutes - including CMS hosting.

<a name="prerequisites"></a>

## Prerequisites

Only the vanilla web technologies are _required_ before using this kit, with some familiarity with Astro and Templating Languages also recommended, but not essential. A lot of the leg-work for the non-vanilla technologies has been done for you. If you would like to read up on some of these things, we recommend the following resources:

1. [Astro's Documentation](https://docs.astro.build/en/getting-started/)
2. [Astro Crash Course in 20 Minutes!](https://www.youtube.com/watch?v=zrPVTf761OI)
3. [Decap CMS' docs](https://decapcms.org/docs/intro/) can also be found should you wish to extend the CMS beyond what's in this kit

<a name="fileStructure"></a>

## File Structure

```
.
├── public/
|   |—— assets/
|   |   |—— favicons/
|   |   |—— fonts/
|   |   |—— images/
|   |   |—— js/
|   |   └── svgs/
|   |—— _redirects
|   |—— robots.txt
|   └── sitemap.html
├── src/
|   ├── assets/
|   |   └── images/
|   ├── components/
|   ├── content/
|   |   └── blog/
│   ├── _data/
│   │   ├── client.json
│   │   └── navData.json
|   ├── js/
|   |   └── util.js
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│    ├── blog/
│   ├── content/
│   │   └── blog/
|   └── styles/
├── .astro.config.mjs
├── .postcss.config.cjs
└── tsconfig.json
```

<a name="rootFilesAndFolders"></a>

### Root Files and Folders

- public/ - All assets you don't want optimized by Astro. Include fonts and favicons in here. The \_redirects, robots.txt, and sitemap.xml also live here.
- src/ - Raw, source code. The folder you work in.
- .astro.config.mjs - Astro config file, already set up for you.

<a name="sourceFilesAndFolders"></a>

### Source Files and Folders

- data/ - Global data accessible across the project. Fill out client.json before you begin. Just import this data at the top of a file you want to include it.
- assets/ - Non-HTML files. Images, scripts and styles.
- content/ - Data to render pages from, such as the blog.
- \_redirects - To configure redirects. Read more on <a href="https://docs.netlify.com/routing/redirects/">Netlify</a>
- index.astro - Home page
- robots.txt - Instructions for site crawlers. Learn more, and generate your own, <a href="https://en.ryte.com/free-tools/robots-txt-generator/">here</a>
- sitemap.xml - A map of the pages on the domain. Create your own after deployment <a href="https://www.xml-sitemaps.com/">here</a>

<a name="gettingStarted"></a>

## Getting Started

1. At the top right of the <a href="https://github.com/ItsEthanH/intermediate-starter-less">GitHub Repository</a>, click the green _Use this template_ button,
   then click _Create a new repository_.
2. Follow the instructions to create a new repository, using this repo as a template.
3. When created, clone the repository to your local machine.
4. Run `npm install` to install all dependencies.
5. Run `npm start` to start the project and spin up a development server on `localhost:8080`.

Running `npm start` will start a development server, begin LESS preprocessing and start up the CMS (accessible by visiting the `/admin` path).

Next, it is recommended to update `data/client.json` with some new information about this project. Through the power of templating, the
project's `<head>` and contact information will automatically be filled out, providing a first peek into some of the benefits of SSGs.

Finally, you can find all of CodeStitches `:root` variables, as well as .cs-topper, .cs-title and .cs-text, within the `root` stylesheet. Feel free to adjust these, or use our Content Flair micro-stitches, to update site-wide styles quickly.

<a name="expandingTheProject"></a>

## Expanding the Project

Aimed towards freelancers, this kit was made with scalability and flexibility in mind, suiting a range of websites and client needs. As such, it is your choice
whether you'd rather make small tweaks to the existing site, or clear all the page content and build a site all over again. Outlined below are some best
practices for when it comes to building on top of this kit:

<a name="reusingCode"></a>

### Reusing Code

The main advantage to using an SSG is it brings components, popularized by JavaScript-heavy frameworks like React or Vue, to vanilla HTML. As Astro is being
used, componentization can be achieved through JSX-like syntax within .astro files.

For example, there is a call to action at the bottom of most pages. As the text content or styles don't need to change, `<CTA />` was
used. If this wasn't the case, and we wanted the CTA text to change, we'd start to think about passing props to `<CTA />`.

<a name="addingMorePages"></a>

### Adding More Pages

Thanks to Astro Navigation, adding new pages is as simple as adding a file to src/pages/ and including it in the `data/navData.json` file:

```
---
// optional JavaScript frontmatter
---

<BaseLayout
  title="Page title for <title> and OG tags"
  description="Description for <meta> and OG tags"
  preloadImg={import("/assets/images/imagename.format")}
>
    <!-- Page HTML goes here, without a <main> wrapper -->
</BaseLayout>
```

Starting from the top, you can see some data enclosed in --- tags. This is known as the page's front matter, which provides additional data to when it comes to
rendering your pages.

<a name="navigationViaFrontMatter"></a>

### Navigation via navData.json

The header navigation in the project is powered by the `navData.json` file. Each page in the navigation should be included as an item with a `key` property (page title to be displayed) and a `url` property (include a trailing slash). To add subpages, include a `children` property. The `children` property should be an array that contains more page objects (i.e., object containing a `key` and `url` property.) If a page has a `children` array property is specified, a dropdown will be created, providing
a Navigation + Dropdown Stitch is being used. Navigations will render in order.

> If you wish to use an alternative Navigation stitch, you are welcome to swap out the .cs-ul-wrapper div in the Stitch for the one in the Starter Kit. This
> will allow you to continue to reap the benefits of eleventyNavigation. You can find the .cs-ul-wrapper div below

```
<div class="cs-ul-wrapper">
  <ul id="cs-expanded" class="cs-ul" aria-expanded="false">
    {
      navData.map((entry) => (
        <li
          class:list={[
            "cs-li",
            { "cs-dropdown": entry.children?.length > 0 },
          ]}
          tabindex={entry.children?.length > 0 ? "0" : ""}
        >
          <a
            href={entry.url}
            class:list={[
              "cs-li-link",
              { "cs-active": Astro.url.pathname === entry.url },
            ]}
          >
            {entry.key}
          </a>
          {entry.children?.length > 0 && (
            <ul class="cs-drop-ul">
              {entry.children.map((child) => (
                <li class="cs-drop-li">
                  <a href={child.url} class="cs-li-link cs-drop-link">
                    {child.key}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))
    }
  </ul>
</div>
```

> Should you wish to use your own method of rendering the navigation, you can still take advantage of applying the "active" class styles by using a smaller amount of code within the class attribute of the link:

```
<li class="cs-li">
  <a href="/about" class:list={["cs-li-link, {"cs-active": "/about/" === Astro.url.pathname }]}>About</a>
</li>
```

> In this case, if the page slug is "about", the .cs-active class will be applied. You're welcome to adjust the page slug value to whatever you require ("blog", "/", "services", etc)
> For dropdowns, you can use a similar philosophy on the parent dropdown's class attribute, checking to see if any of the child pages are active before applying the styles. An example of this is shown below:

```
<li class="nav-link cs-li cs-dropdown">
  <span class:list={["cs-li-link nav-link",
    { 'cs-active': '/annapolis-custom-closets/' === Astro.url.pathname },
    { 'cs-active': '/bowie-custom-closets/' === Astro.url.pathname },
    { 'cs-active': '/severna-park-custom-closets/' === Astro.url.pathname },
    { 'cs-active': '/odenton-custom-closets/' === Astro.url.pathname },
  ]}>
    Areas Served
    <img class="cs-drop-icon" src="/assets/images/down.svg" alt="dropdown icon" width="15" height="15" decoding="async" aria-hidden="true">
  </span>
  <ul class="cs-drop-ul">
    <li class="cs-drop-li">
      <a href="/annapolis-custom-closets" class="cs-drop-link">Annapolis</a>
    </li>
    <li class="cs-drop-li">
      <a href="/bowie-custom-closets" class="cs-drop-link">Bowie</a>
    </li>
    <li class="cs-drop-li">
      <a href="/severna-park-custom-closets" class="cs-drop-link">Severna Park</a>
    </li>
    <li class="cs-drop-li">
      <a href="/odenton-custom-closets" class="cs-drop-link">Odenton</a>
    </li>
  </ul>
</li>
```

> In the above example, we're checking to see if the active page slug matches any of the four that are listed (annapolis, bowie, severna or odenton) and applying the .cs-active style to the parent if it does.

Below the front matter is the page content. Any code that should be sent to a layout should be enclosed in the layout's component:

```
<BaseLayout>
  <!-- Your html/jsx code here -->
</BaseLayout>
```

This code will be inserted into the `<slot />` component in BaseLayout.astro.

<a name="configuringTheCms"></a>

### Configuring the CMS

Within `astro.config.mjs`, you'll find a `NetlifyCMS` object which contains the configuration for the blog. While this project is set up to work with a blog out of the box, you are welcome to make changes using
<a href="https://decapcms.org/docs/add-to-your-site/#configuration">Decap CMS'</a> documentation.

Blog content lives in `/src/content/blog` in the form of markdown files, with a front matter similar to that of the pages. MDX files can also be used if you want to include JSX components. The title, description, and tags are defined in the frontmatter of the markdown. The permalink will be the same as the file name.

When `npm start` is run, a proxy server for the CMS is spun up on `localhost:8081`. That can often mean you run into errors if `localhost:8080` is already
taken, so look out for that. You can locally access the blog via navigating to the /admin path. All blog content can be easily created, updated and deleted via
this admin panel, and is the very system that your clients can use to manage their website without your involvement. Everything on the blog should be fairly
intuitive, but feel free to experiment with using this panel first. With this kit, you can add _featured_ to the comma-separated list of tags to have them show
up as so in the frontend.

<a name="deployment"></a>

## Deployment

1. Ensure the sitemap, robots.txt and \_redirects have been filled out. Instructions and tools for how to do so can be found in the File Structure section
2. Navigate to your Netlify Admin Panel, click _Add new site | Import an existing project_
3. Follow the instructions to connect your GitHub repository to Netlify.
4. Once deployed, click on _Identity_ in the top navigation, then click _Enable Identity_
5. Invite yourself, and the client, to the site
6. While in the Identity tab, click the "Settings and usage" button to open the settings options. Then, do the following:
   - Find "Registration Preferences", click "Edit Settings" and set registration from _Public_ to _Invite Only_
   - Find "Enable Providers" and add a provider. We recommend Google, so the client can login with Google in 1 click.
   - Find "Git Gateway" and enable it

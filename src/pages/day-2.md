---
title: Day 2
date: 02/20/2020
featuredImage: ../assets/images/Day1.png
---

In this day I started by finishing up the tutorial left from the first day. There was a section called [Preparing a Site to Go Live](https://www.gatsbyjs.org/tutorial/part-eight/) that shows how to audit your web page with lighthouse, which I have never used(it's so useful). Aside from that it shows how to add a manifest file to gatsby, since it is required to the website to be a Progressive Web App. Then it shows how to add offline support for the same reasons, caching content so that it's visible even if you are offline. And for last it shows you how to add metadata on each page, to improve your SEO.

Now we can start the actual challenge of the day.

## Host Your Gatsby Site for Free

The objective of this challenge is to show you how to build a continuous deploy for your blog.
To do that you need to host your project in a cloud git repository, I have chosen GitHub for that.
Then we need to choose a CDN to host our website. I've chosen [Netlify](https://www.netlify.com/), since it's free and it has a [guide](https://www.gatsbyjs.org/docs/deploying-to-netlify/) on how to deploy Gatsby on Netlify.

### Deploying

Deploying a git repository to Netlify is actually super easy, all you have to do is sync Netlify to your desired repository, tell it how to make a production build of your site, which we do with ```gatsby build```, and tell where the production build is located, which is in the /public folder. Then everything you have to do to deploy your website is to push it to your remote repository on github.


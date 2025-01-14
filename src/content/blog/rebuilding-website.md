---
title: "Build (almost) everything twice"
description: "A look at making mistakes and learning from them."
pubDate: "Jan 13 2025"
---

In the world of web development it seems there's never an end to new JavaScript
frameworks to choose from. While it's great that there's so many options
designed to solve all sorts of problems, choosing the right
tool for the job can feel overwhelming. In this post, I hope to share my
experience in how I built this blog and how I picked which tools to use.

When I first decided to rebuild this website, I started to build it
from scratch using nothing more than HTML, CSS, and plain JavaScript. To be
frank, it was great at first! The amount of data I was sending to the client
could be measured in bytes. The number of dependencies I was using could be
counted on one hand. I was in control of every last byte rendered on the screen
and could optimize to my hearts desire.

Once I got past laying out the skeleton of the first few pages, I
started to realize the enormous amount of work that was ahead of me. I would be
responsible for figuring out _how_ to optimize everything. I would need to build
out a build step that minified the HTML, CSS, and JavaScript... but was just
minifying it enough? What about image optimization? What about managing adding
new content to the blog?

Clearly, there were a few things that I had not considered. This is when I realized that I had a few different paths I
could go down:

1. Build everything from scratch and re-invent the wheel for every process.
2. Admit that I made a mistake in picking my tools, scrap what I already built,
   and start over having this new perspective on the needs of what I was
   building.

## Relevant Links

- [Link to Github](https://github.com/KyleLee95/KyleLee95.github.io)
- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [Github Pages](https://pages.github.com/)

---
title: 'Digital asset management'
date: 2018-11-28T15:14:54+10:00
icon: 'services/folders.gif'
featured: true
draft: false
heroHeading: 'Digital asset management'
heroSubHeading: "Get your team's digital research assets and digital working practices in order!"
heroBackground: 'services/folders.gif'
blendMode: 'hero-image-blend-color-burn'
weight: 5
---

Organising your team's digital research assets and developing convention on how they are produced, stored, catalogued, accessed and used can be critical to doing more with your team's code and data.

Inspiration for this particular type of work was provided by the task a friend of mine was given on her first postdoc. She was effectively given the hard drive containing a former PhD student's work and told to figure out what's on it are and build on it (!).

Clearly this is not an effective way to work, yet is still quite a typical predicament in academia. However, you can avoid this by taking the managements of digital research assets seriously from the start, on-boarding group members on best practices and expectations and set up effective off-borading procedures that ensure all digital assets produced are accessible, well documented and easily reusable.

![](https://media2.giphy.com/media/5YiRHZtcSeiEyOpSV7/giphy.gif?cid=790b76115d2070523958673849c75d9e&rid=giphy.gif)

## Organise your data, code and ways of working.

- Decide on a framework for storage, access, cataloguing and archiving of digital assets.
- Build convention on how they are produced and used.
- Develop guidance on how you want your team to collaborate.
- Document conventions, procedures, access to assets and asset metadata.
- Develop on-boarding and off-boarding procedures.

## The power of convention

{{< blockquote source="**Jenny Bryan** on [Project-oriented workflows](https://www.tidyverse.org/articles/2017/12/workflow-vs-script/)">}}

It’s like agreeing that we will all drive on the left or the right. A hallmark of civilization is following conventions that constrain your behavior a little, in the name of public safety.

{{< /blockquote >}}

Wise words from Jenny Bryan there that can make a huge difference to your team's workflows. For example, agreeing on variable names across datasets, on file formats, file naming, folder structure and organisation can help interoperability of team mates work immensely. It can help team members navigate your team assets with ease...including their own work when they need to come back to it later on!

## Documentation = the heart of team practice.


Good documentation is imperative to putting convention into practice and ensuring team mates have access to information on required to work with your team's assets, following the working practices you have set. Documentation can take the form of a simple READMEs, team wiki's or full documentation websites using frameworks like blogdown or bookdown. 

It's important to provide the ability for team mates to suggest edits and guidance on how they can add to documentation when things change or where missing details are identified to both ensure your docs are a living document that evolevs with your team and practices and make team mates feel like active participants.

Shared docs are also a great  way to practice activities like collaborative content creation, version control and content reviewing.

## Tools, Templating and automation

The powerful thing about developing and documenting convention is that it allows you to build tools, templates and automation around it!

From checklists, GitHub Issue and Pull Request templates to guide the team through actions, parametarised Rmarkdown or Quarto reports to reusable processing or analysis pipelines, consistent ways of working and producing digital assets can make their reuse much easier.

Conversely templating and automation which includes guidance and important checks can make it easier to ensure conventions are followed!

A great example of convention powering automation and templating is the [`usethis`](https://usethis.r-lib.org/) package. It's a veritable treasure trove for setting up the repetitive infrastructure and files an R package or project depends on. Another example is [`pkgreviewr`](https://docs.ropensci.org/pkgreviewr/), a package I developed to facilitate rOpenSci reviews through automation, templates and guidance.


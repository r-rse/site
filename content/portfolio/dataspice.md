---
title: 'dataspice R package'
date: 2018-11-18T12:33:46+10:00
draft: false
weight: 5
heroHeading: 'dataspice R package'
heroSubHeading: 'Create lightweight schema.org descriptions of your datasets.'
heroBackground: ''
blendMode: 'hero-image-blend-darken'
thumbnail: 'work/pkgreviewr-hex.png'
---

Dataspice makes it easier for researchers to create basic, lightweight, and concise metadata files for their datasets by editing the kind of files they’re probably most familiar with: CSVs. 


These csv files can be directly modified, or they can be edited using either  associated helper function and/or deploying dataspice shiny apps which help guide through metadata collection.

These metadata csv files can then be used to:
- Make useful information available during analysis.
- Create a helpful dataset README webpage for data.
- Produce more complex metadata formats for richer description of datasets and to aid dataset discovery.


Metadata fields are based on [**Schema.org/Dataset**](https://schema.org/Dataset) and other metadata standards and represent a lowest common denominator which means converting between formats should be relatively straightforward. 

{{< figure src="/work/dataspice_workflow.png" width="95%" caption="Typical Dataspice workflow">}}

This project was a team effort developed as part of [rOpenSci unconf 2018](https://unconf18.ropensci.org/) and is now available on CRAN. I've also developed a number of [training materials](https://annakrystalli.me/emodnet-dataspice-tutorial/) using it, to teach data producers to develop accompanying minimal metadata in R.


{{< software src="https://docs.ropensci.org/dataspice/" btn-href="https://docs.ropensci.org/dataspice/" 
btn-title="Documentation" code-href="https://github.com/ropensci/dataspice" >}}




---
title: 'pkgreviewr R package'
date: 2018-11-18T12:33:46+10:00
draft: false
weight: 2
heroHeading: 'pkgreviewr R package'
heroSubHeading: 'Facilitating rOpenSci reviews through templating and automation.'
heroBackground: 'work/pkgreviewr-docs.png'
blendMode: 'hero-image-blend-darken'
thumbnail: 'work/pkgreviewr-hex.png'
---

I built this package when I was invited to review for rOpenSci a second time. I found that I was both repeating myself but also having to return to the (extremely thorough) rOpenSci reviewer's documentation over and over because I couldn't remember detailed steps I had followed to perform the review the first time.

The package provides functionality for automatically cloning the source code of the package under review as well as creating a review project with all the materials required to perform and report review findings, prepopulated with details of the package under review.

Later when I joined the software review editorial team, I added functionality for editors including a streamlined editors checks template and an interactive _review request_ email template, automatically populated with details of the package in question, for inviting potential reviewers.

{{< software src="https://docs.ropensci.org/pkgreviewr/" btn-href="https://docs.ropensci.org/pkgreviewr/" 
btn-title="Documentation" code-href="https://github.com/ropensci-org/pkgreviewr" >}}






I presented the package and story behind it's creation at the 2019 UK RSE Conference where it received first prize!


Here's the poster!

{{< embed-pdf url="images/pkgreviewr_rse19.pdf" hidePaginator="false" >}}



---
title: 'The hubverse'
date: 2026-10-08T10:00:00+03:00
draft: false
weight: 1
heroHeading: 'The hubverse'
heroSubHeading: 'Open source data standards and software for collaborative infectious disease modeling hubs.'
heroBackground: 'work/hubverse-site.png'
blendMode: 'hero-image-blend-darken'
thumbnail: 'work/hubverse-logo.png'
---

The [hubverse](https://hubverse.io/) is a modular, open source software ecosystem for setting up and running **collaborative modeling hubs**. Hubs coordinate forecast and scenario submissions from many modeling teams, validate them against shared data standards and combine them into ensembles that inform public health decision making. Hubs built on the hubverse include the US CDC [FluSight](https://github.com/cdcepi/FluSight-forecast-hub) influenza forecasting hub, the [Scenario Modeling Hub](https://scenariomodelinghub.org/) and hubs in Europe, Australia and Aotearoa New Zealand.

The project is developed by the [Consortium of Infectious Disease Modeling Hubs](https://hubverse.io/community/), coordinated by the [Reich Lab](https://reichlab.io/) at the University of Massachusetts Amherst, and is the most substantial piece of software I have worked on. I have been a core member of the development team since the project's inception. I lead development of the hubverse R packages, work on the hub dashboard tooling and help scope out new directions for the project.

{{< project-meta role="Lead developer of the hubverse R packages, dashboard tooling and new project scoping" period="2022 to present" effort="Three days a week" org="Consortium of Infectious Disease Modeling Hubs, Reich Lab, University of Massachusetts Amherst" stack="R, JSON Schema, Apache Arrow, GitHub Actions" >}}

## What I work on

The hubverse R packages build on the [hubverse schemas](https://github.com/hubverse-org/schemas), which define how a hub is configured and what valid model output looks like, and support every stage of a hub's life cycle:

- [`hubAdmin`](https://hubverse-org.github.io/hubAdmin/): create and validate hub configuration files.
- [`hubValidations`](https://hubverse-org.github.io/hubValidations/): validate model submissions, locally and through automated checks on GitHub.
- [`hubData`](https://hubverse-org.github.io/hubData/): access and query model output and target data, locally or in the cloud, using Apache Arrow.
- [`hubUtils`](https://hubverse-org.github.io/hubUtils/): shared low level utilities underpinning the rest of the ecosystem.
- [`hubEnsembles`](https://hubverse-org.github.io/hubEnsembles/), [`hubEvals`](https://hubverse-org.github.io/hubEvals/) and [`hubVis`](https://hubverse-org.github.io/hubVis/): ensemble, evaluate and visualise model outputs.
- [`hubCI`](https://hubverse-org.github.io/hubCI/) and [hubverse-actions](https://github.com/hubverse-org/hubverse-actions): continuous integration workflows that hubs deploy to automate validation of submissions.
- [hubverse dashboards](https://github.com/hubverse-org/hub-dashboard-template): a pipeline that turns a hub's data into a public website with interactive forecast visualisations and model evaluations.
- [hubverse Claude Code skills](https://github.com/hubverse-org/hubverse-claude-skills): shared AI assisted development workflows for the team, covering dashboard builds and package releases.

Beyond writing code, my work involves designing data standards together with hub administrators and modelers, maintaining schema versioning and migration tooling, supporting hubs adopting the software and establishing development practices across the consortium's R packages.

{{< project-links site="https://hubverse.io/" docs="https://docs.hubverse.io/en/latest/" runiverse="https://hubverse-org.r-universe.dev/packages" code="https://github.com/hubverse-org" >}}

## Publications

{{< publication doi="10.1038/s44360-026-00145-7" thumbnail="/work/hubverse-nature-health.png" alt="Header of the Nature Health article: A software platform for collaborative infectious disease modelling" >}}
Consortium of Infectious Disease Modeling Hubs, Kerr M, Borchering R, Castro Rivadeneira AJ, Contamin L, Funk S, Hochheiser H, Howerton E, **Krystalli A**, Shandross L, Reich NG. **A software platform for collaborative infectious disease modelling.** _Nature Health_. 2026;1:1141–1150.
{{< /publication >}}

{{< publication doi="10.1002/sim.70333" >}}
Shandross L, Howerton E, Contamin L, Hochheiser H, **Krystalli A**, Consortium of Infectious Disease Modeling Hubs, et al. **Multi-model ensembles in infectious disease and public health: Methods, interpretation, and implementation in R.** _Statistics in Medicine_. 2026;45(1–2):e70333.
{{< /publication >}}

## Talks

{{< talk src="https://hubverse-org.github.io/hubverse-talk-RSECon26/#/title-slide"
title="The Hubverse: Streamlining Collaborative Infectious Disease Modeling for Public Health Impact"
subtitle="RSECon26, Sheffield, September 2026"
slides-href="https://hubverse-org.github.io/hubverse-talk-RSECon26/#/title-slide"
code-href="https://github.com/hubverse-org/hubverse-talk-RSECon26"
doi-href="https://zenodo.org/records/22685754" >}}

Predictive models are an essential tool for public health decision making during infectious disease outbreaks. Yet the rapid proliferation of models during the COVID-19 pandemic produced a fragmented landscape of inconsistent metrics, conflicting forecasts and limited comparability. Collaborative modeling hubs offer a solution by coordinating model submissions, promoting transparency and facilitating ensemble modeling.

The hubverse is a modular, open source software ecosystem designed to support the setup and operation of these hubs. It introduces data standards for probabilistic model output, alongside utilities for hub administration, validation, ensembling, visualization, model evaluation and public facing communication. This talk introduces the hubverse through real world examples, including its adoption by the CDC's FluSight influenza forecasting hub, showing how it standardises modeling efforts and supports evidence based public health decision making.

{{< /talk >}}

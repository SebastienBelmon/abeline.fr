---
title: La loi de Weibull
date: "2019-03-07"
description: Petite présentation de la loi de Weibull et ses différentes caractéristiques.
tags: ['Mathématiques', 'Probabilités']
---

Lors d'un de mes précédents job, j'ai eu l'occasion de travailler avec la loi de Weibull pour calculer *"correctement"* le temps moyen entre deux pannes d'un équipement. Et comme c'est pas un sujet facile, voila quelques explication sur cette loi.

> N'étant moi même pas expert sur ce sujet, il est possible que je fasse des erreurs d'explications. A prendre avec des pincettes donc ! :)

## Formules de la densité de probabilité

$$
f(x;k,\lambda)=\frac{k}{\lambda}(\frac{x}{\lambda})^{k-1}e^{-(x/\lambda)^{k}}
$$

Avec $k > 0$ le paramètre de forme, et $\lambda > 0$ le paramètre d'échelle de la distribution.

Pour mieux comprendre l'impacte que peut avoir ces paramètres, j'ai créer un petit graphique intéractif où vous pouvez modifier les différents paramètres de la fonction de distribution :

### Graphique intéractif

<interactive-weibull-graph></interactive-weibull-graph>


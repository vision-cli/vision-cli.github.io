import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Developer focus",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Build by developers for developers, DX is everything and we want teams
        to focus on writing code but still have the flexibility to customise
        templates to their own use case.
      </>
    ),
  },
  {
    title: "Fully pluggable",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Vision lets you create your own plugins for just about anything. This
        goes beyond the Vite and Yeoman tools and allows teams to fully
        costomise code templates across all technologies.
      </>
    ),
  },
  {
    title: "Evergreen apps",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We want apps generated with Vision to be always up to date or at the
        bare minimum have a clear upgrade path. No more mass refactoring due to
        breaking changes or EOL versions. Golang is a 100% backwards compatiable
        language so we start there.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

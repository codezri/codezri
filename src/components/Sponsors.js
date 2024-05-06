import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './Sponsors.module.css';

const ProjectsList = [
  {
    name: 'MacStadium',
    image: 'macstadium.png',
    description: (
      <>
      MacStadium is the only provider of enterprise-class cloud solutions for Mac and iOS app development.
      They offered us a free remotely-accessed physical mac-mini for Neutralinojs-mac development.
      </>
    ),
    link: 'https://www.macstadium.com'
  },
  // {
  //   name: 'Microsoft Azure',
  //   image: 'azure.jpg',
  //   description: (
  //     <>
  //       Microsoft Azure is a managed cloud computing service for various
  //       cloud computing requirements. They offered us free platform credits for
  //       Neutralinojs-windows development.
  //     </>
  //   ),
  //   link: 'https://azure.microsoft.com'
  // }
];

const currentDonators = ['Just Epic',
        'Brian McGonagill',
        'Satya Sinha',
        'Zizaco Zizuini',
        'Nchinda',
        'Tom S',
        'LiamGaudy'];

const pastDonators = [
        'Jeremiah',
        'Louis Couture',
        'BenStigsen',
        'Jarred',
        'Varun Suryawanshi'];

function Sponsor({sponsor}) {
  return (
    <div className={clsx('col col--4', styles.sponsor, 'padding-vert--md')}>
      <div className="text--center">
        <img src={useBaseUrl('/img/sponsors/' + sponsor.image)} alt={sponsor.name} />
      </div>
      <div className="text--center padding-horiz--md padding-vert--sm">
        <h3>{sponsor.name}</h3>
        <p>{sponsor.description}</p>
        <Link
          className="button button--secondary"
          href={sponsor.link}>
          Go to website
        </Link>
      </div>
    </div>
  );
}

function Donator(props) {
  return (
    <li>{props.name}</li>
  );
}

export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h1>Sponsors</h1>
        <div className="row">
          {ProjectsList.map((props, idx) => (
            <Sponsor key={idx} sponsor={props} />
          ))}
        </div>
        <h1 className="margin-top--lg">Monthly Donators</h1>
        <p>The following sponsors financially support the founder of the CodeZri 
          organization via <Link href="https://www.patreon.com/shalithasuranga">Patreon
            </Link> and <Link href="https://github.com/sponsors/shalithasuranga">GitHub Sponsors
            </Link> platforms.</p>
        <h2>Current</h2>
        <div className="row">
          <ul>
            {currentDonators.map((props, idx) => (
              <Donator key={idx} name={props} />
            ))}
          </ul>
        </div>
        <h2>Past</h2>
        <div className="row">
          <ul>
            {pastDonators.map((props, idx) => (
              <Donator key={idx} name={props} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

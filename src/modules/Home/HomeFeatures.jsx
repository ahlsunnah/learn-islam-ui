// @flow
/* eslint react/no-unused-prop-types: 0 */
import * as React from 'react'
import RawHTML from '../../components/RawHTML'

type Props = {
  feature1Title: string,
  feature2Title: string,
  feature3Title: string,
  feature1Text: string,
  feature2Text: string,
  feature3Text: string,
  featuresTitle: string,
}

const items = ['feature1', 'feature2', 'feature3']

const HomeFeatures = (props: Props) => (
  <section className="pv5 min-h-512-ns flex flex-column">
    <div className="tc">
      <h2>{props.featuresTitle}</h2>
    </div>
    <div className="flex1 flex flex-column flex-row-ns justify-around">
      {items.map((name) => (
        <div
          key={name}
          className="mt4 mt5-ns ph4 flex flex-column items-center tc"
        >
          <div className="mb4 bg-light-silver br-pill h4 w4">
            <img src="/test" alt="" />
          </div>
          <h3>{props[`${name}Title`]}</h3>
          <RawHTML>{props[`${name}Text`]}</RawHTML>
        </div>
      ))}
    </div>
  </section>
)
export default HomeFeatures

// @flow
/* eslint react/no-unused-prop-types: 0 */
import RawHTML from 'components/RawHTML'
import feature1Svg from 'images/features-checklist.svg'
import feature3Svg from 'images/features-globe.svg'
import feature2Svg from 'images/features-interface.svg'
import * as React from 'react'

type Props = {
  feature1Title: string,
  feature2Title: string,
  feature3Title: string,
  feature1Text: string,
  feature2Text: string,
  feature3Text: string,
  featuresTitle: string,
}

const svgs = [feature1Svg, feature2Svg, feature3Svg]
const items = ['feature1', 'feature2', 'feature3']

const HomeFeatures = (props: Props) => (
  <section className="pv5 min-h-512-ns flex flex-column">
    <div className="tc">
      <h2>{props.featuresTitle}</h2>
    </div>
    <div className="flex1 flex flex-column flex-row-ns justify-around">
      {items.map((name, i) => (
        <div
          key={name}
          className="mt4 mt5-ns ph4 flex flex-column items-center tc"
        >
          <div className="mb4">
            <img className="h4" src={svgs[i]} alt="" />
          </div>
          <h3>{props[`${name}Title`]}</h3>
          <RawHTML>{props[`${name}Text`]}</RawHTML>
        </div>
      ))}
    </div>
  </section>
)
export default HomeFeatures

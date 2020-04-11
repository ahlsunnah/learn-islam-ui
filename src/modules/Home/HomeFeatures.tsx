/** @jsx jsx */
import {jsx} from 'theme-ui'
import RawHTML from 'components/RawHTML'
import feature1Svg from 'images/features-checklist.svg'
// import feature3Svg from 'images/features-globe.svg'
import feature2Svg from 'images/features-interface.svg'
import {THomeTranslationsFragment} from '../../graphqlTypes'

type TProps = {} & THomeTranslationsFragment

interface IItem {
  title: keyof THomeTranslationsFragment
  text: keyof THomeTranslationsFragment
  svg: string
}
const items: IItem[] = [
  {
    title: 'feature1Title',
    text: 'feature1Text',
    svg: feature1Svg,
  },
  {
    title: 'feature2Title',
    text: 'feature2Text',
    svg: feature2Svg,
  },
  // {
  //   title: 'feature3Title',
  //   text: 'feature3Text',
  //   svg: feature3Svg,
  // },
]

const HomeFeatures: React.FC<TProps> = (props) => (
  <section className="pv5 min-h-512-ns flex flex-column">
    <div sx={{textAlign: 'center'}}>
      <h2>{props.featuresTitle}</h2>
    </div>
    <div className="flex1 flex flex-column flex-row-ns justify-around">
      {items.map(({title, text, svg}, i) => (
        <div
          key={title}
          className="mt4 mt5-ns ph4 flex flex-column items-center tc"
        >
          <div className="mb4">
            <img className="h4" src={svg} alt="" />
          </div>
          <h3>{props[title]}</h3>
          <RawHTML>{props[text]}</RawHTML>
        </div>
      ))}
    </div>
  </section>
)
export default HomeFeatures

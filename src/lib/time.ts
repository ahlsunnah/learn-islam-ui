import {ObjectOf} from 'interfaces'

// inspired of polyfill for IntlPluralRules

type PluralFunction = (n: number) => string

const makePlurals: ObjectOf<PluralFunction> = {
  ar: (n: number): string => {
    if (n === 1) return 'one'
    if (n === 2) return 'two'
    if (n <= 10) return 'few'
    if (n < 100) return 'many'
    return 'other'
  },
  fr: (n: number): string => (n > 1 ? 'other' : 'one'),
}
const availableLocales = Object.keys(makePlurals)

type Plural = ObjectOf<ObjectOf<ObjectOf<string>>>

const plurals: Plural = {
  hour: {
    ar: {
      one: 'ساعة',
      two: 'ساعتان',
      few: '## ساعات',
      many: '## ساعة',
      other: '## ساعة',
    },
    fr: {
      one: '## heure',
      other: '## heures',
    },
  },
  minute: {
    ar: {
      zero: '',
      one: 'دقيقة',
      two: 'دقيقتان',
      few: '## دقائق',
      many: '## دقيقة',
      other: '## دقيقة',
    },
    fr: {
      one: '## minute',
      other: '## minutes',
    },
  },
}

const localeFormat = (_locale: string, str: string, number: number) => {
  const rule = makePlurals[_locale](number)
  return plurals[str][_locale][rule].replace('##', `${number}`)
}
export const getHumanTime = (locale: string, time: number) => {
  if (!availableLocales.includes(locale)) {
    console.error(`Locale ${locale} not included`) // eslint-disable-line no-console
    return ''
  }
  let minutes = time
  let humanTime = ''
  if (minutes > 60) {
    const hours = Math.floor(minutes / 60)
    minutes -= hours * 60
    humanTime = localeFormat(locale, 'hour', hours)
  }
  if (minutes) {
    if (humanTime !== '') {
      humanTime += ' '
      if (locale === 'ar') humanTime += 'و'
    }
    humanTime += localeFormat(locale, 'minute', minutes)
  }
  return humanTime
}

export default getHumanTime

// const examples = [0, 1, 9, 45, 80, 120, 450]
// examples.forEach((n) => console.log(getHumanTime('fr', n)))

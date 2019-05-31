import {GatsbyCreatePages} from '../types/gatsbyNode'
import createDawaPages from './createDawaPages'
import createMadrassahPages from './createMadrassahPages'

const createPages: GatsbyCreatePages = process.env.IS_DAWA_APP
  ? createDawaPages
  : createMadrassahPages

export default createPages

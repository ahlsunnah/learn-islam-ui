interface IPageInput {
  path: string
  component: string
  layout?: string
  context?: object
  title?: string
}

interface IBoundActionCreators {
  createPage: (page: IPageInput) => void
  deletePage: (page: IPageInput) => void
  createRedirect: (opts: {
    fromPath: string
    isPermanent?: boolean
    redirectInBrowser?: boolean
    toPath: string
  }) => void
}

export interface IGraphql {
  <T>(query: string): Promise<
    {
      data: T
    } & {
      errors?: Array<{
        message: string
      }>
    }
  >
}

export type GatsbyCreatePages = (fns: {
  graphql: IGraphql
  actions: IBoundActionCreators
}) => void | Promise<void>

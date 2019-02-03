export interface INext {
  path: string
  title: string
  type: string
}

export interface IParams {
  courseId: string
  difficulty: number
  locale: string
}

export type Difficulties = 1 | 2

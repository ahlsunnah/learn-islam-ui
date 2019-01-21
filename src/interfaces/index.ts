export interface ObjectOf<T> {
  [key: string]: T
}

export interface ObjectOfStrings {
  [key: string]: string
}

export interface ActionI {
  action: string
  [key: string]: string
}

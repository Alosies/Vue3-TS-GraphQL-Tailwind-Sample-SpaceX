declare namespace Utils {
  export type Maybe<T> = T | null | undefined
  export type DeepNonNullable<T> = {
    [P in keyof T]-?: NonNullable<T[P]>
  }
  export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }
}


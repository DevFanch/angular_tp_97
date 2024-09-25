export type Pokemon = {
  id: number
  pokedexId: number
  name: string
  image: string
  sprite: string
  slug: string
  stats: Stats
  apiTypes: ApiType[]
  apiGeneration: number
}

export type Stats = {
  HP: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
}

export type ApiType = {
  name: string
  image: string
}

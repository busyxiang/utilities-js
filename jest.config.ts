import type {Config} from 'jest'

const config: Config = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    "^lodash-es$": 'lodash'
  },
}

export default config

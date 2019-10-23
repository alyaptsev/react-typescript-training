import { AskBoneFetching, EatBone } from './types'

export function isIGoodBoy (): AskBoneFetching {
  return { type: 'BE_GOOD_BOY_FETCHING' }
}

// Не сможем засунуть в экшн не тот тип
export function eatBones (count: number): EatBone {
  return {
    type: 'EAT_BONE',
    payload: count
  }
}
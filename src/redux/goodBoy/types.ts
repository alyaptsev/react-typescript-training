export interface GoodBoyState {
  isFetching: boolean
  hasError: boolean
  bones: number
}

export type AskBoneFetching = { type: 'BE_GOOD_BOY_FETCHING' }
export type AskBoneSuccess = { type: 'BE_GOOD_BOY_SUCCESS', payload: number }
export type EatBone = { type: 'EAT_BONE', payload: number }
export type GoodBoyFail = { type: 'FAIL' }

export type GoodBoyAction = (
  AskBoneFetching |
  AskBoneSuccess |
  EatBone |
  GoodBoyFail
)
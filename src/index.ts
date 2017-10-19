import {AxiosInstance} from 'axios'
import {TConfig} from './config'
import * as m from './client/memberable.interface'
import * as c from './client/cardable.interface'
import * as t from './client/tranable.interface'
import * as enums from './client.enum'

export * from './client/memberable.interface'
export * from './client/cardable.interface'
export * from './client/tranable.interface'
export * from './client.interface'
export * from './client.enum'
export * from './config'

export interface GMOPGInstance {
  config: TConfig
  client: AxiosInstance
  options: object
  new: (config: TConfig) => GMOPGInstance

  saveMember: (args: m.ISaveMemberArgs) => Promise<m.ISaveMemberResult>
  updateMember: (args: m.IUpdateMemberArgs) => Promise<m.IUpdateMemberResult>
  deleteMember: (args: m.IDeleteMemberArgs) => Promise<m.IDeleteMemberResult>
  searchMember: (args: m.ISearchMemberArgs) => Promise<m.ISearchMemberResult>

  saveCard: (args: c.ISaveCardArgs) => Promise<c.ISaveCardResult>
  deleteCard: (args: c.IDeleteCardArgs) => Promise<c.IDeleteCardResult>
  searchCard: (args: c.ISearchCardArgs) => Promise<c.ISearchCardResult>

  entryTran: (args: t.IEntryTranArgs) => Promise<t.IEntryTranResult>
  execTran: (args: t.IExecTranArgs) => Promise<t.IExecTranResult>
  alterTran: (args: t.IAlterTranArgs) => Promise<t.IAlterTranResult>
  searchTrade: (args: t.ISearchTradeArgs) => Promise<t.ISearchTradeResult>
  changeTran: (args: t.IChangeTranArgs) => Promise<t.IChangeTranResult>

  readonly enums: typeof enums
  createInstance(config: TConfig): GMOPGInstance
  generateMemberID(key: string): string
}

export interface GMOPGStatic extends GMOPGInstance {
  createInstance(config: TConfig): GMOPGInstance
  generateMemberID(key: string): string
}

declare const GMOPG: GMOPGStatic
export default GMOPG
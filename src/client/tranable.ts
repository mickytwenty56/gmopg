import {AxiosInstance, AxiosResponse} from 'axios'
import * as merge from 'deepmerge'
import * as qs from 'querystring'
import {TConfig} from '../config'
import {
  IAlterTranArgs,
  IAlterTranResult,
  IChangeTranArgs,
  IChangeTranResult,
  IEntryTranArgs,
  IEntryTranResult,
  IExecTranArgs,
  IExecTranResult,
  ISearchTradeArgs,
  ISearchTradeResult
} from './tranable.interface'

export default class Tranable {
  public config: TConfig
  public client: AxiosInstance
  public options: object = {}

  public async entryTran(args: IEntryTranArgs): Promise<IEntryTranResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      OrderID: undefined,
      JobCd: undefined,
      Amount: undefined
    }
    const data: IEntryTranArgs = merge(defaultData, args)
    const res: AxiosResponse = await this.client.post('/payment/EntryTran.idPass', data, this.options)

    return qs.parse(res.data)
  }

  public async execTran(args: IExecTranArgs): Promise<IExecTranResult> {
    const res: AxiosResponse = await this.client.post('/payment/ExecTran.idPass', args, this.options)

    return qs.parse(res.data)
  }

  public async alterTran(args: IAlterTranArgs): Promise<IAlterTranResult> {
    const defaultData =  {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      AccessID: undefined,
      AccessPass: undefined,
      JobCd: undefined
    }
    const data: IAlterTranArgs = merge(defaultData, args)
    const res: AxiosResponse = await this.client.post('/payment/AlterTran.idPass', data, this.options)

    return qs.parse(res.data)
  }

  public async searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      OrderID: undefined
    }
    const data: ISearchTradeArgs = merge(defaultData, args)
    const res: AxiosResponse = await this.client.post('/payment/SearchTrade.idPass', data, this.options)

    return qs.parse(res.data)
  }

  public async changeTran(args: IChangeTranArgs): Promise<IChangeTranResult> {
    const defaultData = {
      ShopID: this.config !== undefined ? this.config.ShopID : undefined,
      ShopPass: this.config !== undefined ? this.config.ShopPass : undefined,
      AccessID: undefined,
      AccessPass: undefined,
      JobCd: undefined,
      Amount: undefined
    }
    const data: IChangeTranArgs = merge(defaultData, args)
    const res: AxiosResponse = await this.client.post('/payment/ChangeTran.idPass', data, this.options)

    return qs.parse(res.data)
  }
}

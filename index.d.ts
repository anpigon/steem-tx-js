import { PrivateKey as PK } from './helpers/PrivateKey'

declare module 'steem-tx'

export class PrivateKey extends PK {}

export class Transaction {
  constructor(trx?: object)

  broadcast(): Promise<{
    id: number
    jsonrpc: string
    result: { tx_id: string; status: string }
  } | {error: object}>

  broadcastNoResult(): Promise<{
    id: number
    jsonrpc: string
    result: { tx_id: string; status: string }
  }>

  create(
    operations: any[],
    expiration?: number
  ): Promise<{
    expiration: string
    extensions: any[]
    operations: any[]
    ref_block_num: number
    ref_block_prefix: number
  }>

  sign(keys: any | any[]): {
    expiration: string
    extensions: any[]
    operations: any[]
    ref_block_num: number
    ref_block_prefix: number
    signatures: string[]
  }
}

export const config: {
  address_prefix: string
  chain_id: string
  node: string
}

export function call(method: string, params?: any[], timeout?: number): any

/** Don't need anymore - deprecated */
export function updateOperations(): void

import { BigInt } from "@graphprotocol/graph-ts"
// import {
//   timestampToDay
// } from "./helpers"
import {
  transactionSubmitted
} from "../generated/JomTx/JomTx"
import { Transaction } from "../generated/schema"

export function handleTransactionSubmitted( event : transactionSubmitted) : void {

  let entity = new Transaction(event.transaction.hash.toHex());

  entity.StoreNullifier = event.params.identityCommitment;
  entity.ipfsURI = event.params.ipfs_uri;
  entity.buyerAddr = event.params.buyer_addr.toHex();
  entity.detail = event.params.detail;
  entity.save();

  // let providerEntity = Provider.load(event.transaction.from.toHex());
  // if(providerEntity){
  //   let tmp = providerEntity.ConnectorIndexes;
  //   tmp.push(entity.ConnectorIndex);
  //   providerEntity.ConnectorIndexes = tmp;
  //   providerEntity.save()
  // } 


}
import { Principal } from '@dfinity/principal';
import { Wallet } from 'ethers';

const wallet = new Wallet(process.env.PRIVATE_KEY as string);
const pid = Principal.fromHex(
  wallet.address.slice(2, wallet.address.length),
).toText();
console.log(pid);

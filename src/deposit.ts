import { Wallet, providers, BigNumber, utils } from 'ethers';
import { Principal } from '@dfinity/principal';
import { EthProxy__factory } from './types/factories';

(async () => {
  const provider = new providers.JsonRpcProvider(
    'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  );
  const signer = new Wallet(process.env.PRIVATE_KEY as string, provider);
  const contract = EthProxy__factory.connect(
    '0x2E130E57021Bb4dfb95Eb4Dd0dD8CFCeB936148a',
    signer,
  );

  const user = BigNumber.from(
    '0x' + Principal.fromText(process.env.PID as string).toHex(),
  );
  const tx = await contract.deposit(user, { value: utils.parseEther('0.1') });
  console.log(tx.hash);
  await tx.wait();
  console.log('done');
})();

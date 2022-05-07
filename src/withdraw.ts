import { Wallet, providers, utils } from 'ethers';
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

  const tx = await contract.withdraw(utils.parseEther('0.01'));
  console.log(tx.hash);
  await tx.wait();
  console.log('done');
})();

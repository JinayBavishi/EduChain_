require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/L5Ysc_2mV87OI2pY3dpQFdy38QnhBv4N',
      // https://www.alchemy.com/faucets/ethereum-sepolia
      accounts: ['c62d0539c7cbf3706894747a0e2773cc136254641e49cbfbb3e750bcc2a10981'],
    },
  },
};
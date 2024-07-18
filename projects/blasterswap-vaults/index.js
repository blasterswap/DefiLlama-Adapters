const { staking } = require("./helper/staking.js");

const vaults = ['0x0464a36beCf9967111D2dCAb57CAf4a2376f6E3F', '0xC52fb7E613e401a0195C2fdB369618580D58C91D', '0x013249266842e078999088807033D80531A84260'];
const tokens = ['0xb1a5700fa2358173fe465e6ea4ff52e36e88e2ad', '0xd43D8aDAC6A4C7d9Aeece7c3151FcA8f23752cf8', '0x5ffd9EbD27f2fcAB044c0f0a26A45Cb62fa29c06'];

module.exports = {
	methodology: "Staking",
	blast: {
		staking: staking(vaults, tokens),
	},
}

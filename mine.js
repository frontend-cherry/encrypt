const mine = {}

// sm2加密的公钥
mine.pk = '';
// 数据加密--校验完整性和保密性
mine.encrypt = (plainText) => {
  const sm3 = require('sm-crypto').sm3;
  let hashData = sm3(plainText);
  // console.log('哈希：', hashData);
  const sm2 = require('sm-crypto').sm2;
  // let keypair = sm2.generateKeyPairHex();
  // let publicKey = keypair.publicKey;
  let publicKey = mine.pk;
  const cipherMode = 1; // 1 - C1C3C2，0 - C1C2C3，默认为1
  let encryptData = sm2.doEncrypt(hashData + plainText, publicKey, cipherMode); // 加密结果
  // console.log('加密前：', hashData + plainText, '\n加密后：', encryptData);
  return encryptData;
};

export default mine

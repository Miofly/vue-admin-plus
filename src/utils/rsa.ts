import JSEncrypt from 'jsencrypt';

// rsa 加密
export class RsaEncrypt {
  /** 密钥 */
  private jsencrypt = new JSEncrypt();
  
  constructor (key, privateKey?) {
    key && this.jsencrypt.setPublicKey(key);
    privateKey && this.jsencrypt.setPrivateKey(privateKey);
  }
  
  /**
   * @description 加密
   */
  encrypt (cipherText: string): string {
    return this.jsencrypt.encrypt(cipherText) as string;
  }
  
  /**
   * @description 解密
   */
  decrypt (cipherText: string) {
    return this.jsencrypt.decrypt(cipherText) as string;
  }
}

export const rsa = new RsaEncrypt(
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqOY53npyQNsDeXaAhgzI\n' +
  'bHL5Abw+onQ/PlZT2Scb9Xjj6Vfpe3COd28Rp4lIa5Ay4nPuCm9KkjylbAqBT74+\n' +
  'rFYr9ehujM3pb+oVfsMmVUrMELPV15iSWosaiGM8Alat+xwZfDuLKP5pCCSaeuT1\n' +
  'DvkIeBB3sOo21YozpJZLq5fA7Vp9vDgfS5G6kc8u+X/wJ/knkBOU0a7VpSN8pv4k\n' +
  'YB9ibU1zvbUCwWbE/itlR42fuvwVW0S6v6EbBDVdsKIZKYVVLJD6shc8dKFsgA66\n' +
  'lPKb2ZEQwLFpdHoC+3au3nvb55rFHeEBQuBW9UVy+cMUMaShDH/p6TRF9/fwupVx\n' +
  'hQIDAQAB',
  'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCo5jneenJA2wN5\n' +
  'doCGDMhscvkBvD6idD8+VlPZJxv1eOPpV+l7cI53bxGniUhrkDLic+4Kb0qSPKVs\n' +
  'CoFPvj6sViv16G6Mzelv6hV+wyZVSswQs9XXmJJaixqIYzwCVq37HBl8O4so/mkI\n' +
  'JJp65PUO+Qh4EHew6jbVijOklkurl8DtWn28OB9LkbqRzy75f/An+SeQE5TRrtWl\n' +
  'I3ym/iRgH2JtTXO9tQLBZsT+K2VHjZ+6/BVbRLq/oRsENV2wohkphVUskPqyFzx0\n' +
  'oWyADrqU8pvZkRDAsWl0egL7dq7ee9vnmsUd4QFC4Fb1RXL5wxQxpKEMf+npNEX3\n' +
  '9/C6lXGFAgMBAAECggEBAIuum31bVtI8TwtM7c3vFHJcQ4Mj48kGyqcLThzxMzY3\n' +
  '3IVGp1nnJGux96/O4Y3Tm8GcjukiUVHPxh8sMPV6KOrt+T1OFN9uC/j6ZvyG+FTh\n' +
  'nxLRJ7E+BQvMrwzMxPxKI2jhPFJ6DATDIqoRW5D3eZQAcPia5eHyUZcYzMz5X2tw\n' +
  'pLmgO3Cw1cRtmP2FpDRJPtaPo6CztNfK4hjm3ldmyS26QSiEynmzTJ0qbRhD/J94\n' +
  'aUp6rSDsbE7zFA3+JyolF9p2QA10MUOuDSF1FgHf7ctbajPdCMfBtEfaT16p3txR\n' +
  'bwiZmgMl0EEjRDAYoG44wjXyZETXrJsaBfHE649yxgECgYEA4EB6VRPd0CAiuBtM\n' +
  'Yx1bibKaMZXEyQFx2ETKSVc2Z5aLt3TPH/Bvn2NWyTLKSLWnDTu4VM5oD2sTwayH\n' +
  'VuLapOioSOcS88xo4hv1yAhpSWpeG58rhFNnulgFPXnXxwyT8b9Dg8aE4PM9VLXT\n' +
  'n4JLKyLSm43t666s/iLzYKgQGpECgYEAwM+dhKmBAmbHjeqO4TMs4ycy7gqFaJIo\n' +
  'PH+0zBapUSbQ//Aws2hRQssxYC3YMJ4x86GX50OMw9ZjPcDw69K/K2dzsFIXvxEQ\n' +
  'Bp1uNHmB7L+thtgUxylWP2iQUjd6kS9swRzGfB0h63QVZkoKLTa8Q19bvaq5NUUK\n' +
  'FzivBycymbUCgYAaJwrdPyrgKc9Cv1RCPts9DMo0vC2t73Ayc5tPwE8E96alp4a8\n' +
  'R9MMuI4XesfigOTRg0R1B3lVSvyL2q4R8PTkxIlTrzcjnZQhwncAdBKrUC9Xc1Gk\n' +
  '5gEz1y4NRFdozEu4psCd7pnyjgt6BJaAhLZ1emMrZvr3QHDGVpchj5gJMQKBgBdJ\n' +
  '/JDFmJudpoTxzAhPkiBt36z5AFw9KzcDhecQ5aqzsZL4hClndElJGdGwN+jHcukm\n' +
  'n56DfkE5aAtRfsg9UHIBsOufPtcJTJI/+cvE0XizPlaHSxszVwOZsbT8loVq4QwC\n' +
  'WccsDajPALa2QrxrXBoXLpGeSXixuiJL6nhGt8nxAoGBANWoi9+OHehDJja64kN0\n' +
  '5sjwFMGg8vHDyH+NHVPe3zEFDqVLBxBy7/YHMd+BBrUtcz9MBP3auQJ4WeSvKH4C\n' +
  '65RWyQ1RtbdKEDr7uU+G26za+p+REeXeTxuCBIduF8uN4D59lws1IosiSRnq/kVz\n' +
  'IQD4FLAOKE5MtguRZxnGLTkT'
);

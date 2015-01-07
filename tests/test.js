describe('sha512', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('')).to.be('cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e');
        expect(sha512('The quick brown fox jumps over the lazy dog')).to.be('07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6');
        expect(sha512('The quick brown fox jumps over the lazy dog.', true)).to.be('91ea1245f20d46ae9a037a989f54f1f790f0a47607eeb8a14d12890cea77a1bbc6c7ed9cf205e67b7f2b8fd4c7dfd3a7a8617e45f3c463d481c7e586c39ac1ed');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('a8dedff31e3be9df6413ef5b4ecb93d62d3fbcb04297552eab5370e04afd45927854a4373037e81a50186e678d818c9ba824f4c850f3d0f02764af0252076979');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('中文')).to.be('8b88efc2ebbcbdad5ac2d65af05bec57bda25e71fd5fb25bbd892057a2755fbd05d8d8491cb2946febd5b0f124ffdfbaecf7e34946353c4f1b5ab29545895468');
        expect(sha512('aécio')).to.be('e1c6925243db76985abacaf9fa85e22697f549e67f65a36c88e4046a2260990ff9eefc3402396ea8dcbe8c592d8d5671bea612156eda38d3708d394bbd17d493');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('d24af1901aaf1458f089a6eddf784ce61c3012aee0df98bdb67ad2dc6b41a3b4051d40caac524373930ae396a2dde99a9204871b40892eea3e5f3c8d46da0c3c');
      });
    });
  });
});

describe('sha384', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('')).to.be('38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b');
        expect(sha384('The quick brown fox jumps over the lazy dog')).to.be('ca737f1014a48f4c0b6dd43cb177b0afd9e5169367544c494011e3317dbf9a509cb1e5dc1e85a941bbee3d7f2afbc9b1');
        expect(sha384('The quick brown fox jumps over the lazy dog.', true)).to.be('ed892481d8272ca6df370bf706e4d7bc1b5739fa2177aae6c50e946678718fc67a7af2819a021c2fc34e91bdb63409d7');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('3ab853dee5785c19346e8578d9cdb3b7258a8212c15fdf25d3055b4fbbc892a529e552788992fdae68dfa34f13f0af4e');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('中文')).to.be('93422ceb8291a69b22f02dc1114c39a287493ad525dcebc77e4019a44eaee2633a85d0f29cd298ee6799048c33a4be0c');
        expect(sha384('aécio')).to.be('a2146805faafc45b0055b49386768811c803ef9fa8a85b648e114276c1bf49ef1092ec1bc2d3f7e036238a97eace2087');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha384('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('432a8d25efb1a8d463acc7bbbed57365cddc72de3cc19d42e1d260b1479770ecea9dd403fead2949d4fabb36939f263a');
      });
    });
  });
});

describe('sha512/256', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('')).to.be('c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a');
        expect(sha512_256('The quick brown fox jumps over the lazy dog')).to.be('dd9d67b371519c339ed8dbd25af90e976a1eeefd4ad3d889005e532fc5bef04d');
        expect(sha512_256('The quick brown fox jumps over the lazy dog.', true)).to.be('1546741840f8a492b959d9b8b2344b9b0eb51b004bba35c0aebaac86d45264c3');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('21e2e940930b23f1de6377086d07e22033c6bbf3fd9fbf4b62ec66e6c08c25be');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('中文')).to.be('b6dab29c16ec35ab34a5d92ff135b58de96741dda78b1009a2181cf8b45d2f72');
        expect(sha512_256('aécio')).to.be('122802ca08e39c2ef46f6a81379dc5683bd8aa074dfb54259f0add4d8b5504bc');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_256('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('bd1abad59e6b8ad69bc17b6e05aa13f0cb725467fbeb45b83d3e4094332d1367');
      });
    });
  });
});

describe('sha512/224', function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('')).to.be('6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4');
        expect(sha512_224('The quick brown fox jumps over the lazy dog')).to.be('944cd2847fb54558d4775db0485a50003111c8e5daa63fe722c6aa37');
        expect(sha512_224('The quick brown fox jumps over the lazy dog.', true)).to.be('6d6a9279495ec4061769752e7ff9c68b6b0b3c5a281b7917ce0572de');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('2e962464977b198ee758d615bbc92251ad2e3c0960068e279fd21d2f');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('中文')).to.be('0f46a0ae7f226517dd66ece0ce1efa29ffb7ced05ac4566fdcaed188');
        expect(sha512_224('aécio')).to.be('562f2e4ee7f7451d20dcc6a0ac1a1e1c4a75f09baaf1cf19af3e15f4');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(sha512_224('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('009c3d1e3172d6df71344982eada855421592aea28acbf660ada7569');
      });
    });
  });
});
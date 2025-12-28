import '@testing-library/jest-dom';
import nodeCrypto from 'node:crypto';

// Polyfill for Node versions without crypto.hash (e.g., Node < 20) so
// packages that call crypto.hash (like @vitejs/plugin-vue) don't throw during tests.
{
  type HashFn = (algorithm: string, data: string | Buffer, encoding?: BufferEncoding) => string;
  type GlobalCryptoShim = { hash?: HashFn };
  const g = globalThis as unknown as { crypto?: GlobalCryptoShim };

  if (typeof g.crypto?.hash !== 'function') {
    const setHash = (obj: GlobalCryptoShim): boolean => {
      try {
        Object.defineProperty(obj, 'hash', {
          configurable: true,
          enumerable: false,
          writable: true,
          value: ((algorithm: string, data: string | Buffer, encoding?: BufferEncoding) => {
            const buf: Buffer = typeof data === 'string' ? Buffer.from(data, 'utf8') : data;
            const h = nodeCrypto.createHash(algorithm).update(buf).digest(encoding);
            return typeof h === 'string'
              ? h
              : encoding
                ? (h as Buffer).toString(encoding)
                : (h as Buffer).toString('hex');
          }) as HashFn,
        });
        return true;
      } catch {
        return false;
      }
    };

    if (g.crypto) {
      setHash(g.crypto);
    } else {
      Object.defineProperty(g, 'crypto', {
        configurable: true,
        enumerable: false,
        writable: true,
        value: {} as GlobalCryptoShim,
      });

      setHash(g.crypto!);
    }
  }
}

const a = o => {
    const t = new DataView(o);
    let n = '';
    for (let e = 0; e < t.byteLength; e += 4) n += t.getUint32(e).toString(16).padStart(8, '0');
    return n;
  },
  s =
    o =>
    async (t, { outputFormat: n = 'hex' } = {}) => {
      typeof t == 'string' && (t = new globalThis.TextEncoder().encode(t));
      const e = await globalThis.crypto.subtle.digest(o, t);
      return n === 'hex' ? a(e) : e;
    },
  c = s('SHA-1'),
  h = s('SHA-256'),
  i = s('SHA-384'),
  r = s('SHA-512');
export { c as sha1, h as sha256, i as sha384, r as sha512 };

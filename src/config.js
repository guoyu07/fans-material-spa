function queryMeta (name: string) {
  return document.head.querySelector(`meta[name="${name}"]`);
}

function parserURL (url: string) {
  let parser = document.createElement('a');
  parser.href = url;

  const { protocol, hostname, port, pathname, search, hash, host } = parser;

  return { protocol, hostname, port, pathname, search, hash, host };
}

export const api = {
  type: queryMeta('api-type').content,
  url: queryMeta('api-url').content,
};

export const publicUrl = queryMeta('public-url').content || '/';
export const browserBasename = parserURL(publicUrl).pathname;

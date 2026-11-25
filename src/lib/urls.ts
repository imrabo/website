const base = import.meta.env.BASE_URL;

export function siteUrl(path = "") {
  const clean = path.replace(/^\/+/, "");
  return `${base}${clean}`.replace(/\/{2,}/g, "/");
}

export function absoluteUrl(path = "") {
  return new URL(siteUrl(path), "https://ImRabogithub.io").toString();
}

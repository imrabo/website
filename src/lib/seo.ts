import { absoluteUrl } from "./urls";

export function seo(title: string, description: string, path = "") {
  return {
    title: `${title} | ImRabo`,
    description,
    canonical: absoluteUrl(path),
  };
}

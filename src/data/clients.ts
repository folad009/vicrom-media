import { encodePublicPath } from "../utils/publicPath";

export const clientLogos = Array.from({ length: 8 }, (_, i) =>
  encodePublicPath(`/images/clients/vicrom-client-${i + 1}.jpg`)
);

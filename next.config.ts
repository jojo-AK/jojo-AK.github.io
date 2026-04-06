import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Si tu déploies sur un repo nommé "portfolio_2" (pas jojo-AK.github.io),
  // décommente la ligne suivante en remplaçant par le nom exact de ton repo :
  // basePath: "/portfolio_2",
};

export default nextConfig;

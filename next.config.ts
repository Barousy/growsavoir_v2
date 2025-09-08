import type { NextConfig } from "next"
import { locales, defaultLocale } from "./src/i18n/config"

const nextConfig: NextConfig = {
  i18n: {
    locales,
    defaultLocale,
  },
}

export default nextConfig

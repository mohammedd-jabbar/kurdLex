import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ku", "en"],

  // Used when no locale matches
  defaultLocale: "ku",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ku)/:path*"],
};

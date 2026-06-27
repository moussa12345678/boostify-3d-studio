<?xml version="1.0" encoding="UTF-8"?>
<!--
  BOOSTIFY 3D Studio — Sitemap XSL Stylesheet
  =============================================
  Renders sitemap.xml as a professional, brand-aligned HTML page when
  viewed in a browser (instead of raw XML with "no style information"
  warning). Search engines ignore this stylesheet — they read the raw
  XML regardless. This is purely for human readability + brand polish.

  Design: dark theme matching the main BOOSTIFY site (bg-black, white
  text, monospace accents, Outfit headings).
-->
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
                exclude-result-prefixes="sm">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"
              doctype-system="about:legacy-compat" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, follow" />
        <title>Sitemap · BOOSTIFY 3D Studio</title>
        <meta name="description" content="XML sitemap for the BOOSTIFY 3D Studio website — lists all canonical URLs available for search engine indexing." />
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            background-color: #000000;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, system-ui, sans-serif;
            min-height: 100vh;
            line-height: 1.6;
            padding: 4rem 1.5rem 6rem;
          }
          .container { max-width: 960px; margin: 0 auto; }
          .brand {
            display: flex; align-items: center; gap: 0.5rem;
            font-family: ui-monospace, "JetBrains Mono", SFMono-Regular, Menlo, monospace;
            font-size: 0.875rem; letter-spacing: 0.4em; font-weight: 700;
            color: #ffffff; margin-bottom: 2rem;
          }
          .brand .dot {
            width: 6px; height: 6px; background: #ffffff; border-radius: 50%;
            display: inline-block; opacity: 0.8;
          }
          h1 {
            font-family: "Outfit", "Inter", sans-serif;
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 700; letter-spacing: -0.02em;
            line-height: 1.05; text-transform: uppercase;
            margin-bottom: 1rem;
          }
          .subtitle {
            color: rgba(255,255,255,0.5);
            font-size: 0.95rem; font-weight: 300;
            max-width: 640px; margin-bottom: 3rem;
          }
          .meta {
            display: flex; flex-wrap: wrap; gap: 2rem;
            padding: 1.25rem 0; margin-bottom: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            font-family: ui-monospace, "JetBrains Mono", monospace;
            font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase;
            color: rgba(255,255,255,0.5);
          }
          .meta strong { color: #ffffff; font-weight: 500; }
          .table-wrap { overflow-x: auto; }
          table { width: 100%; border-collapse: collapse; min-width: 600px; }
          thead th {
            text-align: left; padding: 0.875rem 1rem;
            font-family: ui-monospace, "JetBrains Mono", monospace;
            font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
            color: rgba(255,255,255,0.4); font-weight: 500;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          tbody td {
            padding: 1rem; font-size: 0.875rem;
            border-bottom: 1px solid rgba(255,255,255,0.05);
            vertical-align: middle;
          }
          tbody tr:hover { background: rgba(255,255,255,0.02); }
          .url-cell a {
            color: #ffffff; text-decoration: none;
            font-family: ui-monospace, "JetBrains Mono", monospace;
            font-size: 0.8125rem; word-break: break-all;
            transition: color 0.2s ease;
          }
          .url-cell a:hover { color: rgba(255,255,255,0.7); }
          .url-cell .path {
            color: rgba(255,255,255,0.4); margin-left: 0.5rem;
          }
          .badge {
            display: inline-block; padding: 0.2rem 0.6rem;
            font-family: ui-monospace, "JetBrains Mono", monospace;
            font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase;
            border: 1px solid rgba(255,255,255,0.15);
            color: rgba(255,255,255,0.7); border-radius: 999px;
          }
          .badge.home { color: #ffffff; border-color: rgba(255,255,255,0.4); }
          .mono {
            font-family: ui-monospace, "JetBrains Mono", monospace;
            font-size: 0.75rem; color: rgba(255,255,255,0.5);
          }
          .priority-bar {
            display: inline-block; height: 4px; background: rgba(255,255,255,0.1);
            border-radius: 2px; vertical-align: middle; margin-right: 0.5rem;
            position: relative; overflow: hidden;
          }
          .priority-bar::after {
            content: ''; position: absolute; left: 0; top: 0; height: 100%;
            background: #ffffff; border-radius: 2px;
            width: var(--p, 0%);
          }
          .footer {
            margin-top: 4rem; padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.05);
            font-family: ui-monospace, "JetBrains Mono", monospace;
            font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
            color: rgba(255,255,255,0.3);
            display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
          }
          .footer a { color: rgba(255,255,255,0.5); text-decoration: none; }
          .footer a:hover { color: #ffffff; }
          .info-banner {
            background: rgba(255,255,255,0.03);
            border-left: 2px solid rgba(255,255,255,0.3);
            padding: 1rem 1.25rem; margin-bottom: 2rem;
            font-size: 0.8125rem; color: rgba(255,255,255,0.6);
          }
          .info-banner strong { color: #ffffff; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="brand">
            BOOSTIFY<span class="dot"></span>
          </div>

          <h1>Sitemap</h1>
          <p class="subtitle">
            This is the XML sitemap for the BOOSTIFY 3D Studio website,
            automatically read by search engines like Google and Bing to
            discover all canonical URLs available for indexing.
          </p>

          <div class="info-banner">
            <strong>For search engines:</strong> this URL is the canonical sitemap.
            Submit it at <em>https://moussa12345678.github.io/boostify-3d-studio/sitemap.xml</em>
            in Google Search Console or Bing Webmaster Tools.
          </div>

          <div class="meta">
            <div>Total URLs: <strong><xsl:value-of select="count(sm:urlset/sm:url)" /></strong></div>
            <div>Last modified: <strong><xsl:value-of select="sm:urlset/sm:url[1]/sm:lastmod" /></strong></div>
            <div>Format: <strong>Sitemap 0.9</strong></div>
          </div>

          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>Last modified</th>
                  <th>Change freq</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sm:urlset/sm:url">
                  <xsl:variable name="loc" select="sm:loc" />
                  <xsl:variable name="priority" select="sm:priority" />
                  <xsl:variable name="priorityPercent" select="round(number($priority) * 100)" />
                  <xsl:variable name="isHome" select="substring($loc, string-length($loc)) = '/' and string-length($loc) - string-length(translate($loc, '/', '')) = 4" />
                  <tr>
                    <td class="mono"><xsl:value-of select="position()" /></td>
                    <td class="url-cell">
                      <a href="{$loc}">
                        <xsl:choose>
                          <xsl:when test="contains($loc, '/boostify-3d-studio/')">
                            <xsl:value-of select="substring-after($loc, '/boostify-3d-studio')" />
                          </xsl:when>
                          <xsl:otherwise>
                            <xsl:value-of select="$loc" />
                          </xsl:otherwise>
                        </xsl:choose>
                      </a>
                      <xsl:if test="$isHome">
                        <span class="path">← home</span>
                      </xsl:if>
                    </td>
                    <td class="mono"><xsl:value-of select="sm:lastmod" /></td>
                    <td>
                      <span class="badge">
                        <xsl:value-of select="sm:changefreq" />
                      </span>
                    </td>
                    <td>
                      <span class="priority-bar" style="--p: {$priorityPercent}%;"></span>
                      <span class="mono"><xsl:value-of select="$priority" /></span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer">
            <div>© 2026 BOOSTIFY 3D Studio · All Rights Reserved</div>
            <div>
              <a href="https://moussa12345678.github.io/boostify-3d-studio/">← Back to site</a>
            </div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * AssetsCssLinks
 * Injects <link> tags for assets/common.css and screen CSS files into the document head in strict order.
 * Also injects Google Fonts used by the Figma file so typography matches exactly.
 * This avoids CRA's restriction on importing CSS outside of src.
 *
 * Notes:
 * - Files are served from the web root at /assets/*.css.
 * - Load order (critical):
 *   1) /assets/common.css
 *   2) /assets/desktop-1-screen_13-2.css
 *   3) /assets/desktop1-13-2.css
 */
const AssetsCssLinks = () => {
  useEffect(() => {
    const created = [];

    const log = (...args) => {
      // eslint-disable-next-line no-console
      console.log('[AssetsCssLinks]', ...args);
    };

    const addLink = (href) => {
      return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href; // absolute path from root
        link.onload = () => {
          log('Loaded stylesheet:', href);
          resolve(link);
        };
        link.onerror = () => {
          // eslint-disable-next-line no-console
          console.error('[AssetsCssLinks] Failed to load stylesheet:', href);
          reject(new Error(`Failed to load CSS: ${href}`));
        };
        document.head.appendChild(link);
        created.push(link);
      });
    };

    const addScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.onload = () => {
          log('Loaded script:', src);
          resolve(script);
        };
        script.onerror = () => {
          // eslint-disable-next-line no-console
          console.error('[AssetsCssLinks] Failed to load script:', src);
          reject(new Error(`Failed to load script: ${src}`));
        };
        document.body.appendChild(script);
        created.push(script);
      });
    };

    const fontsHref =
      'https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@200;400;500;700&family=Sansita+Swashed:wght@400;700&display=swap';
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = fontsHref;
    document.head.appendChild(fontLink);
    created.push(fontLink);
    log('Injected Google Fonts link');

    // Load CSS sequentially to guarantee cascade order
    const chain = Promise.resolve()
      .then(() => addLink('/assets/common.css'))
      .then(() => addLink('/assets/desktop-1-screen_13-2.css'))
      .then(() => addLink('/assets/desktop1-13-2.css'))
      // Note: Do NOT inject /assets/desktop1-13-2.js in SPA to avoid parsing HTML as JS on 404s.
      // The SPA re-implements interactions in React; loading this script is unnecessary and can cause
      // "Unexpected token <" if the server returns index.html for unknown paths.
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('[AssetsCssLinks] One or more assets failed to load:', err);
      });

    // retain reference to avoid unhandled rejection
    void chain;

    return () => {
      // Clean up on unmount
      created.forEach((node) => {
        if (node && node.parentNode) {
          node.parentNode.removeChild(node);
        }
      });
    };
  }, []);

  return null;
};

export default AssetsCssLinks;

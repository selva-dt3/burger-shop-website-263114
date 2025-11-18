import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * AssetsCssLinks
 * Injects <link> tags for assets/common.css and assets/desktop1-13-2.css into the document head.
 * Also injects Google Fonts used by the Figma file so typography matches exactly.
 * This avoids CRA's restriction on importing CSS outside of src.
 *
 * Notes:
 * - Files must be available at /assets/common.css and /assets/desktop1-13-2.css (public root).
 * - Fonts link: Lexend Zetta and Sansita Swashed.
 */
const AssetsCssLinks = () => {
  useEffect(() => {
    const created = [];

    // Google Fonts
    const fontsHref = 'https://fonts.googleapis.com/css2?family=Lexend+Zetta:wght@200;400;500;700&family=Sansita+Swashed:wght@400;700&display=swap';
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = fontsHref;
    document.head.appendChild(fontLink);
    created.push(fontLink);

    // External CSS assets
    ['/assets/common.css', '/assets/desktop1-13-2.css'].forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      created.push(link);
    });

    return () => {
      // Clean up on unmount
      created.forEach(link => {
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return null;
};

export default AssetsCssLinks;

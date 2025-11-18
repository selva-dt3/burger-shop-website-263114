import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * AssetsCssLinks
 * Injects <link> tags for assets/common.css and assets/desktop1-13-2.css into the document head.
 * This avoids CRA's restriction on importing CSS outside of src.
 *
 * Notes:
 * - Files must be available at /assets/common.css and /assets/desktop1-13-2.css (public root).
 */
const AssetsCssLinks = () => {
  useEffect(() => {
    const links = [
      '/assets/common.css',
      '/assets/desktop1-13-2.css',
    ].map(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      // Clean up on unmount
      links.forEach(link => {
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return null;
};

export default AssetsCssLinks;

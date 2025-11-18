import React from 'react';
import PropTypes from 'prop-types';
import AssetsCssLinks from './AssetsCssLinks';

/**
README - Usage

Example:
  import Desktop1132 from '../components/Desktop1132';

  export default function Desktop1132Page() {
    return (
      <Desktop1132
        brandText="BURGUR CLUB"
        heroTitle="THE ULTIMATE"
        heroHeading="Burger Club "
        heroSubtitle="Savor the Flavor, Join the Club!"
        menuItems={['Home', 'Menu', 'About', 'Shop']}
        ariaLabels={{
          navbar: 'Primary',
          heroGroup: 'Hero Title Group',
          dotsGroup: 'Pagination Dots'
        }}
      />
    );
  }

Notes:
- This component reproduces the fixed-size layout from assets/desktop1-13-2.html.
- It relies on shared design tokens from /assets/common.css and screen styles from /assets/desktop-1-screen_13-2.css and /assets/desktop1-13-2.css, injected via <link> tags.
- Images are referenced via absolute path under /assets/figmaimages as served from the public root.
- IMPORTANT: Structure, IDs and element nesting mirror assets/desktop1-13-2.html so absolute CSS selectors bind 1:1.
*/

// PUBLIC_INTERFACE
function Desktop1132({
  brandText,
  heroTitle,
  heroHeading,
  heroSubtitle,
  menuItems,
  ariaLabels,
}) {
  // Ensure stable 4-item order matching static HTML
  const [home = 'Home', menu = 'Menu', about = 'About', shop = 'Shop'] = menuItems || [];

  // Exact icon path from assets, include fixed size to avoid layout shift
  const dotImageSrc = '/assets/figmaimages/figma_image_15_12.svg';

  return (
    <>
      <AssetsCssLinks />
      {/* Screen root: fixed artboard with relative positioning */}
      <main
        className="screen-desktop-1"
        role="main"
        aria-label="Desktop-1 screen 13:2"
        data-id="13:2"
      >
        {/* Ellipse 2 */}
        <div id="el-15-6" aria-hidden="true" data-id="15:6"></div>

        {/* Ellipse 1 */}
        <div id="el-15-3" aria-hidden="true" data-id="15:3"></div>

        {/* Group 1 - Hero (structure matches static HTML: inner wrapper then three absolute text nodes) */}
        <section id="grp-13-26" aria-label={ariaLabels?.heroGroup || 'Hero Title Group'} data-id="13:26">
          <div id="grp-13-26-inner">
            <h2 id="txt-13-25" data-id="13:25" className="u-anim-base">{heroTitle}</h2>
            <h1 id="txt-13-24" data-id="13:24" className="u-anim-base">{heroHeading}</h1>
            <p id="txt-15-43" data-id="15:43" className="u-anim-base">{heroSubtitle}</p>
          </div>
        </section>

        {/* Placeholder rectangle per YAML (no imagePath) */}
        <div id="rect-15-2" aria-hidden="true" data-id="15:2"></div>

        {/* Frames 5-8 (absolute white rounded rectangles) */}
        <div id="frm-15-7" aria-hidden="true" data-id="15:7"></div>
        <div id="frm-15-8" aria-hidden="true" data-id="15:8"></div>
        <div id="frm-15-9" aria-hidden="true" data-id="15:9"></div>
        <div id="frm-15-10" aria-hidden="true" data-id="15:10"></div>

        {/* Group 2 - Dots: first is an SVG icon, others are styled div ellipses */}
        <div id="grp-15-15" role="group" aria-label={ariaLabels?.dotsGroup || 'Pagination Dots'} data-id="15:15">
          <div id="grp-15-15-inner">
            <img
              id="dot-15-12-img"
              src={dotImageSrc}
              width="20"
              height="20"
              alt="Active dot"
              data-id="15:12"
            />
            <div id="dot-15-13" aria-hidden="true" data-id="15:13"></div>
            <div id="dot-15-14" aria-hidden="true" data-id="15:14"></div>
          </div>
        </div>

        {/* Navbar: exact nested structure and IDs so CSS absolute positions apply */}
        <nav id="navbar-13-4" aria-label={ariaLabels?.navbar || 'Primary'} data-id="13:4">
          <div id="navbar-13-4-inner">
            {/* Brand */}
            <span id="nav-brand-13-18" data-id="13:18">{brandText}</span>

            {/* Frame 1 (Home) */}
            <div id="nav-fr-13-5" className="nav-item u-anim-base" data-id="13:5" data-label={home} role="link" tabIndex={0}>
              <span className="txt">{home}</span>
            </div>

            {/* Frame 2 (Menu) */}
            <div id="nav-fr-13-7" className="nav-item u-anim-base" data-id="13:7" data-label={menu} role="link" tabIndex={0}>
              <span className="txt">{menu}</span>
            </div>

            {/* Frame 3 (About) */}
            <div id="nav-fr-13-11" className="nav-item u-anim-base" data-id="13:11" data-label={about} role="link" tabIndex={0}>
              <span className="txt">{about}</span>
            </div>

            {/* Frame 4 (Shop) */}
            <div id="nav-fr-13-13" className="nav-item u-anim-base" data-id="13:13" data-label={shop} role="link" tabIndex={0}>
              <span className="txt">{shop}</span>
            </div>
          </div>
        </nav>
      </main>
    </>
  );
}

Desktop1132.propTypes = {
  /** Brand text on the navbar left */
  brandText: PropTypes.string,
  /** Small hero title above main heading */
  heroTitle: PropTypes.string,
  /** Main hero heading text */
  heroHeading: PropTypes.string,
  /** Hero subtitle/tagline text */
  heroSubtitle: PropTypes.string,
  /** Menu items in order: [Home, Menu, About, Shop] */
  menuItems: PropTypes.arrayOf(PropTypes.string),
  /** Aria labels for regions */
  ariaLabels: PropTypes.shape({
    navbar: PropTypes.string,
    heroGroup: PropTypes.string,
    dotsGroup: PropTypes.string,
  }),
};

Desktop1132.defaultProps = {
  brandText: 'BURGUR CLUB',
  heroTitle: 'THE ULTIMATE',
  heroHeading: 'Burger Club ',
  heroSubtitle: 'Savor the Flavor, Join the Club!',
  menuItems: ['Home', 'Menu', 'About', 'Shop'],
  ariaLabels: {
    navbar: 'Primary',
    heroGroup: 'Hero Title Group',
    dotsGroup: 'Pagination Dots',
  },
};

export default Desktop1132;

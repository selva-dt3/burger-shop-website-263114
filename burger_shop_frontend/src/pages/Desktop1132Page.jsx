import React from 'react';
import Desktop1132 from '../components/Desktop1132';

/**
 * PUBLIC_INTERFACE
 * Desktop1132Page
 * A sample page to demonstrate the Desktop1132 component with optional prop overrides.
 */
export default function Desktop1132Page() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        // Use safe fallback if CSS variables not yet loaded
        background: 'var(--color-12372a, #12372a)',
      }}
    >
      <Desktop1132
        // Example of overriding any text:
        // brandText="BURGER CLUB"
        // heroTitle="WELCOME TO"
        // heroHeading="Burger Club"
        // heroSubtitle="Taste Crafted Daily"
        // menuItems={['Home', 'Menu', 'About', 'Shop']}
      />
    </div>
  );
}

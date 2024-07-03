// next.config.js
const nextConfig = {
    // Configuring the domains for images
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'worldvectorlogo.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
        ],
      },
    
};

export default nextConfig;

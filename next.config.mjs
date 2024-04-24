/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { defaultLoaders }) => {
      config.module.rules.push({
        test: /\.(txt|md)$/,
        use: [
          defaultLoaders.babel,
          {
            loader: 'raw-loader',
          },
        ],
      })
      return config
    },
  }
  
  export default nextConfig;
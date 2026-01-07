import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type, image, url, jsonLd }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

SEO.defaultProps = {
    title: 'Frame Digital Studio',
    description: 'Soluciones digitales premium.',
    keywords: 'desarrollo web, diseño, digital',
    name: 'Frame Digital Studio',
    type: 'website',
    url: 'https://framedigitalstudio.vercel.app/',
    image: null
};

export default SEO;

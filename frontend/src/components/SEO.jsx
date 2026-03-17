import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Panjara Agro';
const BASE_URL = 'https://panjara-agro.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export default function SEO({
    title,
    description,
    path = '/',
    keywords = '',
    type = 'website',
    image = DEFAULT_OG_IMAGE,
    schema = null,
}) {
    const fullTitle = path === '/'
        ? `${title} | ${SITE_NAME}`
        : `${title} — ${SITE_NAME}`;
    const canonicalUrl = `${BASE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}

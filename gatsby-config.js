module.exports = {
	siteMetadata: {
		title: `Abéliné`,
		author: `Sébastien`,
		description: `Blog perso de découverte ou redécouverte de sciences`,
		siteUrl: `https://abeline.fr/`,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
							quality: 100,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: '÷',
						},
					},
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank',
						},
					},
					`gatsby-remark-katex`,
					`gatsby-remark-autolink-headers`,
					`gatsby-remark-emoji`,
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Blog Abéliné`,
				short_name: `Abéliné`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#1ca086`,
				display: `minimal-ui`,
				icon: `content/assets/abeline.png`,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: `./static/favicon.ico`,
			},
		},
	],
};

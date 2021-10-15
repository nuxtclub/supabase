import path from 'path'

export default function (moduleOptions) {
	const options = Object.assign({}, this.options.supabase, moduleOptions)

	this.nuxt.options.build.transpile.push(
		'@supabase/supabase-js',
		'@supabase/gotrue-js',
		'@supabase/postgrest-js',
		'@supabase/realtime-js',
		'@supabase/storage-js'
	)

	this.addPlugin({
		src: path.resolve(__dirname, 'plugin.js'),
		options: {
			...options,
			options: options,
		},
	})
}

module.exports.meta = require('../package.json')

# @nuxtclub/supabase

## Setup

1. Add `@nuxtclub/supabase` dependency to your project

```bash
npm i -D @nuxtclub/supabase
```

2. Add `@nuxtclub/supabase` to the `buildModules` section of `nuxt.config.js`

```javascript
export default {
	buildModules: [
		[
			'@nuxtclub/supabase',
			{
				url: 'YOUR_SUPABASE_URL',
				key: 'YOUR_SUPABASE_KEY',
			},
		],
	],
}
```

## Using top level options

```javascript
export default {
	buildModules: ['@nuxtclub/supabase'],
	supabase: {
		url: 'YOUR_SUPABASE_URL',
		key: 'YOUR_SUPABASE_KEY',
	},
}
```

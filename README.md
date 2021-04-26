# @nuxtclub/supabase

## Setup

1. Add `@nuxtclub/supabase` dependency to your project

```bash
npm i -D @nuxtclub/supabase
```

2. Add `@nuxtclub/supabase` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

```javascript
export default {
	buildModules: [
		[
			'@nuxtclub/supabase',
			{
				/* module options */
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
		/* module options */
	},
}
```

# Typescript support

Add the types to your `"types"` array in `tsconfig.json` after the `@nuxt/types` entry.

:warning: Use `@nuxt/vue-app` instead of `@nuxt/types` for nuxt < 2.9.

```json
{
	"compilerOptions": {
		"types": ["@nuxt/types", "@nuxtclub/supabase"]
	}
}
```

## Configuration

To start using Supabase in your project you should place the URL and the public API KEY of your Supabase project.

You can find this data on the administration panel of your project > Settings > API.

Be sure to copy your **public key**, not your private key.

```javascript
export default {
	supabase: {
		url: 'YOUR_SUPABASE_URL',
		key: 'YOUR_SUPABASE_KEY',
	},
}
```

## Usage

This module will inject $supabase in the context of your application.

Using $supabase you can access to the SupabaseClient object of the [Supabase Client for JavaScript](https://supabase.io/docs/reference/javascript/supabase-client).

### Shortcuts

This module also inject $supaAuth & $supaStorage that are nothing more than a shorcut for $supabase.auth and $supabase.storage.

## Examples

### Fetching data

```vue
<template>
	<div>
		<h1>Recipes</h1>
		<ul>
			<li v-for="recipe in recipes" :key="recipe.id">
				{{ recipe.name }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	middleware: 'authenticated',
	async asyncData({ $supabase }) {
		const { data } = await $supabase.from('recipes').select('*')
		return { recipes: data }
	},
}
</script>
```

### Authentication:

Create a page to **sign in**:

```vue
<!-- ~/pages/sign-in -->
<template>
	<form @submit.prevent="submit()">
		<input type="email" v-model="email" />
		<input type="password" v-model="password" />
		<button type="submit">Sign In</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		submit() {
			this.$supabase.auth
				.signIn({
					email: this.email,
					password: this.password,
				})
				.then(({ error, data }) => {
					if (error) {
						alert(error.message)
					} else {
						this.$router.push('/')
					}
				})
		},
	},
}
</script>
```

To make the **sign up** page copy the same code and change the `signIn` function by `signUp`.

Create a Middleware to protect your routes:

```javascript
// ~/middleware/authenticated.js
export default ({ $supabase, redirect }) => {
	if (!$supabase.auth.session()) {
		return redirect('/sign-in')
	}
}
```

Protect the home page using previously created middleware.

```vue
<!-- ~/pages/index.vue -->
<template>
	<div>
		<h1>You're authenticated!</h1>
		<button @click="signOut()">Sign Out</button>
	</div>
</template>

<script>
export default {
	middleware: 'authenticated',
	methods: {
		signOut() {
			this.$supabase.auth.signOut().then(({ error }) => {
				if (error) {
					console.error(error)
				} else {
					this.$router.push('/sign-in')
				}
			})
		},
	},
}
</script>
```

Learn more about Supabase [here](https://supabase.io/docs/reference/javascript/supabase-client).

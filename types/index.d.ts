import { SupabaseClient } from '@supabase/supabase-js'

declare module '@nuxt/vue-app' {
	interface Context {
		$supabase: SupabaseClient
	}
}

declare module '@nuxt/types' {
	interface Context {
		$supabase: SupabaseClient
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$supabase: SupabaseClient
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$supabase: SupabaseClient
	}
}

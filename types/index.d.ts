import { SupabaseClient } from '@supabase/supabase-js'
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/main/lib/SupabaseAuthClient'
import { SupabaseStorageClient } from '@supabase/storage-js/dist/main/SupabaseStorageClient'

interface SupabaseConfig {
	url: string
	key: string
}

declare module '@nuxt/types/config/index' {
	interface NuxtOptions {
		supabase: SupabaseConfig
	}
}

declare module '@nuxt/vue-app' {
	interface Context {
		$supabase: SupabaseClient
		$supaAuth: SupabaseAuthClient
		$supaStorage: SupabaseStorageClient
	}
}

declare module '#app' {
	interface NuxtApp {
		$supabase: SupabaseClient
		$supaAuth: SupabaseAuthClient
		$supaStorage: SupabaseStorageClient
	}
}

declare module 'nuxt3' {
	interface NuxtApp {
		$supabase: SupabaseClient
		$supaAuth: SupabaseAuthClient
		$supaStorage: SupabaseStorageClient
	}
}

declare module '@nuxt/types' {
	interface Context {
		$supabase: SupabaseClient
		$supaAuth: SupabaseAuthClient
		$supaStorage: SupabaseStorageClient
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$supabase: SupabaseClient
		$supaAuth: SupabaseAuthClient
		$supaStorage: SupabaseStorageClient
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$supabase: SupabaseClient
		$supaAuth: SupabaseAuthClient
		$supaStorage: SupabaseStorageClient
	}
}

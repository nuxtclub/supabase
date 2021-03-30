import { createClient } from '@supabase/supabase-js'

export default function(_, inject) {
	const client = createClient('<%= options.url %>', '<%= options.key %>')
	inject('supabase', client)
}

'use server'

import { revalidatePath } from 'next/cache'

export async function reloadPokemonList() {
  revalidatePath('/pokemon')
}
'use server'

import { revalidatePath } from 'next/cache'

export async function reloadPokemonDetail(name: string) {
  revalidatePath(`/pokemon/${ name }`, 'layout')
}
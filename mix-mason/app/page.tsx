import Image from 'next/image'

import { SpotifyApi } from '@spotify/web-api-ts-sdk'
import Link from 'next/link';



export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <Link href="/songs">Songs</Link>
    </main>
  )
}

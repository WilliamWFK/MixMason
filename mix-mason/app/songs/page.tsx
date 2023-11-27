import React from 'react'
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

interface Songs {

}




const SongsPage = async () => {
    const sdk = SpotifyApi.withClientCredentials("f3e3697d9a1148c8a72fc17d929cde31", "c15b0480e9204ddcabac222bce3e9494");
    const songs = await sdk.search("Genshin Impact", ["artist"])


    return (
        <>
            <h1 className ='pl-3.5'>Songs</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th><b>Artist</b></th>
                        <th><b>Followers</b></th>
                        <th><b>Popularity</b></th>
                    </tr>
                </thead>
                <thead>
                    {songs.artists.items.map(item => <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.followers.total}</td>
                        <td>{item.popularity}</td></tr>)}
                </thead>
            </table>
        </>
    )
}

export default SongsPage
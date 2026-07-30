import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"


export const GifFinder = () => {
    const [gif, setGif] = useState<Gif[]>([]);
    const [previousTerm, setPreviousTerm] = useState<string[]>([])

    const handleTermClicked = (term: string) => {
        console.log({ term })
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerm.includes(query)) return;

        setPreviousTerm([query, ...previousTerm].slice(0, 8))

        const gifs = await getGifByQuery(query);

        setGif(gifs)

    }
    return (
        <>
            <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />

            <SearchBar placeholder="busca lo que quieras" onQuery={handleSearch} />

            <PreviousSearches searches={previousTerm} onLabelClicked={handleTermClicked} />

            <GifList gifs={gif} />
        </>
    )
}

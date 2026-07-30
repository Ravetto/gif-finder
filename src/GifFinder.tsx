import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs-mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifFinder = () => {
    const [previousTerm, setPreviousTerm] = useState(['dragon ball z'])

    const handleTermClicked = (term: string) => {
        console.log({ term })
    }

    const handleSearch = (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerm.includes(query)) return;

        setPreviousTerm([query, ...previousTerm].slice(0, 8))

        // query.toLowerCase()
        // query.trim()
        // if (previousTerm.includes(query)) {
        //     return
        // } else (() => {
        //     setPreviousTerm([...previousTerm, query])
        // })
        // console.log({ query })
    }
    return (
        <>
            <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />

            <SearchBar placeholder="busca lo que quieras" onQuery={handleSearch} />

            <PreviousSearches searches={previousTerm} onLabelClicked={handleTermClicked} />

            <GifList gifS={mockGifs} />
        </>
    )
}

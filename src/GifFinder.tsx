
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { useGifs } from "./gifs/hooks/useGifs"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"



export const GifFinder = () => {
    const { previousTerm, gif, handleSearch, handleTermClicked } = useGifs()

    return (
        <>
            <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />

            <SearchBar placeholder="busca lo que quieras" onQuery={handleSearch} />

            <PreviousSearches searches={previousTerm} onLabelClicked={handleTermClicked} />

            <GifList gifs={gif} />
        </>
    )
}

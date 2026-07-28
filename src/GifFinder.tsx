import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs-mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"


export const GifFinder = () => {
    return (
        <>
            <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />

            <SearchBar placeholder="busca lo que quieras" />

            <PreviousSearches searches={['goku', 'Saitama', 'Elden Ring']} />

            <GifList gifS={mockGifs} />
        </>
    )
}

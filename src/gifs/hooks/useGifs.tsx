import { useRef, useState } from 'react'
import type { Gif } from '../interfaces/gif.interface';
import { getGifByQuery } from '../actions/get-gifs-by-query.action';



export const useGifs = () => {
    const [gif, setGif] = useState<Gif[]>([]);
    const [previousTerm, setPreviousTerm] = useState<string[]>([])

    const gifCache = useRef<Record<string, Gif[]>>({})

    const handleTermClicked = async (term: string) => {
        if (gifCache.current[term]) {
            setGif(gifCache.current[term])
            return
        }
        const gifs = await getGifByQuery(term);

        setGif(gifs)
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerm.includes(query)) return;

        setPreviousTerm([query, ...previousTerm].slice(0, 8))

        const gifs = await getGifByQuery(query);

        setGif(gifs)
        gifCache.current[query] = gifs;

    }
    return {
        /*Values:*/
        previousTerm,
        gif,
        /*Methods:*/
        handleSearch,
        handleTermClicked
    }
}

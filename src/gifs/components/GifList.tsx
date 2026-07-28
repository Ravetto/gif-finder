import type { FC } from 'react'
import type { Gif } from "../../mock-data/gifs-mock"

interface Props {
    gifS: Gif[]
}

export const GifList: FC<Props> = ({ gifS }) => {
    return (
        <div className="gifs-container">
            {
                gifS.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>{gif.height}x{gif.width} (1.5mb)</p>
                    </div>
                ))
            }
        </div>
    )
}

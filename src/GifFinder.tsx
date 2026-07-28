import { mockGifs } from "./mock-data/gifs-mock"


export const GifFinder = () => {
    return (
        <>
            <div className="content-center">
                <h1>Buscador de gifs</h1>
                <p>Descubre y comparte el gif perfecto</p>
            </div>

            <div className="search-container">
                <input type="text" name="" id="" placeholder="buscar gifs" />
                <button>Buscar</button>
            </div>

            <div className="previous-searches">
                <h2>Busquedas previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Elden Rings</li>
                </ul>
            </div>

            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>{gif.height}x{gif.width} (1.5mb)</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

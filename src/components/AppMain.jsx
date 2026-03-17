import { useState, useEffect } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])
    const [actresses, setActresses] = useState([])
    function getActors() {

        const api_actors = `https://lanciweb.github.io/demo/api/actors/`
        const api_actresses = `https://lanciweb.github.io/demo/api/actresses/`

        fetch(api_actors)
            .then(res => res.json())
            .then(actors => {
                setActors(actors)
            })

        fetch(api_actresses)
            .then(res => res.json())
            .then(actresses => {
                setActresses(actresses)
            })
    }

    useEffect(() => {
        getActors()
    }, [])

    return (
        <main>
            <section>
                <div className="container">
                    <div className="row row-cols-3">
                        {
                            actors.map((actor) => (

                                <div key={actor.id} className="col my-3" >
                                    <div className="card h-100 text-center bg_Card">
                                        <h5 className="card-title text-white">{actor.name}</h5>
                                        <img src={actor.image} className="card-img-top p-5 pb-0" alt="..." />
                                        <span className="text-white">{actor.birth_year}, {actor.nationality}</span>
                                        <div className="card-body ">
                                            <p className="card-text text-white">{actor.biography}</p>
                                            <div className="fw-bolder mb-0 text-danger">Known for:</div>
                                            <p className="card-text text-danger "> {actor.known_for.join(', ')} </p>
                                            <div className="fw-bolder mb-0 text-warning">Awards:</div>
                                            <p className="card-text text-warning">{actor.awards.join(' ,')}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                        {
                            actresses.map((actresse) => (
                                <div key={actresse.id} className="col my-3" >
                                    <div className="card  h-100 text-center bg_Card">
                                        <h5 className="card-title text-white">{actresse.name}</h5>
                                        <img src={actresse.image} className="card-img-top p-5 pb-0" alt="..." />
                                        <span className="text-white">{actresse.birth_year}, {actresse.nationality}</span>
                                        <div className="card-body ">
                                            <p className="card-text text-white">{actresse.biography}</p>
                                            <div className="fw-bolder mb-0 text-danger">Known for:</div>
                                            <p className="card-text text-danger "> {actresse.most_famous_movies.join(', ')} </p>
                                            <div className="fw-bolder mb-0 text-warning">Awards:</div>
                                            <p className="card-text text-warning">{actresse.awards.join(', ')}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div >
            </section>
        </main >
    )
}
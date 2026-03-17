import { useState, useEffect } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])

    function getActor() {

        const api_actors = `https://lanciweb.github.io/demo/api/actors/`

        fetch(api_actors)
            .then(res => res.json())
            .then(data => {
                setActors(data)
            })
    }

    useEffect(() => {
        getActor()
    }, [])

    return (
        <main>
            <section>
                <div className="container">
                    <div className="row row-cols-3">
                        {
                            actors.map((actor, index) => (

                                <div key={index} className="col " >
                                    <div className="card text-center mb-2 bg_Card">
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
                    </div>
                </div >
            </section>
        </main >
    )
}
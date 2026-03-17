import { useState, useEffect } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])
    const [actresses, setActresses] = useState([])

    const allActors = [...actors, ...actresses]
    console.log(allActors);

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
                            allActors.map((person, index) => (

                                <div key={index} className="col my-3" >
                                    <div className="card h-100 text-center bg_Card">
                                        <h5 className="card-title text-white">{person.name}</h5>
                                        <img src={person.image} className="card-img-top p-5 pb-0" alt="..." />
                                        <span className="text-white">{person.birth_year}, {person.nationality}</span>
                                        <div className="card-body ">
                                            <p className="card-text text-white">{person.biography}</p>
                                            <div className="fw-bolder mb-0 text-danger">Known for:</div>
                                            {person.known_for ? <p className="card-text text-danger "> {person.known_for.join(', ')} </p> :
                                                <p className="card-text text-danger "> {person.most_famous_movies.join(', ')} </p>}
                                            <div className="fw-bolder mb-0 text-warning">Awards:</div>
                                            <p className="card-text text-warning">{person.awards.join(' ,')}</p>
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
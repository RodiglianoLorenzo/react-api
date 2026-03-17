import { useState, useEffect } from "react"

export default function AppMain() {

    const [actors, setActors] = useState([])

    function getActor() {

        const api_actors = `https://lanciweb.github.io/demo/api/actors/`

        fetch(api_actors)
            .then(res => res.json())
            .then(data => {
                setActors(data)
                console.log(actors)
            })
    }

    useEffect(() => {
        getActor()
    }, [])

    return (
        <main>
            <section>
                {
                    actors.map((actor, index) => (

                        <div key={index}>
                            {console.log(actor)}

                        </div >

                    ))

                }
            </section>
        </main >
    )
}
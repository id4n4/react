import { useRickAndMorty } from "../hooks/useRickAndMorty"

const bg = {
  Dead: {
    background: '#EF0C1A',
    color: 'white'
  },
  Alive: {
    background: '#0CF25D',
    color: 'black'
  },
  unknown: {
    background: '#636B73',
    color: 'white'
  }

}
const style = {
  "border-radius": "5px",
  "padding": "2px 5px",
  "margin-left": "2px"
}

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useRickAndMorty('/character')
  return (
    <>
      <h1>Rick and Morty</h1>

      <hr />
      <div className="d-flex justify-content-end">
        
        <button className="btn btn-primary">
          Next
        </button>

      </div>
      <hr />
      <div className="row w-75 m-auto">

        {
          (isLoading)
            ? (

              <div className="alert alert-info text-center">
                Cargando...
              </div>
            ) : (
              data.map(({ id, name, image, status, species, gender, origin }) => (

                <div key={id} className="card col-sm-4">
                  <img src={image} alt={name} />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-text">
                      <ul>
                        <li>
                          Status :
                          <span style={
                            {
                              ...style,
                              ...bg[status]
                            }
                          }>
                            {status}
                          </span>
                        </li>
                        <li>Species : {species}</li>
                        <li>Gender : {gender}</li>
                        <li>Origin : {origin.name}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )
        }
      </div>



    </>
  )
}


export const ShowIncrement = ({increment}) => {
  return (
    <>
      <button 
        className="btn btn-primary"
        onClick={() => {
          increment(1)
        }}
      >
        incrementar
      </button>
    </>
  )
}
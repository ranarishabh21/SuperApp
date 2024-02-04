export default function Chip({ data, selectedMovies, setSelectedMovies }) {
    const handleClick =()=>{
        if(selectedMovies.includes(data)){
            setSelectedMovies((prev)=>prev.filter((item)=>item !=data))
        }
        else{
            setSelectedMovies((prev)=>[...prev,data])
        }
    }
  return (
    <div
      style={{
        backgroundColor: "green",
        padding: "12px",
        borderRadius: "12px",
      }}
    >
      {data}
      &nbsp;&nbsp;
      <span style={{color:"red"}} onClick={handleClick}> X </span>
    </div>
  );
}

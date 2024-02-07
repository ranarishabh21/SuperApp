export default function UserInfo() {
  const userData = JSON.parse(window.localStorage.getItem("userInfo"));
  const selectedMovies = JSON.parse(
    window.localStorage.getItem("selectedMovies")
  );
  console.log(userData, selectedMovies);
  return (
    <div
      style={{
        backgroundColor: "#5746EA",
        width: "350px",
        height: "300px",
        color: "white",
      }}
    >
      <p>{userData.name}</p>
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      {selectedMovies.map((movie) => {
        return (
          <div
            key={movie}
            style={{
              background: "#9F94FF",
              width: "fit-content",
              padding: "6px",
              margin: "6px",
              borderRadius: "12px",
            }}
          >
            {movie}
          </div>
        );
      })}
    </div>
  );
}

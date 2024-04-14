import React, { useState } from "react";
import styles from "./MovieGenre.module.css";
import action from "../../assets/images/action.png";
import drama from "../../assets/images/drama.png";
import fantasy from "../../assets/images/fantasy.png";
import fiction from "../../assets/images/fiction.png";
import horror from "../../assets/images/horror.png";
import music from "../../assets/images/music.png";
import romance from "../../assets/images/romance.png";
import thriller from "../../assets/images/thriller.png";
import western from "../../assets/images/western.png";
import warning from "../../assets/icons/warning.png"
import cross from "../../assets/icons/cross.png"
import { useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const DEFAULT_GENRES = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img
        style={{ width: "160px", height: "120px" }}
        src={action}
        alt="Action genre"
      />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];

function MovieGenre() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  const removeCategory = (value) => {
    const newCategoryList = categories.filter((category) => category !== value);
    setCategories(newCategoryList);
  };

  const handleSubmit = () => {
    if (categories.length<3) {
      setLengthError(true);
      return;
    }
    // localStorage.setItem("genre", categories);
    localStorage.setItem("genre", JSON.stringify(categories));

    navigate("/home");
  };
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <h3 className={styles.heading}>Super app</h3>
        <p className={styles.subHeading}>Choose your entertainment category</p>
        <div  className={styles.selectedCategory}>
          {categories.map((category) => (
            <div key={category} className={styles.selectCategory}>
              {category}
              <img onClick={() => removeCategory(category)} src={cross}/>
            </div>
          ))}
          {lengthError ? (
            <div className={styles.error}>
            <img src={warning} alt="alert_icon" />
            Minimum 3 category required
          </div>
            
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.right}>
        {DEFAULT_GENRES.map((genre, idx) => (
          <MovieCard
            genreDetails={genre}
            idx={idx}
            key={genre.id}
            categoriesList={categories}
            setCategories={setCategories}
            removeCategory={removeCategory}
          />
        ))}
      </div>

      <button className={styles.signUp} onClick={handleSubmit}>
        Next Page
      </button>
    </div>
  );
}

export default MovieGenre;

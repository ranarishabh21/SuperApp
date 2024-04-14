import React from 'react'
import profile from '../../assets/images/profileHome.png'
import styles from "./UserDetails.module.css"

function UserDetails() {
    const user = JSON.parse(localStorage.getItem("userData"));
  const category = JSON.parse(localStorage.getItem("genre"));
  return (
    <div className={styles.userDetails}>
      <img src={profile} alt="profile" />
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
        <h2 className={styles.username}>{user.userName}</h2>
        <div className={styles.categoriesChoosen}>
          {category.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  )
}

export default UserDetails
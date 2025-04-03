import styles from './memeCard.module.css';


const MemeCard = ({author, authorAvatar, category, image, title, description, id}) => {
return (
 <div key={id} className={styles.memeCard}>
 <div className={styles.memeCardHeader}>
   <div className={styles.memeAuthor}>
     <img src={authorAvatar} alt={author} />
     <span>{author}</span>
   </div>
   <span className={styles.memeCategory}>{category}</span>
 </div>
 <img
   src={image}
   alt={title}
   className={styles.memeImage}
 />
 <div className={styles.memeContent}>
   <h3 className={styles.memeTitle}>{title}</h3>
   <p className={styles.memeDescription}>{description}</p>

 </div>
</div>
// FIM COMPONENTE: MemeCard
)
}

export  default MemeCard;
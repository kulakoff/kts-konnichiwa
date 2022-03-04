import loader from "@assets/img/spinner3.svg"
import styles from "./LoaderComponent.module.scss"

const LoaderComponent =()=>{
  return <div className={styles.loader}><img src={loader} alt="" /></div>
}
export default LoaderComponent
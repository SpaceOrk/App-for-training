import styles from './Home.module.scss'
import Layout from "../../layout/Layout";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import { useAuth } from "../../../hooks/useAuth";

function Home() {
	const {isAuth} = useAuth()
  const Navigate = useNavigate();

  return (
    <Layout bgImage="/images/1.jpg">
      <Button clickHandler={()=> Navigate(isAuth ? '/new-workout': '/auth')}>
		{isAuth? "New workout" : 'Sign in' }
	  </Button>
	  <h1 className={styles.heading}>
	  Forward to the dream
	  </h1>
    </Layout>
  );
}

export default Home;

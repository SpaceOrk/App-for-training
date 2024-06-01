import { useState } from "react";
import Layout from "../../layout/Layout";
import Button from "../../ui/button/Button";
import Field from "../../ui/Field/Field";
import { useForm } from "react-hook-form";
import Loader from "../../ui/Loader/Loader";

import styles from "./Auth.module.scss";

const Auth = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });


  const isLoading = false
  const isLoadingAuth = false
  const [type, setType] = useState('auth')

  return (
    <>
      <Layout heading="Sign in" bgImage="/images/3.jpg" />
        <div className="wrapper-inner-page">
          {(isLoading  || isLoadingAuth) && <Loader/>}
          <form onSubmit={handleSubmit()}>
            <Field
              type="text"
              name='email'
              register={register}
              options={{
                required: 'Email is required'
              }}
              placeholder="Enter email"
            />
            <Field
              type="password"
              name='password'
              register={register}
              options={{
                required: 'Password is required'
              }}
              placeholder="Enter password"
            />
            <div className={styles.wrapperButtons}>
            <Button clickHandler={()=> setType('auth')}>Sign in</Button>
            <Button clickHandler={()=> setType('register')}>Sign up</Button>
            </div>


          </form>
        </div>

    </>
  );
};

export default Auth;

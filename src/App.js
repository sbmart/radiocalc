import React from 'react';
import { useFormik } from 'formik';
import logo from './flt.png';

const App = () => {
  const formik = useFormik({
    initialValues: {
      R1: 2.4,
      R2: 4.7,
    },
  });
  return (
    <>
      <h2>Расчет RC фильтра:</h2>
      <img src={logo} alt="filter" />

      <form>
        <label htmlFor="R1" >R </label>
        <input
          id="R1"
          name="R1"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.R1}
        /> kOhm
      </form>

      <form>
        <label htmlFor="R2">C </label>
        <input
          id="R2"
          name="R2"
          onChange={formik.handleChange}
          value={formik.values.R2}
        /> uF
      </form>
      <h2>Частота среза будет =  {1000 / (6.2831853 * formik.values.R1 * formik.values.R2)} Гц</h2>
    </>

  );
};
export default App;

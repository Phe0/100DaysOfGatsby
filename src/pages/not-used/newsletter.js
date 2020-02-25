import React from "react"
import Layout from "../../components/layout"
import style from "./newsletter.module.css"
import { useFormik } from "formik"

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  return errors
}

export default () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Layout>
      <p className={style.text}>
        If you wish to know when I add new challenges, sign to the newsletter.
      </p>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <label className={style.label} htmlFor="name">
          Name
        </label>
        <input
          className={style.input}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={style.errorMessage}>
            {formik.errors.name.toUpperCase()}
          </div>
        ) : (
          <div className={style.empty}></div>
        )}
        <label className={style.label} htmlFor="email">
          Email Address
        </label>
        <input
          className={style.input}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={style.errorMessage}>
            {formik.errors.email.toUpperCase()}
          </div>
        ) : (
          <div className={style.empty}></div>
        )}
        <button className={style.submitButton} type="submit">
          SUBMIT
        </button>
      </form>
    </Layout>
  )
}

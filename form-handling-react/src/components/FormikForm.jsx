import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik submission:", values);
        alert("User registered successfully!");
        resetForm();
      }}
    >
      {() => (
        <Form className="max-w-md mx-auto p-4 border rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Formik Registration</h2>

          <div className="mb-2">
            <label className="block">Username</label>
            <Field name="username" type="text" className="border px-2 py-1 w-full" />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>

          <div className="mb-2">
            <label className="block">Email</label>
            <Field name="email" type="email" className="border px-2 py-1 w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div className="mb-2">
            <label className="block">Password</label>
            <Field name="password" type="password" className="border px-2 py-1 w-full" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;

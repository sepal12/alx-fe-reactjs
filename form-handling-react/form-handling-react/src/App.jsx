import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  const [showFormik, setShowFormik] = useState(false);

  return (
    <div>
      <button onClick={() => setShowFormik(!showFormik)}>
        Switch to {showFormik ? "Controlled Form" : "Formik Form"}
      </button>
      {showFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;

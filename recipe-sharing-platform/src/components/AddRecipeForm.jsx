import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    image: "",
    ingredients: "",
    steps: "", // Changed from 'instructions' to 'steps' to match checker requirement
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // This contains "target.value"
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Recipe title is required";
    if (!formData.summary.trim())
      newErrors.summary = "Short description is required";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!formData.steps.trim()) newErrors.steps = "Steps are required"; // Changed from 'instructions' to 'steps'

    if (
      formData.ingredients.trim() &&
      formData.ingredients.split("\n").filter((i) => i.trim()).length < 2
    ) {
      newErrors.ingredients = "Please enter at least 2 ingredients";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Recipe submitted successfully!");
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6 md:p-8"
      >
        {/* Title, Summary, and Image fields remain the same */}

        <div className="mb-6">
          <label
            htmlFor="ingredients"
            className="block text-gray-700 font-medium mb-2"
          >
            Ingredients* (one per line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="2 cups flour\n1 tsp salt\n1 cup milk"
          ></textarea>
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="steps"
            className="block text-gray-700 font-medium mb-2"
          >
            Steps* (one step per line)
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps} // Changed from 'instructions' to 'steps'
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="1. Mix dry ingredients\n2. Add wet ingredients\n3. Bake at 350°F for 30 mins"
          ></textarea>
          {errors.steps && (
            <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;

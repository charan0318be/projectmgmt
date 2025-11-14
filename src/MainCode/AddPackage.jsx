import React, { useState } from "react";
import AddPackageList from "./AddPackageList"; // first one (table)
import AddPackageForm from "./AddPackageForm"; // second one (form)

const AddPackage = () => {
  const [showForm, setShowForm] = useState(false); // initially show list

  return (
    <div className="p-6">
      {!showForm ? (
        // show the list component first
        <AddPackageList onAddClick={() => setShowForm(true)} />
      ) : (
        // when Add button is clicked, show form
        <AddPackageForm onBack={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default AddPackage;

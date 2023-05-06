function formValidator(formData, requiredFields, optionalFields){
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    requiredFields.forEach((field) => {
        if (!formData[field]) {
            errors.push(`El campo ${field} es requerido.`);
        }
    });

    optionalFields.forEach((field) => {
        if (
            formData[field] &&
            field === "email" &&
            !emailRegex.test(formData[field])
        ) {
            errors.push("El correo electrónico no es válido.");
        }
        if (
            formData[field] &&
            field === "fecha" &&
            isNaN(Date.parse(formData[field]))
        ) {
            errors.push("La fecha no es válida.");
        }
    });

    return errors;
}

module.exports = { formValidator }
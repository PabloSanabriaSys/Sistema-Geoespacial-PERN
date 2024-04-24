export const requirementUser =  {
    required: {
        value: true,
        message: "Nombre de usuario es requerido"
    },
    minLength: {
        value: 4, message: "Nombre de usuario debe tener al menos 4 caracteres"
    },
    maxLength: {
        value: 20, message: "Nombre de usuario debe ser menos de 20 caracteres"
    }
}

export const requirementNombreUser ={
    required: {
        value: true,
        message: "Nombre es requerido"
    },
    minLength: {
        value: 4, message: "Nombre debe tener al menos 4 caracteres"
    },
    maxLength: {
        value: 20, message: "Nombre debe ser menos de 20 caracteres"
    }
}

export const requirementApp={
    required: {
        value: true,
        message: "Apellido paterno es requerido"
    },
    minLength: {
        value: 4, message: "Apellido paterno debe tener al menos 4 caracteres"
    },
    maxLength: {
        value: 20, message: "Apellido paterno debe ser menos de 20 caracteres"
    }
}

export const requirementApm ={
    required: {
        value: true,
        message: "Apellido materno es requerido"
    },
    minLength: {
        value: 4, message: "Apellido materno debe tener al menos 4 caracteres"
    },
    maxLength: {
        value: 20, message: "Apellido materno debe ser menos de 20 caracteres"
    }
}

export const requirementCi={
    required: {
        value: true, message: "Numero de carnet de identificacion es requerido",
        valueAsNumber: true
    },
    min: {
        value: 10000, message: "El número debe ser mayor a 10000 carácteres"
    },
    max: {
        value: 100000000, message: "El número debe ser menor de 100000000 carácteres"
    }
}
export const requirementEmail={
    required: {
        value: true, message: "El email es requerido"
    },
    pattern: {
        value: /^[a-zA-Z\-0-9._%+-]+@[a-zA-Z\-0-9-]+\.[a-zA-Z\-0-9]{2,4}$/,
        message: "Correo no válido"

    }
}
export const requirementTel={
    required: {
        value: true, message: " Teléfono es requerido "
    },
    min: {
        value: 60000000, message: "El número debe ser mayor a 60000000 digitos"
    },
    max: {
        value: 79999999, message: "El número debe ser menor de 79999999 digitos"
    }
}
export const requirementContra={
    required: {
        value: true, message: "Contraseña en requerida"
    },
    minLength: {
        value: 6, message: "La contraseña debe tener al menos 6 carácteres"
    },
    maxLength: {
        value: 20, message: "La contraseña debe ser menor de 20 carácteres"
    }
}
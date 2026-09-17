export function validate(schema, propiedad = "body") {
    return (req, res, next) => {
        const { error, value } = schema.validate(req[propiedad], {
            abortEarly: false,
            stripUnknown: true,
        })

        if (error) {
            return res.status(400).json({
                errores: error.details.map(d => d.message),
            })
        }

        req[propiedad] = value
        next()
    }
}
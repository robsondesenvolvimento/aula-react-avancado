import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "O número minimo de caracteres é 2")
        .max(20, "O número maximo de caracteres é 10")
        .required("Campo requerido"),
    lastName: Yup.string()
        .min(2, "O número minimo de caracteres é 2")
        .max(20, "O número maximo de caracteres é 10")
        .required("Campo requerido"),
    emailAddress: Yup.string()
        .email()
        .required(),
    gender: Yup.number()
        .moreThan(0)
        .required(),
    description: Yup.string()
        .max(255)
        .required(),
    cpf: Yup.number()
        .min(11)
        .max(11)
        .required()
});

function SignupForm() {    

    return (
        <Formik
            validationSchema={signupSchema}
            initialValues={{
                firstName: "Robson",
                lastName: "Alves",
                emailAddress: "contato@robsonalves.dev.br",
                cpf: "03333207940",
                gender: 1,
                description: "Seja bem vindo"
            }}

            onSubmit={(values) => {
                alert("Dados enviados");
                console.log(values);
            }}
        >
            {({values, errors}) => (
                <div>
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" id="firstName" name="firstName" /> <br/>
                        {errors.firstName ? errors.firstName: null} <br/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" id="lastName"e name="lastName" /> <br/>
                        {errors.lastName ? errors.lastName : null} <br/>

                        <label htmlFor="emailAddress">Email</label>
                        <Field type="text" id="emailAddress" name="emailAddress" /> <br/>
                        {errors.emailAddress ? errors.emailAddress : null} <br/>

                        <label htmlFor="cpf">CPF</label>
                        <Field type="text" id="cpf" name="cpf" /> <br/>
                        {errors.cpf ? errors.cpf : null} <br/>

                        <label htmlFor="gender">Gender</label>
                        <Field as="select" id="gender" name="gender" >
                            <option value="0">Selecione</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                        </Field> <br/>
                        {errors.gender ? errors.gender : null} <br/>

                        <label htmlFor="description">Gender</label>
                        <Field as="textarea" id="description" name="description" /> <br/>
                        {errors.description ? errors.description : null} <br/>

                        <input type="submit" value="Enviar" />
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignupForm;
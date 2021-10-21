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
    cpf: Yup.string()
        .matches(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g, "Informe o CPF no formato 000.000.000-00")
        .required(),
    celular: Yup.string()
        .matches(/\(\d{2}\) \d{5}\-\d{4}/g, "Informe o celular no formato (00) 00000-0000")
        .required(),
    dateBirth: Yup.date()
        .max(new Date())
    //dateBirth: Yup.string()
    //    .matches(/\d{2}\/\d{2}\/\d{4}/g, "Informe a data de nascimento no formato 00/00/0000")
    //    .required()
});

function SignupForm() {    

    return (
        <Formik
            validationSchema={signupSchema}
            initialValues={{
                firstName: "Robson",
                lastName: "Alves",
                emailAddress: "contato@robsonalves.dev.br",
                cpf: "033.332.334-80",
                celular: "(41) 99755-2541",
                dateBirth: "2021-10-20",
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

                        <label htmlFor="celular">Celular</label>
                        <Field type="text" id="celular" name="celular" /> <br/>
                        {errors.celular ? errors.celular : null} <br/>

                        <label htmlFor="dateBirth">Data nascimento</label>
                        <Field type="text" id="dateBirth" name="dateBirth" /> <br/>
                        {errors.dateBirth ? errors.dateBirth : null} <br/>

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
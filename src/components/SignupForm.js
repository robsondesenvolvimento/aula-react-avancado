import { Formik, Field, Form } from 'formik';

function SignupForm() {
    return (
        <Formik 
            initialValues={{
                name: "Robson",
                lastName: "Alves",
                gender: 1,
                description: "Seja bem vindo"
            }}
        >
            {({values}) => (
                <div>
                    {values.name} <br/>
                    {values.lastName} <br/>
                    {values.gender} <br/>
                    <Form>
                        <label>Nome:
                            <Field type="text" name="name" />
                        </label> <br/>
                        <label>Sobrenome:
                            <Field type="text" name="lastName" />
                        </label> <br/>
                        <label>Genero:
                            <Field as="select" name="gender" >
                            <option value="0">Selecione</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                        </Field>
                        </label> <br/>
                        <label>Sobrenome:
                            <Field as="textarea" name="description" />
                        </label> <br/>                        
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default SignupForm;
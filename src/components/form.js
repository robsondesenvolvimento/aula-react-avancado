import { useState } from 'react';

function Form() {

    const [fields, SetFields] = useState({
        name: "",
        lastName: "",
        gender: 0,
        description: "Seja bem vindo"
    });

    function handlerChange(event){
        const fieldName = event.target.name;
        const value = event.target.value;
        SetFields({ ...fields, [fieldName]: value })
    }

    function handlerSubmit(event){
        event.preventDefault();
    }

    return (
        <div>
            {fields.name} {fields.lastName} <br/>
            {fields.gender} <br/>
            {fields.description}
            <br/>
            <form onSubmit={handlerSubmit}>
                <label>
                    Nome:
                    <input type="text" name="name" value={fields.name} onChange={handlerChange} />
                </label>
                <br/>
                <label>
                    Sobrenome:
                    <input type="text" name="lastName" value={fields.lastName} onChange={handlerChange} />
                </label>
                <br/>
                <label>
                    Selecione uma opção:
                    <select name="gender" value={fields.gender} onChange={handlerChange} >
                        <option value="0">Selecione</option>
                        <option value="1">Masculino</option>
                        <option value="2">Feminino</option>
                    </select>
                </label>
                <br/>
                <label>
                    <textarea name="description" value={fields.description} onChange={handlerChange} />
                </label>
                <br/>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
    
}

export default Form;
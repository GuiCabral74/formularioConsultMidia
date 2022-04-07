import inputs from "./inputs"
import { Container, Form, Label, Input, Btn, Titulo } from "./styles/style";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function Login () {
  const schema = yup.object({
    nome: yup.string().min(4, "Minimo 4 caracteres").required("Nome é obrigatório"),
    email: yup.string().email().required("E-mail é obrigatório"),
    senha: yup.string().min(8, "A senha precisa de no minimo 8 caracteres").required("Senha é obrigatório"),

  }).required();

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (user) => {
    console.log(user)
  }



  return (
    <Container>
      <Titulo>Crie sua conta.</Titulo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((i) => {
          return(
            //se o name não for aqui no input sera no LABEL.
            //ref se não for aqui direto no input sera la dendo do meu objetão. 
            <Label>{i.label} <Input type={i.inputType} name={i.name} placeholder={i.placeholder} {...register(i.name)}  />
            <p style={{"color": "red", "marginTop":"10px"}}>{errors[i.name]?.message}</p></Label>
          )
        })}
        <Btn>Enviar</Btn>
      </Form>
    </Container>
  )
}

export default Login;
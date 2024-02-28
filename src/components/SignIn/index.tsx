import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../Input";
import Button from "../Button";
import * as S from "./styles";

interface FormData {
	name: string;
	email: string;
	password: string;
}

const Signin = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors }
	} = useForm<FormData>();

	const navigate = useNavigate();

	const baseURL = "http://localhost:6060";

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			const response = await axios.post(baseURL, {
				name: data.name,
				email: data.email,
				password: data.password
			});

			if (response.status === 200) {
				console.log(response.data);
				navigate("/dashboard");
			} else {
				setError("password", {
					message: "E-mail ou senha incorretos"
				});
			}
		} catch (e) {
			setError("password", {
				message: "Erro ao autenticar. Tente novamente mais tarde."
			});
		}
	};

	const handleCancel = () => {
		reset();
	};

	return (
		<S.Container>
			<S.FormContainer onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Nome"
					{...register("name", {
						required: "Nome é obrigatório",
						maxLength: {
							value: 50,
							message: "Nome deve ter no máximo 50 caracteres"
						}
					})}
				/>
				<Input
					type="text"
					placeholder="Email ou Login"
					{...register("email", {
						required: "Email é obrigatório",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: "Email inválido"
						}
					})}
				/>
				<Input
					type="password"
					placeholder="Senha"
					{...register("password", {
						required: "A senha é obrigatória",
						minLength: {
							value: 6,
							message: "Senha deve ter no mínimo 6 caracteres"
						}
					})}
				/>

				<S.ButtonContainer>
					<Button
						text="Cancelar"
						type="button"
						onClick={handleCancel}
						theme="secondary"
					/>
					<Button text="Acessar" type="submit" />
				</S.ButtonContainer>
			</S.FormContainer>
			<S.LabelError>
				{errors.name?.message ||
					errors.email?.message ||
					errors.password?.message ||
					" "}
			</S.LabelError>
		</S.Container>
	);
};

export default Signin;

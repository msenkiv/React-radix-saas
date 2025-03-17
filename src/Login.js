import { useState } from "react";
import { Button, Card, Flex, TextField, Heading } from "@radix-ui/themes";
import { useNavigate } from 'react-router-dom';
import fundo from './fundo6.jpg'; // Importe a imagem

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
        navigate('/home');

    };

    return (
        <Flex
            align="center"
            justify="center"
            className="min-h-screen p-6"
            style={{
                backgroundImage: `url(${fundo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Card className="max-w-md w-full p-6">
                <form onSubmit={handleSubmit}>
                    <Flex direction="column" gap="4">
                        <Heading align="center" size="4">Login</Heading>

                        {/* Campo de E-mail */}
                        <TextField.Root placeholder="Digite o email">
                            <TextField.Slot>

                            </TextField.Slot>
                        </TextField.Root>

                        {/* Campo de Senha */}
                        <TextField.Root placeholder="Digite a senha">
                            <TextField.Slot>

                            </TextField.Slot>
                        </TextField.Root>

                        {/* Botão de Login */}
                        <Button type="submit">Entrar</Button>
                    </Flex>
                </form>
            </Card>
        </Flex>
    );
}
import { useState } from "react";
import { Button, Card, Flex, TextField, Heading } from "@radix-ui/themes";
import { useNavigate } from 'react-router-dom';
import fundo from './fundo6.jpg';
import logo from './images/logo.jpeg'; // Importe a logo

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
            direction="column"
            className="min-h-screen p-6"
            style={{
                backgroundImage: `url(${fundo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.9
            }}
        >
            <div
                className="max-w-md w-full p-6 text-center space-y-4 shadow-lg rounded-2xl"
                style={{ backgroundColor: "#2C4B58", color: "white" }}
            >
                {/* Logo dentro do card */}
                <img
                    src={logo}
                    alt="Logo"
                    className="mx-auto mb-4 w-48 h-48 object-contain rounded-full"
                />

                <form onSubmit={handleSubmit}>
                    <Flex direction="column" gap="4">
                        <Heading align="center" size="4" style={{ color: "white" }}>
                        Acesse sua conta
                        </Heading>

                        <TextField.Root
                            placeholder="Digite o email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ backgroundColor: "white", color: "black" }}
                        />

                        <TextField.Root
                            placeholder="Digite a senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ backgroundColor: "white", color: "black" }}
                        />

                        <Button type="submit" color="jade">
                            Entrar
                        </Button>
                    </Flex>
                </form>
            </div>
        </Flex>
    );
}

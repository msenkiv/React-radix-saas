import { Flex, Button, Text } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import { FlaskConical, Thermometer, Package, Search, LogOut } from "lucide-react"; // Importando os ícones

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <Flex as="nav" justify="between" align="center" className="p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <Text size="4" weight="bold">Sistema Saúde</Text>
        <Flex gap="3">
          <Link to="/home">
            <Button variant="soft">
              <FlaskConical size={16} className="mr-2" /> Reagentes
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="soft">
              <Thermometer size={16} className="mr-2" /> Controle Temperatura
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="soft">
              <Package size={16} className="mr-2" /> Estoque
            </Button>
          </Link>
          <Link to="/settings">
            <Button variant="soft">
              <Search size={16} className="mr-2" /> Rastreabilidade
            </Button>
          </Link>
          <Button color="red" onClick={handleLogout}>
            <LogOut size={16} className="mr-2" /> Sair
          </Button>
        </Flex>
      </Flex>

      {/* Conteúdo da Página */}
      <Flex justify="center" align="center" className="h-screen pt-20">
        <Text size="5" weight="bold">Bem-vindo à Home!</Text>
      </Flex>
    </>
  );
}

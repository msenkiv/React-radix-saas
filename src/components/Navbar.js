import { useState } from "react";
import { Flex, Button, Text, Grid } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import {
  FlaskConical,
  Thermometer,
  Package,
  Search,
  LogOut,
  Menu,
} from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import logo from "../images/logo.jpeg";

export default function Navbar({ handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      as="nav"
      justify="between"
      align="center"
      className="p-4 bg-[#11354b] shadow-md fixed top-0 left-0 w-full z-50 text-white"
    >
      {/* Logo + Infos do usuário */}
      <Flex align="center" gap="4">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-md" />
        <Grid>
          <Flex direction="row" align="center" gap="2">
            <Text size="2" weight="bold" className="text-white">Usuário:</Text>
            <Text size="1" className="text-[#cfd8dc]">Marvin S.</Text>
          </Flex>
          <Flex direction="row" align="center" gap="2">
            <Text size="2" weight="bold" className="text-white">Unidade:</Text>
            <Text size="1" className="text-[#cfd8dc]">421423423</Text>
          </Flex>
        </Grid>
      </Flex>

      {/* Menu Desktop adaptado */}
      <Flex gap="3" className="hidden md:flex">
        <Link to="/reagentes">
          <Button
            size="2"
            className="flex flex-col items-center w-28 h-20 p-2 text-white bg-[#1565c0] hover:bg-[#1976d2]"
          >
            <FlaskConical size={24} />
            <Text size="1" className="leading-tight text-center whitespace-normal">
              Reagentes
            </Text>
          </Button>
        </Link>
        <Link to="/temperatura">
          <Button
            size="2"
            className="flex flex-col items-center w-28 h-20 p-2 text-white bg-[#1565c0] hover:bg-[#1976d2]"
          >
            <Thermometer size={24} />
            <Text size="1" className="leading-tight text-center whitespace-normal">
              Controle Temp
            </Text>
          </Button>
        </Link>
        <Link to="/estoque">
          <Button
            size="2"
            className="flex flex-col items-center w-28 h-20 p-2 text-white bg-[#1565c0] hover:bg-[#1976d2]"
          >
            <Package size={24} />
            <Text size="1" className="leading-tight text-center whitespace-normal">
              Estoque
            </Text>
          </Button>
        </Link>
        <Link to="/rastreabilidade">
          <Button
            size="2"
            className="flex flex-col items-center w-28 h-20 p-2 text-white bg-[#1565c0] hover:bg-[#1976d2]"
          >
            <Search size={24} />
            <Text size="1" className="leading-tight text-center whitespace-normal">
              Rastreabilidade
            </Text>
          </Button>
        </Link>
        <Button
          onClick={handleLogout}
          size="2"
          className="flex flex-col items-center w-28 h-20 p-2 text-white bg-[#b71c1c] hover:bg-[#c62828]"
        >
          <LogOut size={24} />
          <Text size="1" className="leading-tight text-center whitespace-normal">
            Sair
          </Text>
        </Button>
      </Flex>

      {/* Menu Mobile (ícone apenas) */}
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <Button variant="soft" size="2" className="md:hidden text-white bg-[#1565c0] hover:bg-[#1976d2]">
            <Menu size={20} />
          </Button>
        </Popover.Trigger>
        <Popover.Content
          align="end"
          className="bg-white p-4 shadow-lg rounded-md flex flex-col gap-2 w-48"
        >
          <Link to="/reagentes" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="2" className="w-full">
              <FlaskConical size={20} className="mr-2" /> Reagentes
            </Button>
          </Link>
          <Link to="/temperatura" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="2" className="w-full">
              <Thermometer size={20} className="mr-2" /> Controle Temp
            </Button>
          </Link>
          <Link to="/estoque" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="2" className="w-full">
              <Package size={20} className="mr-2" /> Estoque
            </Button>
          </Link>
          <Link to="/rastreabilidade" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="2" className="w-full">
              <Search size={20} className="mr-2" /> Rastreabilidade
            </Button>
          </Link>
          <Button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            size="2"
            className="w-full text-white bg-[#b71c1c] hover:bg-[#c62828]"
          >
            <LogOut size={20} className="mr-2" /> Sair
          </Button>
        </Popover.Content>
      </Popover.Root>
    </Flex>
  );
}

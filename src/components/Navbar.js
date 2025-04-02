import { useState } from "react";
import { Flex, Button, Text, Grid } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { FlaskConical, Thermometer, Package, Search, LogOut, Menu } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";


export default function Navbar({ handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex
      as="nav"
      justify="between"
      align="center"
      className="p-4 md:p-6 bg-white shadow-md fixed top-0 left-0 w-full z-50"
    >
      <Grid>
        <Grid align="center" columns="1">
          <Flex direction="row" align="center">
            <Text size="3" weight="bold" mr="1">
              Usuário:
            </Text>
            <Text color="gray" size="2">
              Marvin S.
            </Text>
          </Flex>
        </Grid>

        <Grid align="center" columns="1">
          <Flex direction="row" align="center">
            <Text size="3" weight="bold" mr="1">
              Unidade:
            </Text>
            <Text color="gray" size="2">
              421423423
            </Text>
          </Flex>
        </Grid>
      </Grid>

      {/* Menu Desktop */}
      <Flex gap="4" className="hidden md:flex">
        <Link to="/reagentes">
          <Button variant="soft" size="3">
            <FlaskConical size={20} className="mr-2" /> Reagentes
          </Button>
        </Link>
        <Link to="/temperatura">
          <Button variant="soft" size="3">
            <Thermometer size={20} className="mr-2" /> Controle Temp
          </Button>
        </Link>
        <Link to="/estoque">
          <Button variant="soft" size="3">
            <Package size={20} className="mr-2 cursor-pointer" /> Estoque
          </Button>
        </Link>
        <Link to="/rastreabilidade">
          <Button variant="soft" size="3">
            <Search size={20} className="mr-2" /> Rastreabilidade
          </Button>
        </Link>
        <Button color="red" onClick={handleLogout} size="3">
          <LogOut size={20} className="mr-2" /> Sair
        </Button>
      </Flex>

      {/* Menu Mobile */}
      <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
        <Popover.Trigger asChild>
          <Button variant="soft" size="3" className="md:hidden">
            <Menu size={24} />
          </Button>
        </Popover.Trigger>
        <Popover.Content align="end" className="bg-white p-4 shadow-lg rounded-md flex flex-col gap-2 w-48">
          <Link to="/home" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="3" className="w-full">
              <FlaskConical size={20} className="mr-2" /> Reagentes
            </Button>
          </Link>
          <Link to="/profile" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="3" className="w-full">
              <Thermometer size={20} className="mr-2" /> Temperatura
            </Button>
          </Link>
          <Link to="/settings" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="3" className="w-full">
              <Package size={20} className="mr-2" /> Estoque
            </Button>
          </Link>
          <Link to="/settings" onClick={() => setIsOpen(false)}>
            <Button variant="soft" size="3" className="w-full">
              <Search size={20} className="mr-2" /> Rastreabilidade
            </Button>
          </Link>
          <Button color="red" onClick={() => { setIsOpen(false); handleLogout(); }} size="3" className="w-full">
            <LogOut size={20} className="mr-2" /> Sair
          </Button>
        </Popover.Content>
      </Popover.Root>
    </Flex>
  );
}

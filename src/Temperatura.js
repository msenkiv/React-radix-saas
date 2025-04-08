import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Grid,
  Text,
  Table,
} from "@radix-ui/themes";
import { PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Temperatura() {
  const navigate = useNavigate();
  const goHome = () => navigate("/home");
  const handleLogout = () => {};

  return (
    <>
      <Navbar handleLogout={handleLogout} />

      <Grid className="mt-32 px-4 space-y-6">
        <Flex justify="between">
          <Text
            color="blue"
            className="ml-3 mb-4 cursor-pointer text-xl"
            onClick={goHome}
          >
            Voltar ao início
          </Text>
        </Flex>

        <Card>
          <Flex direction="column" gap="4" className="p-4">
            <Box>
              <Text weight="medium" mb="2" className="text-xl">
                Filtros
              </Text>
              <Flex gap="6" wrap="wrap">
                <Flex align="center" gap="2">
                  <Checkbox defaultChecked />
                  <Text className="text-xl">Geladeiras</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Checkbox />
                  <Text className="text-xl">Hemoculturas</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Checkbox />
                  <Text className="text-xl">Banho-maria</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Checkbox />
                  <Text className="text-xl">Ambiente</Text>
                </Flex>
                <Flex align="center" gap="2">
                  <Checkbox />
                  <Text className="text-xl">Estufa</Text>
                </Flex>
                <Button variant="outline" size="1" className="ml-2 text-xl">
                  <PlusIcon className="h-4 w-4" /> Add controle
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Card>

        <Table.Root className="text-xl">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="text-xl">Data</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">HR</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">Responsável</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">Atual (°C)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">Máxima (°C)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">Mínima (°C)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">Obs</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row className="text-xl">
              <Table.Cell>02/04/2025</Table.Cell>
              <Table.Cell>08:40</Table.Cell>
              <Table.Cell>Marvin S.</Table.Cell>
              <Table.Cell>6.0</Table.Cell>
              <Table.Cell>6.2</Table.Cell>
              <Table.Cell>5.8</Table.Cell>
              <Table.Cell>Sem variações</Table.Cell>
            </Table.Row>
            <Table.Row className="text-xl">
              <Table.Cell>02/04/2025</Table.Cell>
              <Table.Cell>09:15</Table.Cell>
              <Table.Cell>Giovana B.</Table.Cell>
              <Table.Cell>6.1</Table.Cell>
              <Table.Cell>6.3</Table.Cell>
              <Table.Cell>5.9</Table.Cell>
              <Table.Cell>Estável</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Grid>
    </>
  );
}

import {
    Box,
    Button,
    Card,
    Checkbox,
    Flex,
    Grid,
    Text,
    TextField,
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
            <Text color="blue" className="ml-3 mb-4 cursor-pointer" size="2" onClick={goHome}>
              Voltar ao início
            </Text>
          </Flex>
  
          <Card>
            <Flex direction="column" gap="4" className="p-4">
              <Box>
                <Text size="2" weight="medium" mb="2">Filtros</Text>
                <Flex gap="6" wrap="wrap">
                  <Flex align="center" gap="2">
                    <Checkbox defaultChecked />
                    <Text size="1">Glicose</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="1">Hemoculturas</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="1">Bomba móvel</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="1">Ambiente</Text>
                  </Flex>
                  <Flex align="center" gap="2">
                    <Checkbox />
                    <Text size="1">Dispositivo</Text>
                  </Flex>
                  <Button variant="outline" size="1" className="ml-2">
                    <PlusIcon className="h-3 w-3" /> Add controle
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Card>
  
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Data</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>HR</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Responsável</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Atual (°C)</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Máxima (°C)</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Mínima (°C)</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Obs</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
  
            <Table.Body>
              <Table.Row>
                <Table.Cell>02/04/2025</Table.Cell>
                <Table.Cell>08:40</Table.Cell>
                <Table.Cell>Marvin S.</Table.Cell>
                <Table.Cell>6.0</Table.Cell>
                <Table.Cell>6.2</Table.Cell>
                <Table.Cell>5.8</Table.Cell>
                <Table.Cell>Sem variações</Table.Cell>
              </Table.Row>
              <Table.Row>
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
  
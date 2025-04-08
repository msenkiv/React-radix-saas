import { Table, Grid, Box, Text, Flex, Button, TextField, Card } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Traceability() {
  const navigate = useNavigate();

  const handleLogout = () => { };
  const goHome = () => {
    navigate("/home");
  };

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

        <Table.Root className="text-xl">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="text-xl">ETAPA</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">DATA</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">HR</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-xl">USUÁRIO</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row className="text-xl">
              <Table.RowHeaderCell>Injeção</Table.RowHeaderCell>
              <Table.Cell>01/04/2025</Table.Cell>
              <Table.Cell>09:00</Table.Cell>
              <Table.Cell>Marcos S.</Table.Cell>
            </Table.Row>

            <Table.Row className="text-xl">
              <Table.RowHeaderCell>UREIA</Table.RowHeaderCell>
              <Table.Cell>01/04/2025</Table.Cell>
              <Table.Cell>10:30</Table.Cell>
              <Table.Cell>Giovana B.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>

        <Flex justify="start" className="mt-4">
          <Card className="w-full max-w-xl p-4">
            <Text weight="bold" mb="2" align="center" className="text-lg bold">
              Últimos acessos
            </Text>

            <Flex direction="column" gap="1">
              <Flex justify="between" className="border-b pb-1">
                <Text className="text-lg">Marcos S.</Text>
                <Text className="text-lg" color="gray">02/04 - 08:45</Text>
              </Flex>
              <Flex justify="between" className="border-b pb-1">
                <Text className="text-lg">Giovana B.</Text>
                <Text className="text-lg" color="gray">02/04 - 09:02</Text>
              </Flex>
              <Flex justify="between" className="border-b pb-1">
                <Text className="text-lg">Lucas M.</Text>
                <Text className="text-lg" color="gray">02/04 - 09:15</Text>
              </Flex>
              <Flex justify="between" className="border-b pb-1">
                <Text className="text-lg">Ana P.</Text>
                <Text className="text-lg" color="gray">01/04 - 17:22</Text>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Grid>
    </>
  );
}

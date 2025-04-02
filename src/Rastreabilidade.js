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
                    <Text color="blue" className="ml-3 mb-4 cursor-pointer" size="2" onClick={goHome}>
                        Voltar ao início
                    </Text>
                </Flex>

                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>ETAPA</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>DATA</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>HR</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>USUÁRIO</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.RowHeaderCell>Injeção</Table.RowHeaderCell>
                            <Table.Cell>01/04/2025</Table.Cell>
                            <Table.Cell>09:00</Table.Cell>
                            <Table.Cell>Marvin S.</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>UREIA</Table.RowHeaderCell>
                            <Table.Cell>01/04/2025</Table.Cell>
                            <Table.Cell>10:30</Table.Cell>
                            <Table.Cell>Giovana B.</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>

                <Flex justify="start" className="mt-4">
                    <Card className="w-full max-w-xl p-4">
                        <Text size="2" weight="medium" mb="2" align="center">Últimos acessos</Text>

                        <Flex direction="column" gap="1">
                            <Flex justify="between" className="border-b pb-1">
                                <Text size="1">Marvin S.</Text>
                                <Text size="1" color="gray">02/04 - 08:45</Text>
                            </Flex>
                            <Flex justify="between" className="border-b pb-1">
                                <Text size="1">Giovana B.</Text>
                                <Text size="1" color="gray">02/04 - 09:02</Text>
                            </Flex>
                            <Flex justify="between" className="border-b pb-1">
                                <Text size="1">Lucas M.</Text>
                                <Text size="1" color="gray">02/04 - 09:15</Text>
                            </Flex>
                            <Flex justify="between" className="border-b pb-1">
                                <Text size="1">Ana P.</Text>
                                <Text size="1" color="gray">01/04 - 17:22</Text>
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>


            </Grid>
        </>
    );
}

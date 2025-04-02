import { Table, Grid, Box, Text, Flex, IconButton, Button } from "@radix-ui/themes";
import { PlusIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function Reagentes() {
    const navigate = useNavigate();
    const handleLogout = () => { }
    const goHome = () => {
        navigate("/home");
    }

    return (
        <>
            <Navbar handleLogout={handleLogout}></Navbar>

            <Grid className="mt-32 px-4">
                <Flex justify="between">
                    <Text color="blue" className="ml-3 mb-4 cursor-pointer" size="2" onClick={goHome}>
                        Voltar ao inicio
                    </Text>

                    <Grid className="">
                        <Button>
                            <PlusIcon /> Add. reagentes
                        </Button>
                    </Grid>
                </Flex>
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Categoria</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Usuário</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Vencimento</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Cadastro</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.RowHeaderCell>Bioquímica</Table.RowHeaderCell>
                            <Table.Cell>Uréia</Table.Cell>
                            <Table.Cell>Marvin S.</Table.Cell>
                            <Table.Cell>12/03/2025</Table.Cell>
                            <Table.Cell>01/01/2025  09:42</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Hematologia</Table.RowHeaderCell>
                            <Table.Cell>Hemoglobina</Table.Cell>
                            <Table.Cell>Giovana B.</Table.Cell>
                            <Table.Cell>30/04/2025</Table.Cell>
                            <Table.Cell>10/02/2025 14:10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Microbiologia</Table.RowHeaderCell>
                            <Table.Cell>Ágar sangue</Table.Cell>
                            <Table.Cell>Lucas M.</Table.Cell>
                            <Table.Cell>15/05/2025</Table.Cell>
                            <Table.Cell>05/03/2025 08:30</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Urianálise</Table.RowHeaderCell>
                            <Table.Cell>Fita de pH</Table.Cell>
                            <Table.Cell>Marvin S.</Table.Cell>
                            <Table.Cell>20/06/2025</Table.Cell>
                            <Table.Cell>22/02/2025 11:15</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Bioquímica</Table.RowHeaderCell>
                            <Table.Cell>Creatinina</Table.Cell>
                            <Table.Cell>Ana P.</Table.Cell>
                            <Table.Cell>10/07/2025</Table.Cell>
                            <Table.Cell>01/03/2025  09:00</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Hematologia</Table.RowHeaderCell>
                            <Table.Cell>EDTA K3</Table.Cell>
                            <Table.Cell>Rafael D.</Table.Cell>
                            <Table.Cell>05/08/2025</Table.Cell>
                            <Table.Cell>15/03/2025 13:50</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>Microbiologia</Table.RowHeaderCell>
                            <Table.Cell>Ágar MacConkey</Table.Cell>
                            <Table.Cell>Giovana B.</Table.Cell>
                            <Table.Cell>25/09/2025</Table.Cell>
                            <Table.Cell>18/03/2025 10:00</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>
            </Grid>

        </>
    );
}

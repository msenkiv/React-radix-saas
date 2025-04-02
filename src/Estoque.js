import { useState } from "react";
import { Table, Grid, Text, Flex, Button, Checkbox } from "@radix-ui/themes";
import * as Popover from "@radix-ui/react-popover";
import { SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Estoque() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => { };
    const goHome = () => {
        navigate("/home");
    };

    return (
        <>
            <Navbar handleLogout={handleLogout} />

            {/* BACKDROP */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)} />
            )}

            <Grid className="mt-32 px-4 relative z-50">
                <Text color="blue" className="ml-3 cursor-pointer mb-4" size="2" onClick={goHome}>
                    Voltar ao início
                </Text>
                <Flex justify="start" align="center" className="mb-4">


                    {/* Botão de Filtros */}
                    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
                        <Popover.Trigger asChild>
                            <Button variant="soft" size="2" className="gap-2 cursor-pointer">
                                <SlidersHorizontal size={16} /> Filtros
                            </Button>
                        </Popover.Trigger>

                        <Popover.Content
                            align="end"
                            className="z-50 ml-4 bg-white p-4 shadow-md border rounded-md flex flex-col gap-2 w-60"
                        >
                            <Text weight="bold" size="2" className="mb-2">
                                Filtrar por Categoria
                            </Text>
                            {[
                                "Reagentes",
                                "Teste rápido",
                                "Materiais descartáveis",
                                "EPI's",
                                "Tubos",
                                "Material de limpeza",
                            ].map((item, index) => (
                                <Flex key={index} align="center" gap="2">
                                    <Checkbox id={item} />
                                    <Text as="label" htmlFor={item} size="2">
                                        {item}
                                    </Text>
                                </Flex>
                            ))}
                        </Popover.Content>
                    </Popover.Root>
                </Flex>

                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Nome</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Data validade</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Quantidade</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Usuário</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Data e Hora cadastro</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.RowHeaderCell>HIV</Table.RowHeaderCell>
                            <Table.Cell>03/2028</Table.Cell>
                            <Table.Cell>64</Table.Cell>
                            <Table.Cell>MARVIN S</Table.Cell>
                            <Table.Cell>01/01/2025 09:42</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>HCV</Table.RowHeaderCell>
                            <Table.Cell>05/2027</Table.Cell>
                            <Table.Cell>50</Table.Cell>
                            <Table.Cell>GIOVANA B</Table.Cell>
                            <Table.Cell>15/01/2025 10:15</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>HBS AG</Table.RowHeaderCell>
                            <Table.Cell>11/2026</Table.Cell>
                            <Table.Cell>42</Table.Cell>
                            <Table.Cell>MARVIN S</Table.Cell>
                            <Table.Cell>20/01/2025 08:10</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>VDRL</Table.RowHeaderCell>
                            <Table.Cell>08/2025</Table.Cell>
                            <Table.Cell>38</Table.Cell>
                            <Table.Cell>LUCAS M</Table.Cell>
                            <Table.Cell>25/01/2025 11:40</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>TROPOMINA</Table.RowHeaderCell>
                            <Table.Cell>12/2026</Table.Cell>
                            <Table.Cell>27</Table.Cell>
                            <Table.Cell>GIOVANA B</Table.Cell>
                            <Table.Cell>28/01/2025 09:05</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.RowHeaderCell>BETA HCG</Table.RowHeaderCell>
                            <Table.Cell>02/2027</Table.Cell>
                            <Table.Cell>35</Table.Cell>
                            <Table.Cell>MARVIN S</Table.Cell>
                            <Table.Cell>02/02/2025 07:30</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                </Table.Root>
            </Grid>
        </>
    );
}

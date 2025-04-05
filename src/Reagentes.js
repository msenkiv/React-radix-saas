import { useState } from "react";
import {
  Table,
  Grid,
  Text,
  Flex,
} from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import AddReagentDialog from "./components/AddReagentDialog";

export default function Reagentes() {
  const navigate = useNavigate();
  const goHome = () => navigate("/home");

  const [reagents, setReagents] = useState([
    {
      category: "Bioquímica",
      name: "Uréia",
      user: "Marvin S.",
      expiration: "12/03/2025",
      createdAt: "01/01/2025 09:42",
    },
    {
      category: "Hematologia",
      name: "Hemoglobina",
      user: "Giovana B.",
      expiration: "30/04/2025",
      createdAt: "10/02/2025 14:10",
    },
    {
      category: "Microbiologia",
      name: "Ágar sangue",
      user: "Lucas M.",
      expiration: "15/05/2025",
      createdAt: "05/03/2025 08:30",
    },
    {
      category: "Urianálise",
      name: "Fita de pH",
      user: "Marvin S.",
      expiration: "20/06/2025",
      createdAt: "22/02/2025 11:15",
    },
    {
      category: "Bioquímica",
      name: "Creatinina",
      user: "Ana P.",
      expiration: "10/07/2025",
      createdAt: "01/03/2025 09:00",
    },
  ]);

  return (
    <>
      <Navbar handleLogout={() => {}} />

      <Grid className="mt-32 px-4">
        <Flex justify="between" align="center" className="mb-4">
          <Text
            color="blue"
            className="ml-3 cursor-pointer"
            size="2"
            onClick={goHome}
          >
            Voltar ao início
          </Text>

          <AddReagentDialog onAdd={(data) => setReagents((prev) => [...prev, data])} />
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
            {reagents.map((item, index) => (
              <Table.Row key={index}>
                <Table.RowHeaderCell>{item.category}</Table.RowHeaderCell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.user}</Table.Cell>
                <Table.Cell>{item.expiration}</Table.Cell>
                <Table.Cell>{item.createdAt}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Grid>
    </>
  );
}

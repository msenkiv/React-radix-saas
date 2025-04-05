import { useState } from "react";
import {
  Button,
  Flex,
  Grid,
  TextField,
  Text,
} from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import { PlusIcon } from "lucide-react";

export default function AddReagentDialog({ onAdd }) {
  const [form, setForm] = useState({
    category: "",
    name: "",
    user: "",
    expiration: "",
    createdAt: "",
  });

  const formatDateToBR = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  const getNowFormatted = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "expiration" && value) {
      setForm((prev) => ({
        ...prev,
        [name]: formatDateToBR(value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const finalData = {
      ...form,
      createdAt: form.createdAt || getNowFormatted(),
    };

    onAdd(finalData);

    setForm({
      category: "",
      name: "",
      user: "",
      expiration: "",
      createdAt: "",
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          <PlusIcon /> Add. reagentes
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Content className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md fixed top-[20%] left-1/2 -translate-x-1/2 z-50 border border-gray-200">
          <Dialog.Title className="text-xl font-semibold text-[#11354b] mb-6">
            Adicionar novo reagente
          </Dialog.Title>

          <Grid gap="4">
            <div>
              <Text as="label" size="2" className="block mb-1 text-[#11354b]">
                Categoria
              </Text>
              <TextField.Root
                placeholder="Ex: Bioquímica"
                name="category"
                value={form.category}
                onChange={handleChange}
              />
            </div>

            <div>
              <Text as="label" size="2" className="block mb-1 text-[#11354b]">
                Nome do reagente
              </Text>
              <TextField.Root
                placeholder="Ex: Uréia"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Text as="label" size="2" className="block mb-1 text-[#11354b]">
                Usuário
              </Text>
              <TextField.Root
                name="user"
                value={form.user}
                onChange={handleChange}
              />
            </div>

            <div>
              <Text as="label" size="2" className="block mb-1 text-[#11354b]">
                Vencimento
              </Text>
              <input
                type="date"
                name="expiration"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </Grid>

          <Flex justify="end" gap="3" mt="8" className="mt-4">
            <Dialog.Close asChild>
              <button
                className="mr-2 px-4 py-2 rounded-md bg-[#e3f2fd] text-[#11354b] text-sm font-medium hover:bg-[#bbdefb] transition"
              >
                Cancelar
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-md bg-[#1565c0] text-white text-sm font-medium hover:bg-[#1976d2] transition"
              >
                Salvar
              </button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

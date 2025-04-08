import { useState } from "react";
import { Flex, Text, Box, Card } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import hemaImg from "./images/hematologia.png";
import bioImg from "./images/bioquimica.png";
import urinaImg from "./images/urianalise.png";
import microImg from "./images/microbiologia.png";

const isExpiringSoon = (dateStr) => {
  const today = new Date();
  const targetDate = new Date(dateStr.split("/").reverse().join("-"));
  const diffInDays = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  return diffInDays <= 30 && diffInDays >= 0;
};

const getDaysUntil = (dateStr) => {
  const today = new Date();
  const targetDate = new Date(dateStr.split("/").reverse().join("-"));
  return Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
};

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const cards = [
    { label: "Hematologia", image: hemaImg },
    { label: "Bioquímica", image: bioImg },
    { label: "Urianálise", image: urinaImg },
    { label: "Microbiologia", image: microImg },
  ];

  // Cálculo de datas futuras
  const today = new Date();
  const addDays = (days) => {
    const future = new Date(today);
    future.setDate(today.getDate() + days);
    return future.toISOString().split("T")[0].split("-").reverse().join("/");
  };

  const [reagents, setReagents] = useState([
    {
      id: 1,
      name: "Uréia",
      category: "Bioquímica",
      expiresAt: addDays(30),
      user: "Marcos S.",
    },
    {
      id: 2,
      name: "Ágar sangue",
      category: "Microbiologia",
      expiresAt: addDays(27),
      user: "Lucas M.",
    },
    {
      id: 3,
      name: "Hemoglobina",
      category: "Hematologia",
      expiresAt: addDays(23),
      user: "Giovana B.",
    },
  ]);

  const markAsResolved = (id) => {
    setReagents((prev) => prev.filter((item) => item.id !== id));
  };

  const expiringSoon = reagents.filter((item) => isExpiringSoon(item.expiresAt));

  return (
    <>
      <Navbar handleLogout={handleLogout} />

      <Flex direction="column" align="center" className="mt-52 px-4 space-y-12">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          {cards.slice(0, 2).map((item, index) => (
            <Card
              key={index}
              size="3"
              className="w-full md:w-1/2 bg-[#f5fafd] hover:shadow-md transition-all cursor-pointer"
            >
              <Flex gap="4" align="center">
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: 150, height: 150 }}
                  className="rounded-full object-cover"
                />
                <Box>
                  <Text
                    as="div"
                    size="6"
                    weight="bold"
                    className="text-[#1565c0]"
                  >
                    {item.label}
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
          {cards.slice(2).map((item, index) => (
            <Card
              key={index}
              size="3"
              className="w-full md:w-1/2 bg-[#f5fafd] hover:shadow-md transition-all cursor-pointer"
            >
              <Flex gap="4" align="center">
                <img
                  src={item.image}
                  alt={item.label}
                  style={{ width: 150, height: 150 }}
                  className="rounded-full object-cover"
                />
                <Box>
                  <Text
                    as="div"
                    size="6"
                    weight="bold"
                    className="text-[#1565c0]"
                  >
                    {item.label}
                  </Text>
                </Box>
              </Flex>
            </Card>
          ))}
        </div>

        {/* Alerta de reagentes próximos do vencimento */}
        {expiringSoon.length > 0 && (
          <Box className="w-full max-w-6xl mt-8">
            <Card className="bg-[#fff8e1] border border-[#ffe082] p-4 rounded-lg shadow-md">
              <Text size="4" weight="bold" className="text-[#ff6f00] mb-4">
                ⚠️ Reagentes próximos do vencimento
              </Text>

              <Flex direction="column" gap="3">
                {expiringSoon.map((item) => (
                  <Flex
                    key={item.id}
                    justify="between"
                    align="center"
                    className="bg-white p-3 rounded-md border border-[#ffe082]"
                  >
                    <Box>
                      <Text weight="bold" className="text-[#ff6f00]">
                        {item.name} ({item.category})
                      </Text>
                      <Text size="2" color="gray">
                        Vence em {getDaysUntil(item.expiresAt)} dias - Responsável: {item.user}
                      </Text>
                    </Box>
                    <button
                      onClick={() => markAsResolved(item.id)}
                      className="px-3 py-1 text-sm bg-[#ff6f00] text-white rounded hover:bg-[#f57c00] transition"
                    >
                      Marcar como resolvido
                    </button>
                  </Flex>
                ))}
              </Flex>
            </Card>
          </Box>
        )}
      </Flex>
    </>
  );
}

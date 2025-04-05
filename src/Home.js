import { useState } from "react";
import { Flex, Text, Box, Card } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import hemaImg from "./images/hematologia.png";
import bioImg from "./images/bioquimica.png";
import urinaImg from "./images/urianalise.png";
import microImg from "./images/microbiologia.png";

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

  const [expiredReagents, setExpiredReagents] = useState([
    {
      id: 1,
      name: "Uréia",
      category: "Bioquímica",
      expiredAt: "10/04/2025",
      user: "Marvin S.",
    },
    {
      id: 2,
      name: "Ágar sangue",
      category: "Microbiologia",
      expiredAt: "05/04/2025",
      user: "Lucas M.",
    },
  ]);

  const markAsResolved = (id) => {
    setExpiredReagents((prev) => prev.filter((item) => item.id !== id));
  };

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

        {/* Alerta de reagentes vencidos */}
        {expiredReagents.length > 0 && (
          <Box className="w-full max-w-6xl mt-8">
            <Card className="bg-[#ffebee] border border-[#ffcdd2] p-4 rounded-lg shadow-md">
              <Text size="4" weight="bold" className="text-[#b71c1c] mb-4">
                ⚠️ Reagentes vencidos encontrados
              </Text>

              <Flex direction="column" gap="3">
                {expiredReagents.map((item) => (
                  <Flex
                    key={item.id}
                    justify="between"
                    align="center"
                    className="bg-white p-3 rounded-md border border-[#ffcdd2]"
                  >
                    <Box>
                      <Text weight="bold" className="text-[#b71c1c]">
                        {item.name} ({item.category})
                      </Text>
                      <Text size="2" color="gray">
                        Vencido em {item.expiredAt} - Responsável: {item.user}
                      </Text>
                    </Box>
                    <button
                      onClick={() => markAsResolved(item.id)}
                      className="px-3 py-1 text-sm bg-[#b71c1c] text-white rounded hover:bg-[#c62828] transition"
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

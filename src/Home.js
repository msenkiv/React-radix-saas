import { useState } from "react";
import { Flex, Button, Text, Grid, Box, Card, Avatar } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import { FlaskConical, Thermometer, Package, Search, LogOut, Menu } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import Navbar from "./components/Navbar";

export default function Home() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar handleLogout={handleLogout}></Navbar>

      {/* Cards - Responsivos */}
      <Flex justify="center" align="center" className="mt-32 px-4">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
          <Box className="w-full md:w-1/2">
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar size="5" radius="full" fallback="H" color="indigo" />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Controle
                  </Text>
                  <Text as="div" size="4" color="gray">
                    Hematologia
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>

          <Box className="w-full md:w-1/2">
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar size="5" radius="full" fallback="B" color="indigo" />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Controle
                  </Text>
                  <Text as="div" size="4" color="gray">
                    Bioquímica
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        </div>
      </Flex>

      <Flex justify="center" align="center" className="mt-12 px-4 text-center">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
          <Box className="w-full md:w-1/2">
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar size="5" radius="full" fallback="U" color="indigo" />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Controle
                  </Text>
                  <Text as="div" size="4" color="gray">
                    Urianalise
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>

          <Box className="w-full md:w-1/2">
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar size="5" radius="full" fallback="M" color="indigo" />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Controle

                  </Text>
                  <Text as="div" size="4" color="gray">
                    Microbiologia
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        </div>
      </Flex>
    </>
  );
}

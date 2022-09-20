import React, { useState } from "react";

import { Box, Flex, Input, Button } from "@chakra-ui/react";
import NextImage from "next/image";

import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutation";

type props = {
  mode: "signin" | "signup";
};

const AuthForm: React.FC<props> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      email,
      password,
      firstName: mode === "signup" ? firstName : undefined,
      lastName: mode === "signup" ? lastName : undefined,
    };
    const user = await auth(mode, payload);
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="50px" bg="gray.900" borderRadius="6px" maxW="50%">
          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <>
                <Input
                  placeholder="First Name"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  marginBottom={5}
                  required
                />
                <Input
                  placeholder="Last Name"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  marginBottom={5}
                  required
                />
              </>
            )}
            <Input
              placeholder="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              marginBottom={5}
              required
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              marginBottom={5}
              required
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;

import React, { useState } from "react";
import { Box, Heading, Text, VStack, Button, Textarea, useToast } from "@chakra-ui/react";

const articles = [
  {
    title: "Šiuolaikinis jaunimas įžvelgia neįkainojamą vertę kompiuteriniuose žaidimuose",
    content: "Šiuolaikinis jaunimas įžvelgia neįkainojamą vertę kompiuteriniuose žaidimuose, tokiuose kaip Minecraft. Pavyzdžiui, žaidėjas sorybas, kuris kūrė įvairius unikalius ir įdomius projektus, rodo, kad žaidimas gali būti ne tik pramoginis, bet ir kūrybiškas procesas. Jo pasisakymas apie tai, kad jam padeda suprasti tikrąjį Minecraft žaidimo dvasią, atskleidžia, kaip šie žaidimai gali formuoti ne tik pramogą, bet ir mokymosi patirtį.",
  },
  // Pridėkite daugiau straipsnių čia
];

const Index = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (title && content) {
      articles.push({ title, content });
      setTitle("");
      setContent("");
      toast({
        title: "Straipsnis sukurtas",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Straipsnių svetainė
      </Heading>

      <VStack spacing={8} align="stretch">
        {articles.map((article, index) => (
          <Box key={index} borderWidth={1} borderRadius="md" padding={4}>
            <Heading as="h2" size="lg" marginBottom={2}>
              {article.title}
            </Heading>
            <Text>{article.content}</Text>
          </Box>
        ))}
      </VStack>

      <Box marginTop={8}>
        <Heading as="h2" size="lg" marginBottom={4}>
          Sukurti naują straipsnį
        </Heading>
        <Textarea placeholder="Straipsnio pavadinimas" value={title} onChange={(e) => setTitle(e.target.value)} marginBottom={4} />
        <Textarea placeholder="Straipsnio turinys" value={content} onChange={(e) => setContent(e.target.value)} marginBottom={4} height="200px" />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Sukurti straipsnį
        </Button>
      </Box>
    </Box>
  );
};

export default Index;

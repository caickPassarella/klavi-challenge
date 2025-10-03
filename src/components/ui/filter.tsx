import { Field, Input, Box } from "@chakra-ui/react";
import type { InputProps } from "@/types";

export const Filter = ({ userInput, onChange, onKeyDown }: InputProps) => (
  <Box paddingY={6}>
    <Field.Root>
      <Field.Label>Search</Field.Label>
      <Input
        placeholder="Search organizations"
        value={userInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </Field.Root>
  </Box>
);

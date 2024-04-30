import { TextInput, Checkbox, Button, Group, Box, Space } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function _BookForm() {
  const form = useForm({
    initialValues: {
      name: "",
      phonenumber: "",
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Name"
          placeholder="Jane Doe"
          {...form.getInputProps("name")}
        />
        <Space h="md" />
        <TextInput
          required
          leftSection="📱"
          label="Number"
          placeholder="xxx-xxx-xxxx"
          {...form.getInputProps("phonenumber")}
        />
        <Space h="md" />
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <Space h="md" />

        <Group position="center" mt="sm">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

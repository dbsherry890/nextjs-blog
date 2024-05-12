import { TextInput, Checkbox, Button, Group, Box, Space } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function _BookForm() {
  const form = useForm({
    initialValues: {
      name: "",
      phonenumber: "",
      email: "",
      details: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) =>
        value.length < 2 ? "First name must have at least 2 letters" : null,
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Name"
          placeholder="Jane Doe"
          // key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <Space h="md" />
        <TextInput
          required
          leftSection="📱"
          label="Number"
          placeholder="xxx-xxx-xxxx"
          // key={form.key("phonenumber")}
          {...form.getInputProps("phonenumber")}
        />
        <Space h="md" />
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          // key={form.key("email")}
          {...form.getInputProps("email")}
        />
        <Space h="md" />
        <TextInput
          label="Details"
          placeholder="Don't go too short! I will be angry!"
          // key={form.key("details")}
          {...form.getInputProps("details")}
        />
        <Space h="md" />

        <Group position="center" mt="sm">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

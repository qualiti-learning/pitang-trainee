import {
  InputWrapper,
  Input,
  Textarea,
  Select,
  NumberInput,
} from "@mantine/core";

const Movie = ({ form }) => (
  <div>
    <InputWrapper mb={8} id="name" required label="Movie Name">
      <Input id="name" name="name" {...form.getInputProps("name")} />
    </InputWrapper>

    <InputWrapper mb={12} id="description" required label="Description">
      <Textarea
        id="description"
        name="description"
        {...form.getInputProps("description")}
      />

      <Select
        mt={8}
        mb={8}
        required
        label="Classificationn"
        placeholder="Pick one"
        data={[
          {
            value: "PARENT_GUIDANCE_SUGGESTED",
            label: "PARENT_GUIDANCE_SUGGESTED",
          },
          { value: "RESTRICTED", label: "RESTRICTED" },
        ]}
        {...form.getInputProps("classification")}
      />

      <NumberInput
        label="Duration"
        id="duration"
        name="duration"
        {...form.getInputProps("duration")}
      />
    </InputWrapper>
  </div>
);

export default Movie;

import { Checkbox, CheckboxGroup, Divider } from "@/packages/components";
import { useState } from "react";

export const ExampleCheckAll = () => {
  const checkboxOptions = [
    { label: "Checkbox 1", value: "1" },
    { label: "Checkbox 2", value: "2" },
    { label: "Checkbox 3", value: "3" },
  ];

  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        label="Check All"
        value={value.length === checkboxOptions.length}
        indeterminate={
          value.length > 0 && value.length < checkboxOptions.length
        }
        onChange={(e) => {
          if (e.target.checked) {
            setValue(checkboxOptions.map((option) => option.value));
          } else {
            setValue([]);
          }
        }}
      />
      <Divider />
      <CheckboxGroup
        options={checkboxOptions}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

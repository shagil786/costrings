import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { split } from "@/public/data";

interface Props {
  dropList: Array<any>;
  placeholder?: any;
  className: string;
  defaultValue?: string;
  type: string;
  selected: any;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  icon?: any;
  truncate?: boolean;
}

const Selection: React.FC<Props> = (props) => {
  const {
    dropList,
    placeholder,
    className,
    defaultValue,
    type = "name",
    selected,
    setSelected,
    icon,
    truncate,
  } = props;
  return (
    <Select
      defaultValue={dropList?.[0]?.id}
      value={selected}
      onValueChange={setSelected}
    >
      {icon}
      <SelectTrigger className={cn("w-[180px] font-semibold", className)}>
        <SelectValue
          placeholder={placeholder}
          defaultValue={0 ?? defaultValue}
        />
      </SelectTrigger>
      <SelectContent>
        {dropList?.map((each, index) => (
          <SelectItem
            value={each?.id}
            key={`${each?.[`${type}`]}_${each?.id}_${index}`}
          >
            {truncate ? split(each?.[`${type}`]) : each?.[`${type}`]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Selection;

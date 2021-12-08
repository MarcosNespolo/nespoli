import { CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/solid"
import React, { useState } from "react"
import InputCash from "../Inputs/InputCash";
import InputDate from "../Inputs/InputDate";
import InputText from "../Inputs/InputText";
import SelectOption from "../Selects/SelectOption";

export type SectionCardProps = {
  label: string;
  text?: string;
  color?: string;
  type?: string;
  list?: string[];
  width?: string;
}

export default function SectionCard(props: SectionCardProps) {
  const [text, setText] = useState<string>(props.text);
  const [list, setList] = useState<string[]>(props.list);
  const [width, setWidth] = useState<string>(props.width ? props.width : "1");

  return (
    <div className={`m-0 col-span-${width}`}>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-0">
        {props.label}
      </label>
      <div
        className="w-full h-auto mt-0 inline-flex items-top text-gray-500 pt-0.5">
        {props.type && props.type === 'input' ?
          <InputText text={text} />
          : props.type === 'select' && list && list.length > 1 ?
            <SelectOption selected={text} list={list} />
            : props.type === 'date' ?
              <InputDate date={text} />
              : props.type === 'cash' ?
                <InputCash cash={text} />
                :
                <p className="flex flex-wrap mb-2 lg:mb-5 content-top text-sm text-gray-500">
                  {props.text}
                </p>
        }
      </div>
    </div>
  )
}
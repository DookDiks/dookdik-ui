import { ComponentProps } from "react";
import { Varients } from "../types/varients";

export * from "./Input"
export * from "./NumberInput"

export type InputProps = ComponentProps<"input"> & {
  varients?: Varients;
};
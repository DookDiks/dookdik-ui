import { ComponentProps } from "react";
import { Varients } from "../types/varients";

export * from "./Button"

export type ButtonProps = ComponentProps<"button"> & {
  varients?: Varients;
};
import { Button, ButtonProps } from "@mui/material";
export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      color={props.color}
      variant={props.variant}
      disabled={props.disabled}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      children={props.children}
    />
  );
}

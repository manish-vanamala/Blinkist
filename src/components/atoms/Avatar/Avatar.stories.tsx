import { AvatarClasses, SxProps, Theme } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';
import { ReactNode, ImgHTMLAttributes, DetailedHTMLProps, HTMLAttributes, RefObject } from 'react';
import CustomAvatar from './Avatar';
export default {
    title: 'atoms/Avatar',
    component:CustomAvatar
};

const template = (args: JSX.IntrinsicAttributes & { alt?: string | undefined; children?: ReactNode; classes?: Partial<AvatarClasses> | undefined; imgProps?: (ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme> | undefined; }) | undefined; sizes?: string | undefined; src?: string | undefined; srcSet?: string | undefined; sx?: SxProps<Theme> | undefined; variant?: "circular" | "rounded" | "square" | undefined; } & CommonProps & Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined; }, keyof CommonProps | "alt" | "children" | "imgProps" | "sizes" | "src" | "srcSet" | "sx" | "variant">) => <CustomAvatar {...args}/>;

export const DefaultAvatar = template.bind({});

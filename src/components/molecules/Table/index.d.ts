import type { ReactNode } from 'react';
type CSSWidth = React.CSSProperties['width'];
interface CommonProps {
    className?: string;
    children?: ReactNode;
}
export interface TableProps extends CommonProps {
    fixedTitleCount: number;
}
export type TableHeaderProps = CommonProps;
export interface TableTitleProps extends CommonProps {
    width?: CSSWidth;
}
export type TableBodyProps = CommonProps;
export type TableRowProps = CommonProps;
export interface TableCellProps extends CommonProps {
    onCopy?: (value: string) => void;
    hoverStyle?: Pick<React.CSSProperties, 'maxHeight' | 'maxWidth'>;
}
export declare const Table: (({ className, children, fixedTitleCount }: TableProps) => JSX.Element) & {
    Header: ({ children, className }: TableHeaderProps) => JSX.Element;
    Title: ({ children, width, className }: TableTitleProps) => JSX.Element;
    Body: ({ children, className }: TableBodyProps) => JSX.Element;
    Row: ({ children, className }: TableRowProps) => JSX.Element;
    Cell: ({ children, onCopy, className, hoverStyle, }: TableCellProps) => JSX.Element;
};
export {};
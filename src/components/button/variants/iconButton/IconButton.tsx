import { forwardRef, type ReactNode} from 'react';
import { Button, type ButtonProps } from '../../root/Button.tsx';

//-------------------------------------------------------------------------------------------------
// IconButton Properties

export interface IconButtonProps extends ButtonProps {
    icon?: ReactNode;
}


//--------------------------------------------------------------------------------------------------
// IconButton - Component

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon }, ref) => (
        <Button className="" variant="tertiary" ref={ref}>
            {icon}
        </Button>
    )
);

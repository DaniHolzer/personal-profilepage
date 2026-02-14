import { Button } from 'components/button/root/Button';
import { useState } from 'react';
import { hotdogButtonStyles } from './HotdogButton.styles';
import { cx } from 'tailwind-variants';

//-------------------------------------------------------------------------------------------------
// Animated Menu Button Component

export function HotdogButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const { base, line, lineTop, lineBottom, animationTop, animationBottom } =
    hotdogButtonStyles({ size: 'md' });

  return (
    <Button onClick={() => setOpen(!open)} className={cx(className, base())} variant="transparent">
      {/* line top */}
      <span className={cx(line(), lineTop(), open && animationTop())} />
      {/* line bottom */}
      <span className={cx(line(), lineBottom(), open && animationBottom())} />
    </Button>
  );
}

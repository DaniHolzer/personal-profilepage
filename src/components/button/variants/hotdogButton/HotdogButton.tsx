import { Button } from '~/components/button/base/Button';
import { hotdogButtonStyles } from './HotdogButton.styles';
import type { HotdogButtonProps } from "./HotdogButton.types";
import { cx } from 'tailwind-variants';

//-------------------------------------------------------------------------------------------------
// Animated Menu Button Component

export function HotdogButton({
  className,
  isOpen,
  onClick,
}:HotdogButtonProps) {
  const { base, line, lineTop, lineBottom, animationTop, animationBottom } =
    hotdogButtonStyles({ size: 'md' });

  return (
    <Button
      onClick={onClick}
      className={cx(className, base())}
      variant="ghost"
    >
      {/* line top */}
      <span className={cx(line(), lineTop(), isOpen && animationTop())} aria-hidden />
      {/* line bottom */}
      <span className={cx(line(), lineBottom(), isOpen && animationBottom())} aria-hidden/>
    </Button>
  );
}

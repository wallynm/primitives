import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function TooltipPage() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>Hover or Focus me</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content sideOffset={5}>
          Nicely done!
          <Tooltip.Arrow offset={10} />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

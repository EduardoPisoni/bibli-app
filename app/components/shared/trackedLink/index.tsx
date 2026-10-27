'use client'

import { sendGAEvent } from '@next/third-parties/google';

type Props = React.ComponentProps<'a'> & {
  event: string;
};

export default function TrackedLink({ event, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={() => sendGAEvent('event', event)}
    />
  );
};

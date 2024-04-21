import { FC, ReactNode } from 'react';
import { Tooltip as TP } from 'react-tooltip';

interface TooltipProps {
  children: ReactNode;
  text: string;
  id: string | number;
}

// TODO add molecules if you need clickable TP or other settings

const Tooltip: FC<TooltipProps> = ({ children, text, id }) => {
  return (
    <>
      <a data-tooltip-id={`my-tooltip-${id}`} data-tooltip-content={`${id}`}>
        {children}
      </a>
      <TP id={`my-tooltip-${id}`} render={() => <span>{text}</span>} />
    </>
  );
};

export default Tooltip;

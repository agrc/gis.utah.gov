import {
  Root,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';

const Tooltip = ({ children, content }) => {
  return (
    <TooltipProvider>
      <Root>
        <TooltipTrigger asChild>
          <button className="">{children}</button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent
            className="data-[side=top]:slide-in-from-bottom-2group z-20 max-w-xs rounded-lg border border-slate-800 bg-slate-700 px-3 py-1 text-sm text-white shadow-[inset_0_1px_0_0_theme(colors.gray.600)] drop-shadow-lg will-change-transform data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 dark:border-white/10 dark:bg-slate-600 dark:shadow-none"
            sideOffset={5}
          >
            {content}
            <TooltipArrow className="fill-bg-slate-700 dark:fill-bg-slate-600" />
          </TooltipContent>
        </TooltipPortal>
      </Root>
    </TooltipProvider>
  );
};

export default Tooltip;


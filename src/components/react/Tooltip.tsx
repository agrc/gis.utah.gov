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
            // className="max-w-screen-xs max-w-xs select-none rounded border bg-white px-[15px] py-2.5 text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
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

// data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade

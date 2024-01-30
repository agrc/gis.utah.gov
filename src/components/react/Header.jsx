import { CheckBadgeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as Collapsible from '@radix-ui/react-collapsible';
import PropTypes from 'prop-types';

export const Header = ({ className, children }) => {
  return (
    <Collapsible.Root>
      <header className={className}>
        <div className="flex items-center justify-between border-b border-b-primary/30 px-3 pb-2 pt-1 dark:border-black/10">
          <div className="flex h-16 flex-1 flex-row space-x-6 divide-x divide-slate-500">
            <Collapsible.Trigger className="h-16 w-28">
              <span className="sr-only">An official website of the State of Utah. Click to learn more.</span>
              <svg
                className="fill-primary text-sm dark:fill-white"
                style={{
                  fontFamily: 'SourceSansPro-Regular,Source Sans Pro,Arial,Helvetica,sans-serif',
                }}
                viewBox="0 0 105.9496 47.6226"
                role="img"
              >
                <g>
                  <g>
                    <path d="M12.2714,30.0877c-4.1489,0-7.2318-1.2037-9.2489-3.611C1.0055,24.0693-.002,20.334,0,15.2709V0H7.8175V16.1806c0,2.6363,.356,4.4923,1.0679,5.5679,.7613,1.1018,2.0506,1.7162,3.3859,1.6134,1.3465,.0953,2.6458-.5157,3.4313-1.6134,.7422-1.0756,1.1133-2.9316,1.1133-5.5679V0h7.5448V15.2709c0,5.0601-.9847,8.7946-2.9541,11.2035-1.9694,2.4089-5.0145,3.6133-9.1352,3.6133Zm24.0887-.5463V6.5444h-7.8175V0h23.4526V6.5444h-7.8175V29.5414h-7.8175Zm25.8151-14.362l-.5002,2.0452h5.455l-.5002-2.0452c-.3637-1.4239-.7273-2.9693-1.091-4.636-.3637-1.6667-.7261-3.242-1.0871-4.7259h-.1821c-.3334,1.5151-.6743,3.0983-1.0226,4.7497s-.7053,3.189-1.071,4.6129l-.0008-.0008Zm-11.3617,14.362L59.8127,0h9.4502l9.0023,29.5414h-8.2724l-1.4544-6.2709h-8.2716l-1.4544,6.2709h-7.9988Zm30.2713,0V0h7.8175V10.9991h8.8171V0h7.8175V29.5414h-7.8175v-11.7251h-8.8194v11.7251h-7.8152Z"></path>
                  </g>
                  <text transform="translate(.0419 43.5205)" aria-hidden="true">
                    <tspan x="0" y="0">
                      An official website
                    </tspan>
                  </text>
                </g>
              </svg>
            </Collapsible.Trigger>
            <div className="flex flex-1 justify-start pl-6">{children}</div>
          </div>
        </div>
      </header>
      <Collapsible.Content>
        <Flyout />
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

const Flyout = () => {
  return (
    <div className="relative z-10 bg-zinc-600 px-6 py-4 shadow-lg">
      <p className="mb-8 text-xl font-bold text-zinc-50 md:text-2xl lg:mb-4">
        This is an official website of the State of Utah. Here&apos;s how you know:
      </p>
      <div className="flex flex-col justify-around gap-10 lg:flex-row">
        <div className="flex items-center gap-2 lg:w-96 lg:items-start">
          <CheckBadgeIcon className="w-16 text-zinc-50" />
          <p className="text-zinc-50">
            <span className="block font-bold">
              Official Utah websites use utah.gov in the browser&apos;s address bar.
            </span>
            A Utah.gov website belongs to an official government organization in the State of Utah.
          </p>
        </div>
        <div className="flex items-center gap-2 lg:w-96 lg:items-start">
          <LockClosedIcon className="w-16 text-zinc-50" />
          <div className="text-zinc-50">
            <span className="block font-bold">Be careful when sharing sensitive information.</span>
            Share sensitive information only on secure official Utah.gov websites.
          </div>
        </div>
        <div className="flex items-center gap-4 text-zinc-50 sm:flex-col sm:gap-0">
          <svg
            className="w-36 fill-current text-sm"
            style={{
              fontFamily: 'SourceSansPro-Regular,Source Sans Pro,Arial,Helvetica,sans-serif',
            }}
            viewBox="0 0 105.9496 47.6226"
            role="img"
          >
            <g>
              <g>
                <path d="M12.2714,30.0877c-4.1489,0-7.2318-1.2037-9.2489-3.611C1.0055,24.0693-.002,20.334,0,15.2709V0H7.8175V16.1806c0,2.6363,.356,4.4923,1.0679,5.5679,.7613,1.1018,2.0506,1.7162,3.3859,1.6134,1.3465,.0953,2.6458-.5157,3.4313-1.6134,.7422-1.0756,1.1133-2.9316,1.1133-5.5679V0h7.5448V15.2709c0,5.0601-.9847,8.7946-2.9541,11.2035-1.9694,2.4089-5.0145,3.6133-9.1352,3.6133Zm24.0887-.5463V6.5444h-7.8175V0h23.4526V6.5444h-7.8175V29.5414h-7.8175Zm25.8151-14.362l-.5002,2.0452h5.455l-.5002-2.0452c-.3637-1.4239-.7273-2.9693-1.091-4.636-.3637-1.6667-.7261-3.242-1.0871-4.7259h-.1821c-.3334,1.5151-.6743,3.0983-1.0226,4.7497s-.7053,3.189-1.071,4.6129l-.0008-.0008Zm-11.3617,14.362L59.8127,0h9.4502l9.0023,29.5414h-8.2724l-1.4544-6.2709h-8.2716l-1.4544,6.2709h-7.9988Zm30.2713,0V0h7.8175V10.9991h8.8171V0h7.8175V29.5414h-7.8175v-11.7251h-8.8194v11.7251h-7.8152Z"></path>
              </g>
              <text transform="translate(.0419 43.5205)" aria-hidden="true">
                <tspan x="0" y="0">
                  An official website
                </tspan>
              </text>
            </g>
          </svg>
          <div className="text-sm">© State of Utah</div>
        </div>
      </div>
      <Collapsible.Trigger className="absolute right-2 top-2 rounded-full p-1 text-zinc-50 hover:bg-black/10">
        <XMarkIcon className="w-7" />
        <span className="sr-only">Close official website popup</span>
      </Collapsible.Trigger>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

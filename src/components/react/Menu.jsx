import * as Dialog from '@radix-ui/react-dialog';
import { CaretDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import React from 'react';

export const Menu = ({ children, currentUri }) => {
  return (
    <NavigationMenu.Root className="relative z-10 hidden h-12 min-h-12 items-center bg-zinc-100 lg:flex dark:bg-secondary [&>div]:flex-1">
      <NavigationMenu.List className="m-0 flex flex-1 list-none px-1 text-center">
        <NavigationMenu.Item className="" value="home">
          <MenuLink href="/" currentUri={currentUri}>
            Home
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="products">
          <DropDownMenu to="/products" currentUri={currentUri}>
            Products
          </DropDownMenu>
          <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:slide-in-from-right data-[motion=from-start]:slide-in-from-left data-[motion=to-end]:slide-out-to-right data-[motion=to-start]:slide-out-to-left data-[motion=from-end]:anim-duration-500 data-[motion=from-start]:anim-duration-500 data-[motion=to-end]:anim-duration-500 data-[motion=to-start]:anim-duration-500 sm:w-auto">
            <MegaMenuChrome className="flex w-full flex-col gap-4 pr-6 md:gap-2">
              <MegaMenuItem>
                <ListItem title="SGID" href="/products/sgid">
                  A multi-faceted centralized collection of hundreds of GIS data layers developed, aggregated, or
                  acquired by the State of Utah.
                </ListItem>
                <ListItem title="Discover" href="/products/discover">
                  A cloud-based server that provides aerial imagery and base maps for GIS, CAD, or web applications.
                </ListItem>
                <ListItem title="TURN GPS" href="/products/turn">
                  High-precision global navigation satellite system (GNSS) providing real-time corrections and data for
                  post processing.
                </ListItem>
                <ListItem title="UGRC API" href="/products/api">
                  An HTTP accessible API with endpoints to search the SGID and geocode.
                </ListItem>
              </MegaMenuItem>
            </MegaMenuChrome>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="solutions">
          <DropDownMenu to="/solutions" currentUri={currentUri}>
            Solutions
          </DropDownMenu>
          <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:slide-in-from-right data-[motion=from-start]:slide-in-from-left data-[motion=to-end]:slide-out-to-right data-[motion=to-start]:slide-out-to-left data-[motion=from-end]:anim-duration-500 data-[motion=from-start]:anim-duration-500 data-[motion=to-end]:anim-duration-500 data-[motion=to-start]:anim-duration-500 sm:w-auto">
            <MegaMenuChrome className="flex w-full flex-row gap-4 pr-6 md:gap-2">
              <MegaMenuItem title="By audience" containerCss="md:w-1/3">
                <ListItem href="/solutions/for-government" title="Government employees">
                  Partner with us to geo-enable your agency.
                </ListItem>
                <ListItem href="/solutions/for-gis-users" title="GIS users">
                  Integrate our data and services with your GIS.
                </ListItem>
                <ListItem href="/solutions/for-application-developers" title="Application developers">
                  Use our tools and resources to innovate and build.
                </ListItem>
                <ListItem href="/solutions/for-surveyors" title="Surveyors">
                  Find your direction. We can help.
                </ListItem>
                <ListItem href="/solutions/for-students" title="Students">
                  Learning never ends.
                </ListItem>
              </MegaMenuItem>
              <MegaMenuItem title="By use case" containerCss="md:w-1/3">
                <ListItem href="/solutions/spatial-data-management" title="Spatial data management">
                  Learn how we can help.
                </ListItem>
                <ListItem href="/solutions/for-emergency-response" title="Emergency response (911)">
                  Data and solutions for when it matters most.
                </ListItem>
                <ListItem href="/solutions/gis-strategy" title="GIS strategy">
                  Begin thinking bigger by thinking differently.
                </ListItem>
                <ListItem href="/solutions/gis-integration" title="Integrating GIS">
                  Location matters to your business processes.
                </ListItem>
                <ListItem href="/solutions/high-precision-location" title="High precision location">
                  Examples of how a high precision GPS network can be used.
                </ListItem>
              </MegaMenuItem>
            </MegaMenuChrome>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="documentation">
          <MenuLink href="/documentation" currentUri={currentUri}>
            Documentation
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="collaboration">
          <MenuLink href="/collaboration" currentUri={currentUri}>
            Collaboration
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="blog">
          <MenuLink href="/blog" currentUri={currentUri}>
            Blog
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="about">
          <MenuLink href="/about" currentUri={currentUri}>
            About
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="contact">
          <MenuLink href="/contact" currentUri={currentUri}>
            Contact
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="flex flex-1 justify-end" value="site-search">
          {children}
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="z-10 mt-[0.3rem] h-1 overflow-hidden rounded-t-full bg-primary transition-all data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in" />
      </NavigationMenu.List>

      <div className="absolute left-3 top-full flex w-full perspective-[2000px]">
        <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border bg-white shadow-lg transition-[width,_height] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out data-[state=open]:zoom-in sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};
export const SmallMenu = ({ children, currentUri }) => (
  <Dialog.Root>
    <div className="items-between flex h-12 shrink-0 bg-zinc-100 lg:hidden dark:bg-secondary">
      <div className="flex flex-1 items-center justify-between">
        <Dialog.Trigger asChild className="outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary">
          <button
            className="ml-2 rounded-full p-1 outline-none focus:shadow-[0_0_0_2px] focus:shadow-primary"
            aria-label="open the main menu"
          >
            <HamburgerMenuIcon className="size-6 text-zinc-800 focus:outline-none dark:text-zinc-50" />
          </button>
        </Dialog.Trigger>
        <span className="mr-2">{children}</span>
      </div>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-40 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in" />
      <Dialog.Content className="fixed inset-y-0 left-0 z-50 h-full w-72 gap-4 border-r border-white/20 bg-zinc-50 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm dark:bg-secondary">
        <NavigationMenu.Root orientation="vertical">
          <NavigationMenu.List className="mt-4 flex list-none flex-col p-1">
            <NavigationMenu.Item value="home">
              <MobileMenuLink href="/" currentUri={currentUri}>
                Home
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="products">
              <MobileDropDownMenu href="/products" currentUri={currentUri}>
                Products
              </MobileDropDownMenu>
              <NavigationMenu.Content>
                <NavigationMenu.List className="pl-2 pt-1">
                  <NavigationMenu.Item value="products">
                    <MobileListItem href="/products/sgid">SGID</MobileListItem>
                    <MobileListItem href="/products/discover">Discover</MobileListItem>
                    <MobileListItem href="/products/turn">TURN GPS</MobileListItem>
                    <MobileListItem href="/products/api">UGRC API</MobileListItem>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="solutions">
              <MobileDropDownMenu href="/solutions" currentUri={currentUri}>
                Solutions
              </MobileDropDownMenu>
              <NavigationMenu.Content>
                <NavigationMenu.List className="pl-2 pt-1">
                  <NavigationMenu.Item value="solutions-audience">
                    <p className="pb-2 pl-2 text-xs uppercase text-accent">By audience</p>
                    <MobileListItem href="/solutions/for-government">Government employees</MobileListItem>
                    <MobileListItem href="/solutions/for-gis-users">GIS users</MobileListItem>
                    <MobileListItem href="/solutions/for-application-developers">Application developers</MobileListItem>
                    <MobileListItem href="/solutions/for-surveyors">Surveyors</MobileListItem>
                    <MobileListItem href="/solutions/for-students">Students</MobileListItem>
                    <p className="py-2 pl-2 text-xs uppercase text-accent">By use case</p>
                    <MobileListItem href="/solutions/spatial-data-management">Spatial data management</MobileListItem>
                    <MobileListItem href="/solutions/for-emergency-response">Emergency response (911)</MobileListItem>
                    <MobileListItem href="/solutions/gis-strategy">GIS strategy</MobileListItem>
                    <MobileListItem href="/solutions/gis-integration">Integrating GIS</MobileListItem>
                    <MobileListItem href="/solutions/high-precision-location">High Precision Location</MobileListItem>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="documentation">
              <MobileMenuLink href="/documentation" currentUri={currentUri}>
                Documentation
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="collaboration">
              <MobileMenuLink href="/collaboration" currentUri={currentUri}>
                Collaboration
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="blog">
              <MobileMenuLink href="/blog" currentUri={currentUri}>
                Blog
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="about">
              <MobileMenuLink href="/about" currentUri={currentUri}>
                About
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="contact">
              <MobileMenuLink href="/contact" currentUri={currentUri}>
                Contact
              </MobileMenuLink>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Dialog.Close asChild>
          <button
            className="absolute left-[10px] top-[10px] inline-flex size-6 appearance-none items-center justify-center rounded-full text-zinc-800 hover:bg-zinc-200 focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none dark:text-white"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-7"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
const isActive = (slug, currentUri) => {
  if (slug !== '/') {
    return currentUri.toLowerCase().startsWith(slug);
  }

  return currentUri === slug;
};
const MenuLink = ({ href, children, currentUri }) => {
  return (
    <NavigationMenu.Link
      href={href}
      className={classNames(
        'custom-style relative block select-none rounded-full px-3 py-2 text-sm font-medium leading-none text-zinc-600 no-underline outline-none hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] focus:shadow-primary dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100',
        {
          'text-secondary before:absolute before:-top-[0.6rem] before:left-0 before:z-10 before:block before:h-1 before:w-full before:rounded-b-full before:bg-accent':
            isActive(href, currentUri),
        },
      )}
    >
      {children}
    </NavigationMenu.Link>
  );
};
const MobileMenuLink = ({ href, children, currentUri }) => {
  return (
    <NavigationMenu.Link
      href={href}
      className={classNames(
        'custom-style relative block select-none rounded-full px-3 py-2 text-sm font-medium leading-none text-zinc-600 no-underline outline-none hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] focus:shadow-primary dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100',
        {
          'text-secondary before:absolute before:-left-[28px] before:top-0 before:h-8 before:w-1 before:bg-accent':
            isActive(href, currentUri),
        },
      )}
    >
      {children}
    </NavigationMenu.Link>
  );
};
const DropDownMenu = ({ to, children, currentUri }) => (
  <NavigationMenu.Trigger
    className={classNames(
      'custom-style group relative flex select-none items-center justify-between gap-1 rounded-full px-4 py-2 text-sm font-semibold leading-none text-zinc-600 outline-none hover:bg-white/20 hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] focus:shadow-primary dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100',
      {
        'text-secondary before:absolute before:-top-2 before:left-0 before:z-10 before:block before:h-1 before:w-full before:rounded-b-full before:bg-accent':
          isActive(to, currentUri),
      },
    )}
  >
    {children}{' '}
    <CaretDownIcon
      className="relative top-px text-zinc-600 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180 dark:text-zinc-50"
      aria-hidden
    />
  </NavigationMenu.Trigger>
);
const MobileDropDownMenu = ({ href, children, currentUri }) => {
  return (
    <NavigationMenu.Trigger
      className={classNames(
        'custom-style group relative flex select-none items-center justify-between gap-1 rounded-full px-3 py-2 text-sm font-medium leading-none text-zinc-600 no-underline outline-none hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] focus:shadow-primary dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100',
        {
          'text-secondary before:absolute before:-left-[28px] before:top-0 before:h-8 before:w-1 before:bg-accent':
            isActive(href, currentUri),
        },
      )}
    >
      {children}{' '}
      <CaretDownIcon
        className="relative top-px text-zinc-600 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180 dark:text-zinc-50"
        aria-hidden
      />
    </NavigationMenu.Trigger>
  );
};
const MegaMenuChrome = ({ children, className }) => (
  <section className="min-h-40 min-w-[720px] py-5">
    <div className={className}>{children}</div>
  </section>
);
const MegaMenuItem = ({ children, title, containerCss }) => (
  <div className={classNames('grow pl-6 align-top', containerCss)}>
    {title && <p className="text-lg font-bold uppercase text-zinc-600 md:text-sm">{title}</p>}
    <ul className="m-0 grid list-none">{children}</ul>
  </div>
);
const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'custom-style block cursor-pointer select-none rounded p-3 text-base no-underline outline-none hover:bg-zinc-200 focus:shadow-[0_0_0_2px] focus:shadow-primary sm:py-1',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="font-semibold text-zinc-700">{title}</div>
        <p className="text-sm text-zinc-500">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
const MobileListItem = React.forwardRef(({ className, children, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'custom-style block cursor-pointer select-none rounded-full p-3 no-underline outline-none hover:bg-zinc-200 focus:shadow-[0_0_0_2px] focus:shadow-primary sm:py-1 ',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <p className="text-sm text-zinc-50 hover:text-zinc-800">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

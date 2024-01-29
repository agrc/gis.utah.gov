import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

export const Menu = ({ currentUri }) => {
  return (
    <NavigationMenu.Root
      // value="products"
      className="relative z-10 flex h-12 min-h-12 w-screen items-center bg-zinc-100 dark:bg-secondary"
    >
      <NavigationMenu.List className="m-0 flex list-none p-1 text-center">
        <NavigationMenu.Item value="home">
          <MenuLink href="/" currentUri={currentUri}>
            Home
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="products">
          <DropDownMenu to="/products" currentUri={currentUri}>
            Products
          </DropDownMenu>
          <NavigationMenu.Content className="data-[motion=to-start]:anim-duration-500 data-[motion=from-start]:anim-duration-500 data-[motion=from-end]:anim-duration-500 data-[motion=to-end]:anim-duration-500 absolute left-0 top-0 w-full data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:slide-in-from-right data-[motion=from-start]:slide-in-from-left data-[motion=to-end]:slide-out-to-right data-[motion=to-start]:slide-out-to-left sm:w-auto">
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
          <NavigationMenu.Content className="data-[motion=to-start]:anim-duration-500 data-[motion=from-start]:anim-duration-500 data-[motion=from-end]:anim-duration-500 data-[motion=to-end]:anim-duration-500 absolute left-0 top-0 w-full data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:slide-in-from-right data-[motion=from-start]:slide-in-from-left data-[motion=to-end]:slide-out-to-right data-[motion=to-start]:slide-out-to-left sm:w-auto">
            <MegaMenuChrome className="flex w-full flex-row gap-4 pr-6 md:gap-2">
              <MegaMenuItem title="By audience" containerCss="md:w-1/3">
                <ListItem href="/solutions/for-government" title="Government employees">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/for-gis-users" title="GIS users">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/for-application-developers" title="Application developers">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/for-surveyors" title="Surveyors">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/for-students" title="Students">
                  Learn what we can offer you.
                </ListItem>
              </MegaMenuItem>
              <MegaMenuItem title="By use case" containerCss="md:w-1/3">
                <ListItem href="/solutions/gis-data-management" title="Spatial data management">
                  Learn how we can help.
                </ListItem>
                <ListItem href="/solutions/911" title="Emergency response (911)">
                  See what we can offer you.
                </ListItem>
                <ListItem href="/solutions/gis-strategy" title="GIS strategy">
                  Let us help you develop your GIS strategy.
                </ListItem>
                <ListItem href="/solutions/gis-integration" title="Integrating GIS">
                  Read how GIS can fit in your business.
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

        <NavigationMenu.Indicator className="top-full z-10 flex h-1 items-end justify-center overflow-hidden bg-primary transition-all data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in" />
      </NavigationMenu.List>

      <div className="absolute left-3 top-full flex w-full perspective-[2000px]">
        <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border bg-white shadow-lg transition-[width,_height] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out data-[state=open]:zoom-in sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};
const isActive = (slug, currentUri) => {
  console.log(slug, currentUri);
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
          'text-secondary before:absolute before:-top-2 before:left-0 before:z-10 before:block before:h-1 before:w-full before:rounded-b-full before:bg-accent':
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

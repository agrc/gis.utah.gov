import { CaretDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const menuTextCss = (isActive) =>
  classNames(
    'transition duration-300 group relative flex select-none items-center justify-between gap-1 py-[2px] px-4 font-semibold text-sm leading-none text-zinc-600 outline-none dark:text-zinc-100 h-6 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-full hover:bg-white/20',
    {
      'text-secondary before:absolute before:-top-2 before:left-0 before:z-10 before:block before:h-1 before:w-full before:rounded-b-full before:bg-accent ':
        isActive,
    },
  );

// TODO fix this so that when motion from or to a non drop down menu, the menu doesn't animate
const menuItemCss =
  'absolute left-0 top-0 w-full data-[motion=from-end]:animate-in data-[motion=from-end]:slide-in-from-right data-[motion=from-start]:animate-in data-[motion=from-start]:slide-in-from-left data-[motion=to-end]:animate-out data-[motion=to-end]:slide-out-to-right data-[motion=to-start]:animate-out data-[motion=to-start]:slide-out-to-left sm:w-auto';
const isActive = (slug, currentUri) => {
  if (slug !== '/') {
    return currentUri.toLowerCase().startsWith(slug);
  }

  return currentUri === slug;
};

export const Menu = ({ currentUri }) => {
  return (
    <NavigationMenu.Root
      // value="radix-:r0Rr:"
      // value="radix-:r0R13:"
      onValueChange={console.log}
      className="relative z-10 flex w-screen min-w-0 justify-start border-b border-dashed border-b-zinc-300 bg-zinc-100 pb-1 pl-2 pr-6 pt-[1.5px] dark:bg-secondary"
    >
      <NavigationMenu.List className="flex list-none justify-center pb-1 pt-[6px]">
        <NavigationMenu.Item>
          <MenuTrigger hasCaret={false}>
            <MenuLink className={menuTextCss(isActive('/', currentUri))} to="/">
              Home
            </MenuLink>
          </MenuTrigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger className={menuTextCss(isActive('/products', currentUri))}>Products</MenuTrigger>
          <NavigationMenu.Content className={menuItemCss}>
            <MegaMenuChrome>
              <MegaMenuItem title="SGID" containerCss="md:w-1/4">
                <ListItem to="/products/sgid" title="">
                  A multi-faceted centralized collection of hundreds of GIS data layers developed, aggregated, or
                  acquired by the State of Utah.
                </ListItem>
              </MegaMenuItem>
              <MegaMenuItem title="Discover" containerCss="md:w-1/4">
                <ListItem to="/products/discover">
                  A cloud-based server that provides UGRC's aerial imagery and base maps to anyone who wants to use them
                  in their GIS, CAD, or web applications.
                </ListItem>
              </MegaMenuItem>
              <MegaMenuItem title="TURN GPS" containerCss="md:w-1/4">
                <ListItem to="/products/gps">
                  High-precision global navigation satellite system (GNSS) providing real-time corrections and data for
                  post processing.
                </ListItem>
              </MegaMenuItem>
              <MegaMenuItem title="UGRC API" containerCss="md:w-1/4">
                <ListItem to="/products/api">
                  An HTTP accessible API with endpoints to search the SGID and geocode.
                </ListItem>
              </MegaMenuItem>
            </MegaMenuChrome>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger className={menuTextCss(isActive('/solutions', currentUri))}>Solutions</MenuTrigger>
          <NavigationMenu.Content className={menuItemCss}>
            <MegaMenuChrome>
              <MegaMenuItem title="By industry" containerCss="md:w-1/3">
                <ListItem href="/solutions/government" title="Government agency solutions">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/gis-users" title="GIS Users">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/application-developers" title="Application developers">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/surveyors" title="Surveyors">
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
              <MegaMenuItem title="By business need" containerCss="md:w-1/3">
                <ListItem href="/solutions/providing-location" title="Location based services">
                  Learn how location can improve the service you provide to citizens.
                </ListItem>
                <ListItem href="/solutions/improving-resources" title="Enhancing natural resources">
                  Learn what we can offer you.
                </ListItem>
                <ListItem href="/solutions/location-services" title="GIS strategy">
                  Let location take you places.
                </ListItem>
              </MegaMenuItem>
            </MegaMenuChrome>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger currentUri={currentUri} slug="/documentation" hasCaret={false}>
            <MenuLink to="/documentation" className={menuTextCss(isActive('/documentation', currentUri))}>
              Documentation
            </MenuLink>
          </MenuTrigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger hasCaret={false}>
            <MenuLink to="/collaboration" className={menuTextCss(isActive('/collaboration', currentUri))}>
              Collaboration
            </MenuLink>
          </MenuTrigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger hasCaret={false}>
            <MenuLink to="/blog" className={menuTextCss(isActive('/blog', currentUri))}>
              Blog
            </MenuLink>
          </MenuTrigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger hasCaret={false}>
            <MenuLink to="/about" className={menuTextCss(isActive('/about', currentUri))}>
              About
            </MenuLink>
          </MenuTrigger>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger hasCaret={false}>
            <MenuLink to="/contact" className={menuTextCss(isActive('/contact', currentUri))}>
              Contact
            </MenuLink>
          </MenuTrigger>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="top-full z-10 flex h-1 items-end justify-center overflow-hidden bg-primary transition-all data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in" />
      </NavigationMenu.List>

      <div className="absolute left-2 top-full flex w-full justify-start">
        <NavigationMenu.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded bg-white shadow transition-opacity data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in sm:w-[var(--radix-navigation-menu-viewport-width)] dark:border-white/30" />
      </div>
    </NavigationMenu.Root>
  );
};
const MenuLink = ({ className, to, children }) => {
  return (
    <NavigationMenu.Link href={to} className={className}>
      {children}
    </NavigationMenu.Link>
  );
};
MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
const MenuTrigger = ({ className, children, hasCaret = true }) => {
  return (
    <NavigationMenu.Trigger className={className}>
      {children}
      {hasCaret && (
        <CaretDownIcon
          className="relative transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180"
          aria-hidden
        />
      )}
    </NavigationMenu.Trigger>
  );
};
MenuTrigger.propTypes = {
  hasCaret: PropTypes.bool,
  classNames: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export const MegaMenuChrome = ({ children }) => (
  <section className="min-h-40 w-[calc(100vw-1rem)] min-w-[640px] bg-zinc-50 py-5">
    <div className="flex gap-4 sm:flex-col md:flex-row md:gap-2">{children}</div>
  </section>
);
export const MegaMenuItem = ({ children, title, containerCss }) => (
  <div className={classNames('grow-0 pl-6 align-top', containerCss)}>
    <p className="text-lg font-bold uppercase text-zinc-600/70 md:text-sm">{title}</p>
    <ul className="one m-0 grid list-none">{children}</ul>
  </div>
);

const ListItem = forwardRef(({ className, children, title, to, ...props }, forwardedRef) => (
  <li className="leading-[.5em]">
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'focus:shadow-mustard-400 block select-none rounded p-3 text-base no-underline outline-none hover:bg-zinc-100 focus:shadow-[0_0_0_2px] sm:py-1',
          className,
        )}
        href={to}
        {...props}
        ref={forwardedRef}
      >
        <div className="dark:text-mustard-600 font-medium text-zinc-700">{title}</div>
        <p className="dark:text-mustard-100/50 text-sm text-zinc-500">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
ListItem.displayName = 'InternalListItem';

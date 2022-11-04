import React, { ForwardRefExoticComponent, ForwardedRef, forwardRef } from 'react';

import { AccessControl } from '@kleeen/core-react';
import { Button } from '../nav-top.style';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuListSectionProps } from './menus.model';
import { NavigationMenu } from './navigation-menu';
import { roleAccessKeyTag } from '@kleeen/common/utils';

const MenuButton = forwardRef(
  ({ setOpen }: { setOpen: (open: boolean) => void }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <Button ref={ref} onClick={() => setOpen(true)} color="inherit" data-testid="main-menu-button">
        <MenuIcon className="nav-icons" />
      </Button>
    );
  },
);

export function MainNavigationMenu({ menuList, navigate, productName }: MenuListSectionProps) {
  return (
    <AccessControl id={roleAccessKeyTag('navigation')}>
      <NavigationMenu
        AnchorButton={MenuButton}
        dataTestId="ks-dropdown-menu"
        menuList={menuList}
        navigate={navigate}
        productName={productName}
      />
    </AccessControl>
  );
}

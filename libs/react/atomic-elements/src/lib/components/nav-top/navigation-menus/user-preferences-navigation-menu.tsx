import { ForwardedRef, forwardRef } from 'react';

import { AccessControl } from '@kleeen/core-react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Button } from '../nav-top.style';
import { MenuListSectionProps } from './menus.model';
import { NavigationMenu } from './navigation-menu';
import { roleAccessKeyTag } from '@kleeen/common/utils';

const MenuButton = forwardRef(
  ({ setOpen }: { setOpen: (open: boolean) => void }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <Button
        ref={ref}
        onClick={() => setOpen(true)}
        color="inherit"
        data-testid="user-preferences-menu-button"
      >
        <AccountCircleOutlinedIcon className="nav-icons" />
      </Button>
    );
  },
);

export function UserPreferencesNavigationMenu({ menuList, navigate, productName }: MenuListSectionProps) {
  return (
    <AccessControl id={roleAccessKeyTag('userpreferences')}>
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

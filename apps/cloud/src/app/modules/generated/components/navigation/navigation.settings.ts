import { NavigationSettings } from './navigation.model';

export const getSettings = (logout: () => void): NavigationSettings => {
  return {
    accountMenuOptions: [
      {
        title: 'User Preferences',
        path: '/profile/endUserPreferences/edit',
      },
      {
        title: 'Logout',
        path: '/logout',
        func: logout,
      },
    ],
    helpUrl: ``,
    logo: `assets/logo.png`,
    menuOptions: [
      {
        title: `Vehicle Inventory`,
        path: `/vehicle-inventory`,
        icon: `ks-navigation-6by6aivVqKv7XLUvt13Bq7`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Employee DB`,
        path: `/employee-db`,
        icon: `ks-navigation-aG8qwcrdGbF7drybizFZtF`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `College DB`,
        path: `/college-db`,
        icon: `ks-navigation-wQSJNEc1WkqbSYouEq9MkM`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Management`,
        path: `/management`,
        icon: `ks-navigation-eEXnjsGKro7aJ9aZMJ1tt5`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Entertainment`,
        path: `/entertainment`,
        icon: `ks-navigation-1ddmWdHrWoys6Wpztnzah8`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Service`,
        path: `/service`,
        icon: `ks-navigation-awVLXuxqsEdDeR8gofBwSi`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Hospital Management`,
        path: `/hospital-management`,
        icon: `ks-navigation-gDTN3zw1kJi41FyHtGjHnB`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
    ],
  };
};

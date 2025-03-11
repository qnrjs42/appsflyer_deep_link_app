import type {LinkingOptions} from '@react-navigation/native';
import type {RootStackNavigatorTypes} from '@typings/navigation';

export const NAVIGATION_LINKS = {
  HOME: '/home',
  DEEP_LINK: '/deep-link',
} as const;

export const navigationLinking: LinkingOptions<RootStackNavigatorTypes> = {
  prefixes: ['appsflyer-deep-link://'],
  config: {
    screens: {
      Home: NAVIGATION_LINKS.HOME,
      DeepLink: {
        path: `${NAVIGATION_LINKS.DEEP_LINK}/:id`,
        parse: {
          id: String,
        },
      },
    },
  },
};

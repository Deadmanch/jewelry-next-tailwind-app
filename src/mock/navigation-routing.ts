export enum NavigationRouting {
  HOME = '/',
  CHECKOUT = '/checkout',
  ABOUT = '/about',
  CONTACTS = '/contacts',
  TERMS_PURCHASE = '/terms-purchase',
  CONDITIONS = '/conditions',
  FAVORITES = '/favorites',
  CATALOG = '/catalog',
  PROFILE = '/profile'
}

export const NAVIGATION_MENU_DESKTOP = [
  {
    id: 1,
    name: 'Магазин',
    href: NavigationRouting.CATALOG
  },
  {
    id: 2,
    name: 'О нас',
    href: NavigationRouting.ABOUT
  }
]

export const NAVIGATION_FOOTER = [
  {
    id: 1,
    name: 'Контакты',
    href: NavigationRouting.CONTACTS
  },
  {
    id: 2,
    name: 'Условия покупки',
    href: NavigationRouting.TERMS_PURCHASE
  },
  {
    id: 3,
    name: 'Доставка и возврат',
    href: NavigationRouting.CONDITIONS
  }
]

import { CategoryNormalizerService } from './category-normalizer.service';

const game1 = {
  id: 'yggdrasil-joker-millions',
  slug: 'joker-millions',
  background:
    '//url/media/game/GenericCasinoNEW.jpg?u=1546507715',
  description: '',
  game_stakes: null,
  height: '360',
  name: 'Joker Millions',
  width: '640',
  thumbnail:
    '//url/media/game/desktop/lobby/150x140-joker-millions.jpg?u=1546507715',
  url: null,
  created_at: {
    date: '2015-04-13T11:05:48+00:00'
  },
  screenshot: null,
  homepage_image: null,
  vendor: 'yggdrasil',
  vendor_properties: null,
  meta: {
    description_short: '',
    currency: 'EUR',
    bonus: false,
    free_spins: false
  },
  enabled: false,
  label: 'Jackpot',
  cols: 1,
  rows: 1,
  pos_x: null,
  pos_y: null,
  volatility: 0,
  rating: 0,
  backgrounds: [
    '//url/media/game/GenericCasinoNEW.jpg?u=1546507715'
  ],
  screenshots: [],
  thumbnails: {
    '280x280':
      '//url/media/games/yggdrasil/7312/yggdrasil-7312-T280x280.jpg?u=1546507715',
    '280x600':
      '//url/media/games/yggdrasil/7312/yggdrasil-7312-T280x600.jpg?u=1546507715',
    '500x375':
      '//url/media/games/yggdrasil/7312/yggdrasil-7312-T500x375.jpg?u=1546507715',
    '600x280':
      '//url/media/games/yggdrasil/7312/yggdrasil-7312-T600x280.jpg?u=1546507715',
    legacy:
      '//url/media/game/desktop/lobby/150x140-joker-millions.jpg?u=1546507715'
  },
  jurisdiction: 'mga',
  login_required: false,
  _links: {
    self: {
      href:
        'https://url/games/yggdrasil-joker-millions'
    }
  }
};

const game2 = {
  id: 'yggdrasil-incinerator',
  slug: 'incinerator',
  background:
    '//url/media/game/GenericCasinoNEW.jpg?u=1455619541',
  description: '',
  game_stakes: null,
  height: '360',
  name: 'Incinerator',
  width: '640',
  thumbnail:
    '//url/media/game/150x140-incinerator-new.jpg?u=1455619541',
  url: null,
  created_at: {
    date: '2016-01-14T10:30:50+00:00'
  },
  screenshot: null,
  homepage_image: null,
  vendor: 'yggdrasil',
  vendor_properties: null,
  meta: {
    description_short: '',
    currency: 'EUR',
    bonus: false,
    free_spins: false
  },
  enabled: true,
  label: 'New',
  cols: 1,
  rows: 1,
  pos_x: null,
  pos_y: null,
  volatility: 1,
  rating: 1,
  backgrounds: [
    '//url/media/games/yggdrasil/7320/yggdrasil-7320-B470x920L.jpg?u=1455619541',
    '//url/media/games/yggdrasil/7320/yggdrasil-7320-B470x920R.jpg?u=1455619541'
  ],
  screenshots: [],
  thumbnails: {
    '280x280':
      '//url/media/games/yggdrasil/7320/yggdrasil-7320-T280x280.jpg?u=1455619541',
    '280x600':
      '//url/media/games/yggdrasil/7320/yggdrasil-7320-T280x600.jpg?u=1455619541',
    '600x280':
      '//url/media/games/yggdrasil/7320/yggdrasil-7320-T600x280.jpg?u=1455619541',
    legacy:
      '//url/media/game/150x140-incinerator-new.jpg?u=1455619541'
  },
  jurisdiction: 'mga',
  login_required: false,
  _links: {
    self: {
      href:
        'https://url/games/yggdrasil-incinerator'
    }
  }
};

const game3 = {
  id: 'amaya-live-blackjack-amaya-old',
  slug: 'live-blackjack-amaya-old',
  background:
    '//url/media/game/GenericCasinoNEW.jpg?u=1501835644',
  description: '',
  game_stakes: null,
  height: '480',
  name: 'Live Blackjack',
  width: '800',
  thumbnail:
    '//url/media/game/desktop/lobby/live-blackjack-150x140.jpg?u=1501835644',
  url: null,
  created_at: {
    date: '2015-07-29T15:52:31+00:00'
  },
  screenshot: null,
  homepage_image: null,
  vendor: 'amaya',
  vendor_properties: null,
  meta: {
    description_short: '',
    currency: 'EUR',
    bonus: false,
    free_spins: false
  },
  enabled: true,
  label: '',
  cols: 1,
  rows: 1,
  pos_x: null,
  pos_y: null,
  volatility: 0,
  rating: 0,
  backgrounds: [
    '//url/media/game/GenericCasinoNEW.jpg?u=1501835644'
  ],
  screenshots: [],
  thumbnails: {
    '280x280':
      '//url/media/games/amaya/20502/amaya-20502-T280x280.jpg?u=1501835644',
    '280x600':
      '//url/media/games/amaya/20502/amaya-20502-T280x600.jpg?u=1501835644',
    '600x280':
      '//url/media/games/amaya/20502/amaya-20502-T600x280.jpg?u=1501835644',
    legacy:
      '//url/media/game/desktop/lobby/live-blackjack-150x140.jpg?u=1501835644'
  },
  jurisdiction: 'mga',
  login_required: true,
  _links: {
    self: {
      href:
        'https://url/games/amaya-live-blackjack-amaya-old'
    }
  }
};

const API_RESPONSE = {
  _links: {
    self: {
      href: 'https://url/game-categories'
    }
  },
  _embedded: {
    game_categories: [
      {
        name: 'Popular Games',
        order: 0,
        slug: 'popular-games',
        _embedded: {
          games: [game1, game2]
        }
      },
      {
        name: 'Table Games',
        order: 2,
        slug: 'table-games',
        _embedded: {
          games: [game3]
        }
      }
    ]
  }
};

describe('CategoryNormalizerService', () => {
  it('should be normalize and filter API response correctly', () => {
    const service = new CategoryNormalizerService();

    const expected = {
      categories: [
        {
          name: 'Popular Games',
          slug: 'popular-games',
          games: [game2.id]
        },
        {
          name: 'Table Games',
          slug: 'table-games',
          games: [game3.id]
        },
      ],
      games: {
        [game2.id]: game2,
        [game3.id]: game3
      }
    };

    const normalized = service.normalizeCategories(API_RESPONSE);

    expect(normalized).toEqual(expected);
  });
});

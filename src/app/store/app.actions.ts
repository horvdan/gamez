export class FetchCategories {
  public static type = "FetchCategories";
}

export class FetchGameById {
  public static type = "FetchGameById";

  constructor(public readonly gameId: string) {}
}

export class SelectCategory {
  public static type = "SelectCategory";

  constructor(public readonly slug: string) {}
}

export class SearchGames {
  public static type = "SearchGames";

  constructor(public readonly searchTerm: string) {}
}

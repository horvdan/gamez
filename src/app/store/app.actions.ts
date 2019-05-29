export class FetchCategories {
  public static type = "FetchCategories";
}

export class FetchGameById {
  public static type = "FetchGameById";

  constructor(public readonly gameId: string) {}
}

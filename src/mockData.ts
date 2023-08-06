type DependencyObject = {
    dependencies: string;
    item: string;
  };
  
export const dependenciesArray: DependencyObject[] = [
    { dependencies: "t-shirt", item: "dress shirt" },
    { dependencies: "dress shirt", item: "pants" },
    { dependencies: "dress shirt", item: "suit jacket" },
    { dependencies: "tie", item: "suit jacket" },
    { dependencies: "pants", item: "suit jacket" },
    { dependencies: "belt", item: "suit jacket" },
    { dependencies: "suit jacket", item: "overcoat" },
    { dependencies: "dress shirt", item: "tie" },
    { dependencies: "suit jacket", item: "sun glasses" },
    { dependencies: "sun glasses", item: "overcoat" },
    { dependencies: "left sock", item: "pants" },
    { dependencies: "pants", item: "belt" },
    { dependencies: "suit jacket", item: "left shoe" },
    { dependencies: "suit jacket", item: "right shoe" },
    { dependencies: "left shoe", item: "overcoat" },
    { dependencies: "right sock", item: "pants" },
    { dependencies: "right shoe", item: "overcoat" },
    { dependencies: "t-shirt", item: "suit jacket" },
  ];
import "@tiptap/core";

export interface ColoredUnderlineOptions {
  HTMLAttributes: Record<string, string | number>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    coloredUnderline: {
      setColoredUnderline: (color: string) => ReturnType;
      toggleColoredUnderline: (color?: string) => ReturnType;
      unsetColoredUnderline: () => ReturnType;
    };
  }
}

import { UNDERLINE_COLOR } from "@/common/constants/color";
import { getRandomArrayItem } from "@/common/utils/array";
import { Mark, mergeAttributes } from "@tiptap/core";

export const ColoredUnderline = Mark.create({
  name: "coloredUnderline",

  priority: 1000,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => {
          const style = element.style.textDecorationColor;
          return style || null;
        },
        renderHTML: (attributes) => {
          if (!attributes.color) {
            return {};
          }
          return {
            style: `text-decoration: underline; text-decoration-color: ${attributes.color} !important; text-decoration-thickness: 2px; text-underline-offset: 3px;`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
        style: "text-decoration",
        getAttrs: (element) => {
          const el = element as HTMLElement;
          const hasUnderline = el.style.textDecoration?.includes("underline");
          const hasColor = el.style.textDecorationColor;
          return hasUnderline && hasColor ? {} : false;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },

  addCommands() {
    return {
      setColoredUnderline:
        (color) =>
        ({ commands }) => {
          return commands.setMark(this.name, { color });
        },
      toggleColoredUnderline:
        (color) =>
        ({ commands }) => {
          if (this.editor.isActive(this.name)) {
            return commands.unsetMark(this.name);
          }
          return commands.setMark(this.name, { color });
        },
      unsetColoredUnderline:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-u": () => {
        if (!this.editor.isActive(this.name)) {
          const randomColor = getRandomArrayItem(UNDERLINE_COLOR);
          console.log("randomColor", randomColor);
          return this.editor.commands.setColoredUnderline(randomColor);
        }

        return this.editor.commands.unsetColoredUnderline();
      },
    };
  },
});
